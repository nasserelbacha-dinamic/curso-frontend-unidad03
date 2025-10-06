import { useState, useEffect } from 'react';

/**
 * Custom Hook: useOnlineStatus
 * Demuestra: Múltiples listeners, limpieza de efectos, estado booleano
 * Clase 4: Manejo de eventos de red con limpieza apropiada
 */
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    // Tipado correcto de eventos
    const handleOnline = () => {
      setIsOnline(true);
      console.log('Conexión restaurada');
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log('Conexión perdida');
    };

    // Agregar múltiples listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Limpieza: remover ambos listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Solo al montar/desmontar

  return isOnline;
}

export default useOnlineStatus;

