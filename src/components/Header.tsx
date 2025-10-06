import type { HeaderProps } from '../types';
import useOnlineStatus from '../hooks/useOnlineStatus';

/**
 * Componente: Header
 * Clase 4 - Demuestra:
 * - Custom hook useOnlineStatus para detectar conexión
 * - useEffect con event listeners en el custom hook
 * - Props tipadas con interfaces
 */
const Header = ({ carrito, onMostrarCarrito }: HeaderProps) => {
  const isOnline = useOnlineStatus(); // Custom hook
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo con indicador de conexión */}
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              TechStore
            </h1>
            {/* Indicador de conexión (Clase 4: useOnlineStatus) */}
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${
              isOnline 
                ? 'bg-green-500/20 border border-green-300' 
                : 'bg-red-500/20 border border-red-300'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                isOnline ? 'bg-green-400' : 'bg-red-400'
              } ${isOnline ? 'animate-pulse' : 'animate-ping'}`}></div>
              <span className={`text-xs font-bold ${
                isOnline ? 'text-green-100' : 'text-red-100'
              }`}>
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>

          {/* Carrito */}
          <button
            onClick={onMostrarCarrito}
            disabled={!isOnline}
            className={`relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg transform ${
              isOnline
                ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white hover:shadow-xl hover:scale-105'
                : 'bg-gray-600/20 text-gray-300 cursor-not-allowed opacity-60'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-semibold">Carrito</span>
            {carrito.cantidadTotal > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-bounce shadow-lg">
                {carrito.cantidadTotal}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
