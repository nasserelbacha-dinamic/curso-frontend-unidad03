import { useEffect, useState } from 'react';

// Ejercicio 7: Ciclo de vida - actualización
const NombreConEfecto = () => {
  const [nombre, setNombre] = useState<string>('');

  // Efecto que se ejecuta al montar
  useEffect(() => {
    console.log('🎯 Componente NombreConEfecto montado');
  }, []);

  // Efecto que se ejecuta cuando cambia el nombre
  useEffect(() => {
    if (nombre) {
      console.log('📝 El nombre cambió a:', nombre);
    }
  }, [nombre]); // Se ejecuta cuando 'nombre' cambia

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 7: Nombre con Efecto</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-yellow-800">
            <strong>Nombre actual:</strong> {nombre || 'Sin especificar'}
          </p>
          <p className="text-xs text-yellow-600 mt-1">
            Cada cambio se registra en la consola del navegador
          </p>
        </div>
      </div>
    </div>
  );
};

export default NombreConEfecto;
