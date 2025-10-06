import { useState, useEffect } from 'react';

/**
 * Custom Hook: useWindowSize
 * Demuestra: useEffect con listeners, limpieza de efectos, tipado correcto de eventos
 * Clase 4: Manejo de eventos del DOM con limpieza apropiada
 */

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Tipado correcto del evento (buena práctica Clase 4)
    const handleResize = (event: UIEvent) => {
      const target = event.target as Window;
      setWindowSize({
        width: target.innerWidth,
        height: target.innerHeight,
      });
    };

    // Agregar listener
    window.addEventListener('resize', handleResize);

    // Limpieza del efecto (fundamental en Clase 4)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependencias vacías: solo se ejecuta al montar/desmontar

  return windowSize;
}

export default useWindowSize;

