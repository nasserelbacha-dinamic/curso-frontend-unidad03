import { useState, useEffect } from 'react';

// Componente que demuestra useEffect - Clase 3
const TemporizadorOfertas = () => {
  const [tiempo, setTiempo] = useState<number>(3600); // 1 hora en segundos
  const [activo, setActivo] = useState<boolean>(true);

  // useEffect para el temporizador - se ejecuta cuando cambia 'activo' o 'tiempo'
  useEffect(() => {
    if (!activo || tiempo <= 0) return;

    const intervalo = setInterval(() => {
      setTiempo(prevTiempo => {
        if (prevTiempo <= 1) {
          setActivo(false);
          return 0;
        }
        return prevTiempo - 1;
      });
    }, 1000);

    // Función de limpieza
    return () => {
      clearInterval(intervalo);
    };
  }, [activo, tiempo]);

  // useEffect para mostrar mensaje cuando se monta el componente
  useEffect(() => {
    console.log('🔥 TemporizadorOfertas: Componente montado');
    
    return () => {
      console.log('🧹 TemporizadorOfertas: Componente desmontado');
    };
  }, []); // Array vacío = solo al montar

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
