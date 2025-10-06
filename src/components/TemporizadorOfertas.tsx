import { useState, useEffect } from 'react';

/**
 * Componente: TemporizadorOfertas
 * Clase 4 - Demuestra:
 * - useEffect con setInterval y limpieza correcta (cleanup)
 * - Múltiples efectos separados por responsabilidad
 * - Funciones de actualización basadas en estado anterior
 * - Dependencias correctas en useEffect
 */
const TemporizadorOfertas = () => {
  const [tiempo, setTiempo] = useState<number>(3600); // 1 hora en segundos
  const [activo, setActivo] = useState<boolean>(true);

  // Efecto 1: Manejar el temporizador con setInterval (Clase 4: limpieza de intervalos)
  useEffect(() => {
    if (!activo || tiempo <= 0) return;

    console.log('[TemporizadorOfertas] Iniciando contador...');

    const intervalo = setInterval(() => {
      // Función de actualización basada en valor anterior (buena práctica Clase 4)
      setTiempo(prevTiempo => {
        if (prevTiempo <= 1) {
          setActivo(false);
          return 0;
        }
        return prevTiempo - 1;
      });
    }, 1000);

    // Limpieza: cancelar intervalo cuando el componente se desmonte o cambien las dependencias
    return () => {
      console.log('[TemporizadorOfertas] Limpiando intervalo');
      clearInterval(intervalo);
    };
  }, [activo, tiempo]); // Dependencias: se reinicia cuando cambia activo o tiempo

  // Efecto 2: Ciclo de vida - montaje y desmontaje (Clase 4: múltiples efectos separados)
  useEffect(() => {
    console.log('🔥 TemporizadorOfertas: Componente montado');
    
    return () => {
      console.log('🧹 TemporizadorOfertas: Componente desmontado (limpieza)');
    };
  }, []); // Array vacío = solo al montar/desmontar

  // Efecto 3: Alertas en hitos específicos (Clase 4: efecto con dependencia específica)
  useEffect(() => {
    if (tiempo === 1800) {
      console.log('⚠️ [TemporizadorOfertas] Quedan 30 minutos!');
    } else if (tiempo === 600) {
      console.log('⚠️ [TemporizadorOfertas] Últimos 10 minutos!');
    } else if (tiempo === 0) {
      console.log('⏰ [TemporizadorOfertas] ¡Oferta expirada!');
    }
  }, [tiempo]); // Dependencia: se ejecuta cada vez que cambia tiempo

  const formatearTiempo = (segundos: number): string => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segs = segundos % 60;
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  const reiniciarOferta = () => {
    setTiempo(3600);
    setActivo(true);
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white rounded-3xl shadow-2xl p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <h3 className="text-2xl font-bold">Oferta Especial</h3>
        </div>
        
        <div className="text-center">
          <div className="text-5xl font-black mb-4 tracking-wider drop-shadow-lg">
            {formatearTiempo(tiempo)}
          </div>
          
          <p className="text-lg mb-6 font-medium">
            {activo ? '¡Aprovecha esta oferta antes de que termine!' : '¡Oferta expirada!'}
          </p>
          
          {!activo && (
            <button
              onClick={reiniciarOferta}
              className="bg-white hover:bg-yellow-50 text-orange-700 px-10 py-4 rounded-3xl font-black transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 border-4 border-yellow-300"
            >
              🔄 Reiniciar Oferta
            </button>
          )}
          
          {activo && (
            <div className="flex items-center justify-center space-x-2 text-sm opacity-90">
              <span>Tiempo limitado</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemporizadorOfertas;
