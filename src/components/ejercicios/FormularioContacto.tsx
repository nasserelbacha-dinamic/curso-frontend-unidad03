import { useState } from 'react';
import type { FormularioContacto as FormularioContactoType } from '../../types';

// Ejercicio 3: Formulario controlado
const FormularioContacto = () => {
  const [formulario, setFormulario] = useState<FormularioContactoType>({
    nombre: '',
    mensaje: '',
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 3: Formulario de Contacto</h3>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder="Tu nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            placeholder="Tu mensaje"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h4 className="font-semibold text-gray-700 mb-2">Valores en tiempo real:</h4>
        <p className="text-sm text-gray-600 mb-1">
          <strong>Nombre:</strong> {formulario.nombre || 'Sin escribir'}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Mensaje:</strong> {formulario.mensaje || 'Sin escribir'}
        </p>
      </div>
    </div>
  );
};

export default FormularioContacto;
