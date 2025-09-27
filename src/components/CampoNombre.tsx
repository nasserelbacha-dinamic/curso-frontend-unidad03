import type { CampoNombreProps } from '../types';

const CampoNombre = ({ cambiarNombre }: CampoNombreProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h4 className="font-semibold mb-3">Ingresa tu nombre</h4>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="Escribí tu nombre"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CampoNombre;
