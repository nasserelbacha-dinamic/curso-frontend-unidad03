import { useState, useEffect } from 'react';

const TemporizadorOfertas = () => {
  const [tiempoRestante, setTiempoRestante] = useState<number>(3600); // 1 hora en segundos
  const [activo, setActivo] = useState<boolean>(true);

  useEffect(() => {
    console.log('⏰ TemporizadorOfertas montado');
    
    let intervalo: NodeJS.Timeout | null = null;

    if (activo && tiempoRestante > 0) {
      intervalo = setInterval(() => {
        setTiempoRestante((prev) => {
          if (prev <= 1) {
            setActivo(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    // Función de limpieza
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
        console.log('⏰ Intervalo del temporizador limpiado');
      }
    };
  }, [activo, tiempoRestante]);

  // useEffect para desmontaje
  useEffect(() => {
    return () => {
      console.log('⏰ TemporizadorOfertas desmontado');
    };
  }, []);

  const formatearTiempo = (segundos: number): string => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  const reiniciarTemporizador = () => {
    setTiempoRestante(3600);
    setActivo(true);
    console.log('🔄 Temporizador reiniciado');
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          🔥 ¡Ofertas por tiempo limitado!
        </h2>
        <p className="text-red-100 mb-4">
          useEffect con temporizador y limpieza
        </p>
        
        {tiempoRestante > 0 ? (
          <div className="text-4xl font-mono font-bold mb-4">
            {formatearTiempo(tiempoRestante)}
          </div>
        ) : (
          <div className="text-2xl font-bold mb-4 text-yellow-200">
            ⏰ ¡Ofertas terminadas!
          </div>
        )}
        
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActivo(!activo)}
            className="bg-white text-red-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {activo ? 'Pausar' : 'Reanudar'}
          </button>
          
          <button
            onClick={reiniciarTemporizador}
            className="bg-yellow-400 text-red-800 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
          >
            Reiniciar
          </button>
        </div>
        
        <p className="text-xs text-red-100 mt-3">
          Estado: {activo ? 'Corriendo' : 'Pausado'} | 
          Revisa la consola para ver los mensajes del ciclo de vida
        </p>
      </div>
    </div>
  );
};

export default TemporizadorOfertas;