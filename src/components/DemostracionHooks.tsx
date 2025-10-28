// Demostración completa de useState y useEffect con diferentes tipos de datos
import { useState, useEffect } from 'react';

// Interfaces para tipos complejos
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

interface Configuracion {
  tema: 'claro' | 'oscuro';
  idioma: string;
  notificaciones: boolean;
}

const DemostracionHooks = () => {
  // ========== useState con diferentes tipos de datos ==========
  
  // 1. Tipos primitivos
  const [contador, setContador] = useState<number>(0);
  const [texto, setTexto] = useState<string>('');
  const [activo, setActivo] = useState<boolean>(false);
  
  // 2. Arrays
  const [numeros, setNumeros] = useState<number[]>([1, 2, 3]);
  const [tareas, setTareas] = useState<string[]>(['Estudiar React', 'Practicar TypeScript']);
  
  // 3. Objetos
  const [usuario, setUsuario] = useState<Usuario>({
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan@email.com',
    activo: true
  });
  
  const [config, setConfig] = useState<Configuracion>({
    tema: 'claro',
    idioma: 'es',
    notificaciones: true
  });
  
  // 4. Estados derivados y computados
  const [tiempo, setTiempo] = useState<Date>(new Date());
  const [windowSize, setWindowSize] = useState<{width: number, height: number}>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    console.log('🚀 Componente montado - Este efecto se ejecuta solo una vez');
    
    return () => {
      console.log('🧹 Componente desmontado - Limpieza');
    };
  }, []); 
  
  useEffect(() => {
    console.log(`📊 El contador cambió a: ${contador}`);
    
    document.title = `Contador: ${contador}`;
    
    return () => {
      document.title = 'React App';
    };
  }, [contador]); 
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);
    
    return () => {
      clearInterval(intervalo);
      console.log('⏰ Intervalo del reloj limpiado');
    };
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('📏 Event listener de resize removido');
    };
  }, []);
  
  useEffect(() => {
    console.log(`👤 Usuario o configuración cambió:`, { usuario, config });
  }, [usuario, config]); 

  
  const agregarNumero = () => {
    const nuevoNumero = Math.floor(Math.random() * 100);
    setNumeros(prev => [...prev, nuevoNumero]);
  };
  
  const agregarTarea = () => {
    if (texto.trim()) {
      setTareas(prev => [...prev, texto]);
      setTexto('');
    }
  };
  
  const toggleUsuarioActivo = () => {
    setUsuario(prev => ({
      ...prev,
      activo: !prev.activo
    }));
  };
  
  const cambiarTema = () => {
    setConfig(prev => ({
      ...prev,
      tema: prev.tema === 'claro' ? 'oscuro' : 'claro'
    }));
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #007acc', 
      margin: '20px 0',
      backgroundColor: config.tema === 'oscuro' ? '#2d2d2d' : '#ffffff',
      color: config.tema === 'oscuro' ? '#ffffff' : '#000000',
      borderRadius: '8px'
    }}>
      <h2>🎯 Demostración Completa de Hooks</h2>
      <p><em>Abre las DevTools (F12) para ver los logs de useEffect</em></p>
      
      {/* Sección 1: Estados Primitivos */}
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>1. Estados Primitivos</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Contador (number):</strong> {contador}
          <div>
            <button onClick={() => setContador(prev => prev + 1)} style={{ margin: '5px' }}>
              +1
            </button>
            <button onClick={() => setContador(prev => prev - 1)} style={{ margin: '5px' }}>
              -1
            </button>
            <button onClick={() => setContador(0)} style={{ margin: '5px' }}>
              Reset
            </button>
          </div>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Texto (string):</strong> "{texto}"
          <div>
            <input 
              type="text" 
              value={texto} 
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Escribe algo..."
              style={{ margin: '5px', padding: '5px' }}
            />
          </div>
        </div>
        
        <div>
          <strong>Estado (boolean):</strong> {activo ? '✅ Activo' : '❌ Inactivo'}
          <div>
            <button onClick={() => setActivo(!activo)} style={{ margin: '5px' }}>
              Toggle
            </button>
          </div>
        </div>
      </div>

      {/* Sección 2: Arrays */}
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>2. Estados con Arrays</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Números:</strong> [{numeros.join(', ')}]
          <div>
            <button onClick={agregarNumero} style={{ margin: '5px' }}>
              Agregar Número Random
            </button>
            <button onClick={() => setNumeros([])} style={{ margin: '5px' }}>
              Limpiar
            </button>
          </div>
        </div>
        
        <div>
          <strong>Tareas:</strong>
          <ul>
            {tareas.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
          <div>
            <button onClick={agregarTarea} disabled={!texto.trim()} style={{ margin: '5px' }}>
              Agregar Tarea
            </button>
            <button onClick={() => setTareas([])} style={{ margin: '5px' }}>
              Limpiar Tareas
            </button>
          </div>
        </div>
      </div>

      {/* Sección 3: Objetos */}
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>3. Estados con Objetos</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Usuario:</strong>
          <div style={{ marginLeft: '20px' }}>
            <p>ID: {usuario.id}</p>
            <p>Nombre: {usuario.nombre}</p>
            <p>Email: {usuario.email}</p>
            <p>Estado: {usuario.activo ? '🟢 Activo' : '🔴 Inactivo'}</p>
          </div>
          <button onClick={toggleUsuarioActivo} style={{ margin: '5px' }}>
            Toggle Estado Usuario
          </button>
        </div>
        
        <div>
          <strong>Configuración:</strong>
          <div style={{ marginLeft: '20px' }}>
            <p>Tema: {config.tema === 'claro' ? '☀️ Claro' : '🌙 Oscuro'}</p>
            <p>Idioma: {config.idioma}</p>
            <p>Notificaciones: {config.notificaciones ? '🔔 Activadas' : '🔕 Desactivadas'}</p>
          </div>
          <div>
            <button onClick={cambiarTema} style={{ margin: '5px' }}>
              Cambiar Tema
            </button>
            <button 
              onClick={() => setConfig(prev => ({ ...prev, notificaciones: !prev.notificaciones }))}
              style={{ margin: '5px' }}
            >
              Toggle Notificaciones
            </button>
          </div>
        </div>
      </div>

      {/* Sección 4: Estados Derivados y useEffect */}
      <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h3>4. Estados Derivados y useEffect</h3>
        
        <div style={{ marginBottom: '10px' }}>
          <strong>Reloj en tiempo real:</strong>
          <p style={{ fontSize: '1.2em', fontFamily: 'monospace' }}>
            {tiempo.toLocaleTimeString()}
          </p>
        </div>
        
        <div>
          <strong>Tamaño de ventana:</strong>
          <p>{windowSize.width} x {windowSize.height} px</p>
          <p><em>Redimensiona la ventana para ver el cambio</em></p>
        </div>
      </div>

      {/* Información adicional */}
      <div style={{ 
        padding: '15px', 
        backgroundColor: config.tema === 'oscuro' ? '#1a1a1a' : '#f0f8ff',
        borderRadius: '5px',
        border: '1px solid #007acc'
      }}>
        <h4>💡 Conceptos Demostrados:</h4>
        <ul>
          <li><strong>useState:</strong> Manejo de estado con tipos primitivos, arrays y objetos</li>
          <li><strong>useEffect:</strong> Efectos de montaje, actualización y limpieza</li>
          <li><strong>Dependency Array:</strong> Control de cuándo se ejecutan los efectos</li>
          <li><strong>Cleanup Functions:</strong> Limpieza de recursos (intervalos, event listeners)</li>
          <li><strong>Estado Inmutable:</strong> Uso del spread operator para actualizar objetos/arrays</li>
          <li><strong>TypeScript:</strong> Tipado fuerte para mayor seguridad</li>
        </ul>
      </div>
    </div>
  );
};

export default DemostracionHooks;
