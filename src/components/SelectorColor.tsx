import type { SelectorColorProps } from '../types';

const SelectorColor = ({ cambiarColor }: SelectorColorProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border">
      <h4 className="font-semibold mb-3">Selector de Color</h4>
      <select 
        onChange={(e) => cambiarColor(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="white">Blanco</option>
        <option value="lightblue">Celeste</option>
        <option value="lightgreen">Verde</option>
        <option value="lightcoral">Coral</option>
        <option value="lightyellow">Amarillo</option>
        <option value="lightpink">Rosa</option>
      </select>
    </div>
  );
};

export default SelectorColor;
