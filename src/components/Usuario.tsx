import type { UsuarioProps } from '../types';

const Usuario = ({ nombre, edad, ciudad }: UsuarioProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{nombre}</h2>
      <p className="text-gray-600 mb-1">Edad: {edad}</p>
      <p className="text-gray-600">Ciudad: {ciudad ?? 'No especificada'}</p>
    </div>
  );
};

export default Usuario;
