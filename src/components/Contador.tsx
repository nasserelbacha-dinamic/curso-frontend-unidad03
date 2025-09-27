import { useState } from 'react';

const Contador = () => {
  const [cuenta, setCuenta] = useState<number>(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  const decrementar = () => {
    setCuenta(cuenta - 1);
  };

  const resetear = () => {
    setCuenta(0);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border text-center">
      <h3 className="text-lg font-semibold mb-4">Contador con useState</h3>
      <p className="text-3xl font-bold text-blue-600 mb-6">Cuenta: {cuenta}</p>
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

export default Contador;
