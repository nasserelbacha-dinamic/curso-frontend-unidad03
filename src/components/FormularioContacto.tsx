import { useState } from 'react';
import type { FormularioContacto as FormularioContactoType } from '../types';

const FormularioContacto = () => {
  const [formulario, setFormulario] = useState<FormularioContactoType>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [enviado, setEnviado] = useState<boolean>(false);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('=== FORMULARIO DE CONTACTO ===');
    console.log('Nombre:', formulario.nombre);
    console.log('Email:', formulario.email);
    console.log('Mensaje:', formulario.mensaje);
    console.log('===============================');
    
    setEnviado(true);
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
      setFormulario({
        nombre: '',
        email: '',
        mensaje: '',
      });
    }, 3000);
  };

  if (enviado) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md border text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          ¡Mensaje enviado correctamente!
        </h3>
        <p className="text-gray-600">
          Revisa la consola para ver los datos enviados
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        📝 Formulario Controlado con useState
      </h3>
      
      <form onSubmit={manejarEnvio} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Ingresa tu nombre"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={manejarCambio}
            placeholder="tu@email.com"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            placeholder="Escribe tu mensaje aquí..."
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Enviar Mensaje
        </button>
      </form>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">Estado actual del formulario:</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Nombre:</strong> {formulario.nombre || 'Sin escribir'}</p>
          <p><strong>Email:</strong> {formulario.email || 'Sin escribir'}</p>
          <p><strong>Mensaje:</strong> {formulario.mensaje || 'Sin escribir'}</p>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          💡 Todos los campos están controlados por useState con tipos explícitos
        </p>
      </div>
    </div>
  );
};

export default FormularioContacto;