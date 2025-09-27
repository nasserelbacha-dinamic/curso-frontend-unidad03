import { useEffect, useState } from 'react';

const Reloj = () => {
  const [hora, setHora] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('⏰ Reloj iniciado');
    
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Función de limpieza - se ejecuta al desmontar
    return () => {
      clearInterval(intervalo);
      console.log('⏰ Reloj detenido - intervalo limpiado');
    };
  }, []); // Array vacío = solo se ejecuta al montar

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border text-center">
      <h3 className="text-lg font-semibold mb-4">Reloj en Tiempo Real</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">
        {hora}
      </div>
      <p className="text-gray-500 text-sm">
        Se actualiza cada segundo usando useEffect
      </p>
    </div>
  );
};

export default Reloj;
