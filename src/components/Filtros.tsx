import { useState } from 'react';
import type { FiltrosProps, FiltrosProductos } from '../types';
import { categorias } from '../data/productos';

// Componente que demuestra useState con objetos - Clase 3
const Filtros = ({ categoria, precioMin, precioMax, soloDestacados, onCambiarFiltros }: FiltrosProps) => {
  const [filtros, setFiltros] = useState<FiltrosProductos>({
    categoria,
    precioMin,
    precioMax,
    soloDestacados
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    
    const nuevoValor = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : type === 'number' 
        ? Number(value) 
        : value;

    const nuevosFiltros = {
      ...filtros,
      [name]: nuevoValor
    };

    setFiltros(nuevosFiltros);
    onCambiarFiltros(nuevosFiltros);
  };

  const limpiarFiltros = () => {
    const filtrosLimpios = {
      categoria: 'Todos',
      precioMin: 0,
      precioMax: 2000,
      soloDestacados: false
    };
    setFiltros(filtrosLimpios);
    onCambiarFiltros(filtrosLimpios);
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/40">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-gray-800">Filtros</h3>
      </div>
      
      <div className="space-y-6">
        {/* Categoría */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Categoría
          </label>
          <select
            name="categoria"
            value={filtros.categoria}
            onChange={manejarCambio}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white shadow-lg hover:shadow-xl font-medium text-gray-700 cursor-pointer"
          >
            {categorias.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Rango de precios */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rango de Precio
          </label>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">${filtros.precioMin}</span>
              <span className="text-sm font-medium text-gray-600">${filtros.precioMax}</span>
            </div>
            <div className="flex space-x-3">
              <input
                type="number"
                name="precioMin"
                value={filtros.precioMin}
                onChange={manejarCambio}
                min="0"
                max="2000"
                placeholder="Min"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 font-medium text-gray-700 shadow-md"
              />
              <span className="text-gray-400 self-center font-bold">-</span>
              <input
                type="number"
                name="precioMax"
                value={filtros.precioMax}
                onChange={manejarCambio}
                min="0"
                max="2000"
                placeholder="Max"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 font-medium text-gray-700 shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Solo destacados */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="soloDestacados"
              checked={filtros.soloDestacados}
              onChange={manejarCambio}
              className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
            />
            <label className="text-sm font-semibold text-gray-700">
              Solo productos destacados
            </label>
          </div>
        </div>

        {/* Botón limpiar */}
        <button
          onClick={limpiarFiltros}
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default Filtros;
