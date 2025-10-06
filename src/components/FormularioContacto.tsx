import { useState } from 'react';
import type { FormularioContacto as FormularioContactoType } from '../types';

// Componente que demuestra formularios controlados con useState - Clase 3
const FormularioContacto = () => {
  const [formulario, setFormulario] = useState<FormularioContactoType>({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState<boolean>(false);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📧 Formulario enviado:', formulario);
    setEnviado(true);
    
    // Simular envío
    setTimeout(() => {
      setEnviado(false);
      setFormulario({
        nombre: '',
        email: '',
        mensaje: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border p-6">
      <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
      
      {enviado ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-4xl mb-4">✓</div>
          <p className="text-green-600 font-medium">Mensaje enviado correctamente!</p>
          <p className="text-gray-600 text-sm mt-2">Te responderemos pronto.</p>
        </div>
      ) : (
        <form onSubmit={manejarEnvio} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre *
            </label>
            <input
              type="text"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formulario.email}
              onChange={manejarCambio}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambio}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      )}

      {/* Mostrar estado en tiempo real */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h4 className="font-semibold text-gray-700 mb-2">Estado del formulario:</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Nombre:</strong> {formulario.nombre || 'Sin escribir'}</p>
          <p><strong>Email:</strong> {formulario.email || 'Sin escribir'}</p>
          <p><strong>Mensaje:</strong> {formulario.mensaje || 'Sin escribir'}</p>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;
