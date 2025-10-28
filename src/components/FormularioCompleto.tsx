// Demostración completa de formularios con useState y useEffect
import { useState, useEffect } from 'react';

// Interfaces para el formulario
interface FormularioData {
  nombre: string;
  email: string;
  edad: number;
  genero: string;
  pais: string;
  intereses: string[];
  newsletter: boolean;
  comentarios: string;
  fechaNacimiento: string;
  salario: number;
}

interface FormularioErrores {
  nombre?: string;
  email?: string;
  edad?: string;
  comentarios?: string;
}

const FormularioCompleto = () => {
  // Estado principal del formulario
  const [formData, setFormData] = useState<FormularioData>({
    nombre: '',
    email: '',
    edad: 0,
    genero: '',
    pais: 'Argentina',
    intereses: [],
    newsletter: false,
    comentarios: '',
    fechaNacimiento: '',
    salario: 0
  });

  // Estado para errores de validación
  const [errores, setErrores] = useState<FormularioErrores>({});
  
  // Estado para controlar el envío
  const [enviando, setEnviando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);
  
  // Estado para mostrar datos en tiempo real
  const [mostrarDatos, setMostrarDatos] = useState<boolean>(false);

  // Lista de países para el select
  const paises = ['Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú', 'Uruguay'];
  
  // Lista de intereses para checkboxes
  const listaIntereses = ['Programación', 'Diseño', 'Marketing', 'Datos', 'DevOps', 'Mobile'];

  // useEffect para validación en tiempo real
  useEffect(() => {
    const nuevosErrores: FormularioErrores = {};

    // Validar nombre
    if (formData.nombre && formData.nombre.length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = 'Email no válido';
    }

    // Validar edad
    if (formData.edad && (formData.edad < 18 || formData.edad > 100)) {
      nuevosErrores.edad = 'La edad debe estar entre 18 y 100 años';
    }

    // Validar comentarios
    if (formData.comentarios && formData.comentarios.length > 500) {
      nuevosErrores.comentarios = 'Los comentarios no pueden exceder 500 caracteres';
    }

    setErrores(nuevosErrores);
  }, [formData]);

  // useEffect para log de cambios
  useEffect(() => {
    console.log('📝 Datos del formulario actualizados:', formData);
  }, [formData]);

  // Función para manejar cambios en inputs de texto
  const handleInputChange = (campo: keyof FormularioData, valor: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  // Función para manejar checkboxes múltiples (intereses)
  const handleInteresChange = (interes: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      intereses: checked 
        ? [...prev.intereses, interes]
        : prev.intereses.filter(i => i !== interes)
    }));
  };

  // Función para validar todo el formulario
  const validarFormulario = (): boolean => {
    const nuevosErrores: FormularioErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    } else if (formData.nombre.length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = 'Email no válido';
    }

    if (!formData.edad || formData.edad < 18 || formData.edad > 100) {
      nuevosErrores.edad = 'La edad debe estar entre 18 y 100 años';
    }

    if (formData.comentarios.length > 500) {
      nuevosErrores.comentarios = 'Los comentarios no pueden exceder 500 caracteres';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Función para enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validarFormulario()) {
      console.log('❌ Formulario con errores');
      return;
    }

    setEnviando(true);
    
    // Simular envío al servidor
    try {
      console.log('📤 Enviando formulario:', formData);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setEnviado(true);
      console.log('✅ Formulario enviado exitosamente');
      
      // Reset después de 3 segundos
      setTimeout(() => {
        setEnviado(false);
        resetFormulario();
      }, 3000);
      
    } catch (error) {
      console.error('❌ Error al enviar:', error);
    } finally {
      setEnviando(false);
    }
  };

  // Función para resetear el formulario
  const resetFormulario = () => {
    setFormData({
      nombre: '',
      email: '',
      edad: 0,
      genero: '',
      pais: 'Argentina',
      intereses: [],
      newsletter: false,
      comentarios: '',
      fechaNacimiento: '',
      salario: 0
    });
    setErrores({});
    setEnviado(false);
  };

  // Calcular progreso del formulario
  const calcularProgreso = (): number => {
    const campos = Object.values(formData);
    const camposCompletos = campos.filter(campo => {
      if (typeof campo === 'string') return campo.trim() !== '';
      if (typeof campo === 'number') return campo > 0;
      if (typeof campo === 'boolean') return true; // Los boolean siempre cuentan
      if (Array.isArray(campo)) return campo.length > 0;
      return false;
    }).length;
    
    return Math.round((camposCompletos / campos.length) * 100);
  };

  const progreso = calcularProgreso();

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #28a745', 
      margin: '20px 0',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2>📋 Formulario Completo con Hooks</h2>
      <p><em>Demostración de manejo de estado en formularios complejos</em></p>

      {/* Barra de progreso */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>Progreso del formulario:</span>
          <span>{progreso}%</span>
        </div>
        <div style={{ 
          width: '100%', 
          height: '10px', 
          backgroundColor: '#e9ecef', 
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div style={{ 
            width: `${progreso}%`, 
            height: '100%', 
            backgroundColor: '#28a745',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {enviado && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#d4edda', 
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
          marginBottom: '20px',
          color: '#155724'
        }}>
          ✅ ¡Formulario enviado exitosamente! Se reseteará automáticamente.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          {/* Columna izquierda */}
          <div>
            {/* Input de texto */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Nombre completo *
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                placeholder="Ingresa tu nombre"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: errores.nombre ? '2px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
              {errores.nombre && (
                <span style={{ color: '#dc3545', fontSize: '0.8em' }}>
                  {errores.nombre}
                </span>
              )}
            </div>

            {/* Input de email */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="tu@email.com"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: errores.email ? '2px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
              {errores.email && (
                <span style={{ color: '#dc3545', fontSize: '0.8em' }}>
                  {errores.email}
                </span>
              )}
            </div>

            {/* Input numérico */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Edad *
              </label>
              <input
                type="number"
                value={formData.edad || ''}
                onChange={(e) => handleInputChange('edad', parseInt(e.target.value) || 0)}
                min="18"
                max="100"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: errores.edad ? '2px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
              {errores.edad && (
                <span style={{ color: '#dc3545', fontSize: '0.8em' }}>
                  {errores.edad}
                </span>
              )}
            </div>

            {/* Radio buttons */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Género
              </label>
              <div>
                {['Masculino', 'Femenino', 'Otro', 'Prefiero no decir'].map(genero => (
                  <label key={genero} style={{ display: 'block', marginBottom: '5px' }}>
                    <input
                      type="radio"
                      name="genero"
                      value={genero}
                      checked={formData.genero === genero}
                      onChange={(e) => handleInputChange('genero', e.target.value)}
                      style={{ marginRight: '8px' }}
                    />
                    {genero}
                  </label>
                ))}
              </div>
            </div>

            {/* Select */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                País
              </label>
              <select
                value={formData.pais}
                onChange={(e) => handleInputChange('pais', e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              >
                {paises.map(pais => (
                  <option key={pais} value={pais}>{pais}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Columna derecha */}
          <div>
            {/* Checkboxes múltiples */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Áreas de interés
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
                {listaIntereses.map(interes => (
                  <label key={interes} style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      checked={formData.intereses.includes(interes)}
                      onChange={(e) => handleInteresChange(interes, e.target.checked)}
                      style={{ marginRight: '8px' }}
                    />
                    {interes}
                  </label>
                ))}
              </div>
              <small style={{ color: '#666' }}>
                Seleccionados: {formData.intereses.length}
              </small>
            </div>

            {/* Input de fecha */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Fecha de nacimiento
              </label>
              <input
                type="date"
                value={formData.fechaNacimiento}
                onChange={(e) => handleInputChange('fechaNacimiento', e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ccc',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Range input */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Salario esperado: ${formData.salario.toLocaleString()}
              </label>
              <input
                type="range"
                min="30000"
                max="200000"
                step="5000"
                value={formData.salario}
                onChange={(e) => handleInputChange('salario', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8em', color: '#666' }}>
                <span>$30,000</span>
                <span>$200,000</span>
              </div>
            </div>

            {/* Checkbox simple */}
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Suscribirse al newsletter
              </label>
            </div>
          </div>
        </div>

        {/* Textarea - ancho completo */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Comentarios adicionales ({formData.comentarios.length}/500)
          </label>
          <textarea
            value={formData.comentarios}
            onChange={(e) => handleInputChange('comentarios', e.target.value)}
            placeholder="Cuéntanos más sobre ti..."
            rows={4}
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: errores.comentarios ? '2px solid #dc3545' : '1px solid #ccc',
              borderRadius: '4px',
              resize: 'vertical'
            }}
          />
          {errores.comentarios && (
            <span style={{ color: '#dc3545', fontSize: '0.8em' }}>
              {errores.comentarios}
            </span>
          )}
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            type="submit"
            disabled={enviando || Object.keys(errores).length > 0}
            style={{ 
              padding: '12px 24px', 
              backgroundColor: enviando ? '#6c757d' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: enviando ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            {enviando ? '⏳ Enviando...' : '📤 Enviar Formulario'}
          </button>
          
          <button
            type="button"
            onClick={resetFormulario}
            style={{ 
              padding: '12px 24px', 
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            🔄 Resetear
          </button>

          <button
            type="button"
            onClick={() => setMostrarDatos(!mostrarDatos)}
            style={{ 
              padding: '12px 24px', 
              backgroundColor: '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            {mostrarDatos ? '👁️ Ocultar Datos' : '👁️ Ver Datos'}
          </button>
        </div>
      </form>

      {/* Mostrar datos en tiempo real */}
      {mostrarDatos && (
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#e9ecef', 
          borderRadius: '5px',
          marginTop: '20px'
        }}>
          <h4>📊 Estado actual del formulario:</h4>
          <pre style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '10px', 
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '0.9em'
          }}>
            {JSON.stringify(formData, null, 2)}
          </pre>
          
          {Object.keys(errores).length > 0 && (
            <>
              <h4 style={{ color: '#dc3545' }}>❌ Errores de validación:</h4>
              <pre style={{ 
                backgroundColor: '#f8d7da', 
                padding: '10px', 
                borderRadius: '4px',
                color: '#721c24',
                fontSize: '0.9em'
              }}>
                {JSON.stringify(errores, null, 2)}
              </pre>
            </>
          )}
        </div>
      )}

      {/* Información educativa */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#d1ecf1',
        borderRadius: '5px',
        border: '1px solid #bee5eb',
        marginTop: '20px'
      }}>
        <h4>💡 Conceptos demostrados en este formulario:</h4>
        <ul style={{ marginBottom: '0' }}>
          <li><strong>useState con objetos complejos:</strong> Estado del formulario y errores</li>
          <li><strong>useEffect para validación:</strong> Validación en tiempo real</li>
          <li><strong>Controlled components:</strong> Todos los inputs controlados por React</li>
          <li><strong>Manejo de arrays:</strong> Checkboxes múltiples (intereses)</li>
          <li><strong>Validación de formularios:</strong> Validación síncrona y asíncrona</li>
          <li><strong>Estados de carga:</strong> Indicadores de envío y éxito</li>
          <li><strong>Tipos de input:</strong> text, email, number, radio, checkbox, select, date, range, textarea</li>
          <li><strong>Inmutabilidad:</strong> Actualización correcta del estado</li>
        </ul>
      </div>
    </div>
  );
};

export default FormularioCompleto;
