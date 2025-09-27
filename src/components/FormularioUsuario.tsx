import { useState } from 'react';
import type { UsuarioEstado } from '../types';

const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<UsuarioEstado>({
    nombre: '',
    email: '',
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Formulario de Usuario</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={manejarCambio}
            placeholder="Ingresa tu nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={manejarCambio}
            placeholder="Ingresa tu email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-gray-700 mb-2">Datos ingresados:</h4>
          <p className="text-gray-600">
            <strong>Nombre:</strong> {usuario.nombre || 'Sin especificar'}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {usuario.email || 'Sin especificar'}
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;
