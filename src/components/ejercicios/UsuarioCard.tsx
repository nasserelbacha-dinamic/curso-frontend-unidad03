import type { UsuarioCardProps } from '../../types';

// Ejercicio 1: Props tipadas
const UsuarioCard = ({ nombre, edad, profesion }: UsuarioCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 1: UsuarioCard</h3>
      <div className="space-y-2">
        <p className="text-gray-700">
          <strong>Nombre:</strong> {nombre}
        </p>
        <p className="text-gray-700">
          <strong>Edad:</strong> {edad}
        </p>
        <p className="text-gray-700">
          <strong>Profesión:</strong> {profesion || 'No especificada'}
        </p>
      </div>
    </div>
  );
};

export default UsuarioCard;
