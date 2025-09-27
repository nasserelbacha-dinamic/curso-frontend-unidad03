import type { SaludoNombreProps } from '../types';

const SaludoNombre = ({ nombre }: SaludoNombreProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border text-center">
      <h4 className="font-semibold mb-3">Saludo</h4>
      <p className="text-lg text-blue-600">
        Hola, {nombre || 'usuario desconocido'}
      </p>
    </div>
  );
};

export default SaludoNombre;
