import { useEffect, useState } from 'react';

// Ejercicio 8: Ciclo de vida - desmontaje
const TemporizadorEjercicio = () => {
  const [segundos, setSegundos] = useState<number>(0);
  const [activo, setActivo] = useState<boolean>(false);

  useEffect(() => {
    let intervalo: NodeJS.Timeout | null = null;

    if (activo) {
      console.log('⏰ Temporizador iniciado');
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    // Función de limpieza que se ejecuta:
    // 1. Cuando el componente se desmonta
    // 2. Antes de ejecutar el efecto nuevamente (cuando cambia 'activo')
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
        console.log('🛑 Intervalo del temporizador limpiado');
      }
    };
  }, [activo]); // Se ejecuta cuando cambia 'activo'

  // Efecto adicional para demostrar desmontaje completo
  useEffect(() => {
    return () => {
      console.log('❌ Componente TemporizadorEjercicio desmontado completamente');
    };
  }, []);

  const toggleTemporizador = () => {
    setActivo(!activo);
  };

  const resetear = () => {
    setActivo(false);
    setSegundos(0);
    console.log('🔄 Temporizador reseteado');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border text-center">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 8: Temporizador con Desmontaje</h3>
      
      <div className="text-5xl font-bold text-indigo-600 mb-6">
        {segundos}s
      </div>
      
      <div className="space-x-3 mb-4">
        <button
          onClick={toggleTemporizador}
          className={`px-6 py-2 rounded font-medium transition-colors ${
            activo 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {activo ? 'Detener' : 'Iniciar'}
        </button>
        
        <button
          onClick={resetear}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded font-medium transition-colors"
        >
          Reset
        </button>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>Estado: <span className="font-medium">{activo ? 'Corriendo' : 'Detenido'}</span></p>
        <p className="mt-1">Los mensajes de limpieza se ven en la consola</p>
      </div>
    </div>
  );
};

export default TemporizadorEjercicio;
