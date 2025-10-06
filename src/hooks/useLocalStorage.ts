import { useState, useEffect } from 'react';

/**
 * Custom Hook: useLocalStorage
 * Demuestra: useState avanzado, useEffect con dependencias, sincronización con API externa
 * Clase 4: Creación de hooks personalizados para reutilizar lógica
 */
function useLocalStorage<T>(key: string, valorInicial: T) {
  // Inicialización con función (buena práctica cuando el cálculo es costoso)
  const [valorAlmacenado, setValorAlmacenado] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(`Error al leer ${key} de localStorage:`, error);
      return valorInicial;
    }
  });

  // useEffect para sincronizar con localStorage cada vez que cambia el valor
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valorAlmacenado));
    } catch (error) {
      console.error(`Error al guardar ${key} en localStorage:`, error);
    }
  }, [key, valorAlmacenado]);

  return [valorAlmacenado, setValorAlmacenado] as const;
}

export default useLocalStorage;

