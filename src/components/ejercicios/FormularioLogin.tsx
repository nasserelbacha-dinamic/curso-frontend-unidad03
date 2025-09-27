import { useState } from 'react';
import type { FormularioLogin as FormularioLoginType } from '../../types';

// Ejercicio 10: Formulario y envío
const FormularioLogin = () => {
  const [formulario, setFormulario] = useState<FormularioLoginType>({
    usuario: '',
    contraseña: '',
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const manejarEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    console.log('=== DATOS DEL FORMULARIO ===');
    console.log('Usuario:', formulario.usuario);
    console.log('Contraseña:', formulario.contraseña);
    console.log('============================');
    
    // Mostrar también en la interfaz
    alert(`Datos enviados:\nUsuario: ${formulario.usuario}\nContraseña: ${formulario.contraseña}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 10: Formulario de Login</h3>
      
      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Usuario
          </label>
          <input
            type="text"
            name="usuario"
            value={formulario.usuario}
            onChange={manejarCambio}
            placeholder="Ingresa tu usuario"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            value={formulario.contraseña}
            onChange={manejarCambio}
            placeholder="Ingresa tu contraseña"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Iniciar Sesión
        </button>
      </form>
      
      <div className="mt-6 p-3 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600 mb-2">
          <strong>Estado actual del formulario:</strong>
        </p>
        <p className="text-xs text-gray-500">
          Usuario: {formulario.usuario || 'Sin escribir'}
        </p>
        <p className="text-xs text-gray-500">
          Contraseña: {formulario.contraseña ? '•'.repeat(formulario.contraseña.length) : 'Sin escribir'}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Al enviar, los datos se muestran en la consola del navegador
        </p>
      </div>
    </div>
  );
};

export default FormularioLogin;
