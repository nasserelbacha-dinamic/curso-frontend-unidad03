import type { CajaColorProps } from '../types';

const CajaColor = ({ color }: CajaColorProps) => {
  return (
    <div 
      style={{ backgroundColor: color }} 
      className="p-6 rounded-lg border-2 border-gray-300 text-center min-h-[120px] flex items-center justify-center"
    >
      <div>
        <p className="font-semibold text-gray-800">Fondo actual:</p>
        <p className="text-lg font-bold text-gray-700">{color}</p>
      </div>
    </div>
  );
};

export default CajaColor;
