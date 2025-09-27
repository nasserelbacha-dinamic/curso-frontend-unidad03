import { useEffect } from 'react';

// Ejercicio 6: Ciclo de vida - montaje
const BienvenidaEjercicio = () => {
  useEffect(() => {
    console.log('🎉 Componente BienvenidaEjercicio montado');
  }, []); // Array vacío = solo al montar

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border text-center">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 6: Componente Montado</h3>
      <div className="text-6xl mb-4">🎉</div>
      <p className="text-gray-600 mb-2">
        Este componente imprime un mensaje en la consola al montarse
      </p>
      <p className="text-sm text-gray-500">
        Abre las herramientas de desarrollo para ver el mensaje
      </p>
    </div>
  );
};

export default BienvenidaEjercicio;
