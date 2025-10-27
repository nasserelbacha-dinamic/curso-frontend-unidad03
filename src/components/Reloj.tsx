// Componente 5: useEffect - Ciclo de Vida
import { useEffect, useState } from 'react';

const Reloj = () => {
  const [hora, setHora] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log('⏰ Reloj montado - intervalo iniciado');

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Función de limpieza
    return () => {
      clearInterval(intervalo);
      console.log('⏰ Reloj desmontado - intervalo limpiado');
    };
  }, []); // Array vacío = solo se ejecuta al montar

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h2>5. Ciclo de Vida - useEffect</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{hora}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        (Abre la consola para ver los logs de montaje y desmontaje)
      </p>
    </div>
  );
};

export default Reloj;

