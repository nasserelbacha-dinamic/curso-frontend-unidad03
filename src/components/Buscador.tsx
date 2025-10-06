import { useState, useEffect } from 'react';
import type { BuscadorProps } from '../types';
import useDebounce from '../hooks/useDebounce';

/**
 * Componente: Buscador
 * Clase 4 - Demuestra:
 * - Custom hook useDebounce para optimizar búsquedas
 * - useState local + lifting state up
 * - useEffect para sincronizar con padre solo cuando termine de escribir
 */
const Buscador = ({ termino, onCambiarTermino }: BuscadorProps) => {
  const [terminoLocal, setTerminoLocal] = useState<string>(termino);
  const terminoDebounced = useDebounce(terminoLocal, 500); // Custom hook con delay

  // Sincronizar con el padre solo cuando el término debounced cambie
  useEffect(() => {
    onCambiarTermino(terminoDebounced);
  }, [terminoDebounced, onCambiarTermino]);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminoLocal(e.target.value);
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg p-6 rounded-3xl shadow-2xl border border-white/40">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-gray-800">Buscar Productos</h3>
      </div>
      <div className="relative">
        <input
          type="text"
          value={terminoLocal}
          onChange={manejarCambio}
          placeholder="¿Qué estás buscando?"
          className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 bg-white shadow-lg hover:shadow-xl font-medium text-gray-700 placeholder-gray-400"
        />
      </div>
      
      {/* Indicador de debounce */}
      {terminoLocal !== terminoDebounced && (
        <div className="mt-3 p-2 bg-yellow-50 rounded-lg border border-yellow-200 flex items-center space-x-2">
          <div className="animate-spin h-4 w-4 border-2 border-yellow-600 border-t-transparent rounded-full"></div>
          <p className="text-xs text-yellow-700">Esperando...</p>
        </div>
      )}
      
      {terminoDebounced && (
        <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200">
          <p className="text-sm text-purple-700 font-bold">
            Buscando: <span className="text-purple-900">"{terminoDebounced}"</span>
          </p>
          <p className="text-xs text-purple-600 mt-1">
            (búsqueda optimizada con debounce de 500ms)
          </p>
        </div>
      )}
    </div>
  );
};

export default Buscador;
