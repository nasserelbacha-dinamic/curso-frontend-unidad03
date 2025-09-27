import { useState } from 'react';

// Ejercicio 2: Componente con estado numérico
const ContadorEjercicio = () => {
  const [numero, setNumero] = useState<number>(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };

  const decrementar = () => {
    setNumero(numero - 1);
  };

  const resetear = () => {
    setNumero(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border text-center">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 2: Contador</h3>
      <div className="text-4xl font-bold text-purple-600 mb-6">
        {numero}
      </div>
      <div className="space-x-2">
        <button 
          onClick={incrementar}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
        >
          Incrementar
        </button>
        <button 
          onClick={decrementar}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
        >
          Decrementar
        </button>
        <button 
          onClick={resetear}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default ContadorEjercicio;
