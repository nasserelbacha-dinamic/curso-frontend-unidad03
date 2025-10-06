import { useState, useEffect } from 'react';

/**
 * Custom Hook: useDebounce
 * Demuestra: useEffect con limpieza de timeouts, optimización de renders
 * Clase 4: Manejo avanzado de efectos con delays y limpieza
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Crear timeout
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpieza: cancelar timeout si el valor cambia antes de que expire
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Se ejecuta cada vez que cambia value o delay

  return debouncedValue;
}

export default useDebounce;

