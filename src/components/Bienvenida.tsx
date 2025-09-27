import { useEffect, useState } from 'react';

const Bienvenida = () => {
  const [nombre, setNombre] = useState<string>('');

  // Montaje: se ejecuta solo una vez
  useEffect(() => {
    console.log('✅ Componente Bienvenida montado');
  }, []);

  // Actualización: se ejecuta cada vez que cambia el nombre
  useEffect(() => {
    if (nombre) {
      console.log('📝 El nombre cambió a:', nombre);
    }
  }, [nombre]);

  // Desmontaje: función de limpieza
  useEffect(() => {
    return () => {
      console.log('❌ Componente Bienvenida desmontado');
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Componente Bienvenida (Ciclo de Vida)</h3>
      <p className="text-gray-600 mb-4">
        Abre la consola del navegador para ver los mensajes del ciclo de vida
      </p>
      
      <div className="space-y-4">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {nombre && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-blue-800">¡Bienvenido, {nombre}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bienvenida;
