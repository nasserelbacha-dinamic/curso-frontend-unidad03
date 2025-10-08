import type { BuscadorProps } from '../types';

const Buscador = ({ termino, onCambiarTermino }: BuscadorProps) => {
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCambiarTermino(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        🔍 Buscador (Lifting State Up)
      </h3>
      <div className="relative">
        <input
          type="text"
          value={termino}
          onChange={manejarCambio}
          placeholder="Buscar productos..."
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        El estado se comparte con MostrarResultados
      </p>
    </div>
  );
};

export default Buscador;