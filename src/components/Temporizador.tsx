import { useEffect, useState } from 'react';

const Temporizador = () => {
  const [segundos, setSegundos] = useState<number>(0);
  const [activo, setActivo] = useState<boolean>(false);

  useEffect(() => {
    let intervalo: NodeJS.Timeout | null = null;

    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    // Función de limpieza
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
        console.log('⏱️ Temporizador detenido');
      }
    };
  }, [activo]); // Se ejecuta cuando cambia 'activo'

  const iniciar = () => {
    setActivo(true);
    console.log('▶️ Temporizador iniciado');
  };

  const parar = () => {
    setActivo(false);
    console.log('⏸️ Temporizador pausado');
  };

  const resetear = () => {
    setActivo(false);
    setSegundos(0);
    console.log('🔄 Temporizador reseteado');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border text-center">
      <h3 className="text-lg font-semibold mb-4">Temporizador</h3>
      
      <div className="text-4xl font-bold text-green-600 mb-6">
        {segundos}s
      </div>
      
      <div className="space-x-2">
        <button
          onClick={iniciar}
          disabled={activo}
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-4 py-2 rounded transition-colors"
        >
          Iniciar
        </button>
        <button
          onClick={parar}
          disabled={!activo}
          className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 text-white px-4 py-2 rounded transition-colors"
        >
          Pausar
        </button>
        <button
          onClick={resetear}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
          Reset
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mt-4">
        Estado: {activo ? 'Corriendo' : 'Detenido'}
      </p>
    </div>
  );
};

export default Temporizador;
