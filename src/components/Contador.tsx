// Componente 3: useState básico
import { useState } from 'react';

const Contador = () => {
  const [cuenta, setCuenta] = useState<number>(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h2>3. Estado con useState</h2>
      <p>Cuenta: <strong>{cuenta}</strong></p>
      <button onClick={() => setCuenta(cuenta + 1)} style={{ marginRight: '10px' }}>
        Incrementar
      </button>
      <button onClick={() => setCuenta(cuenta - 1)} style={{ marginRight: '10px' }}>
        Decrementar
      </button>
      <button onClick={() => setCuenta(0)}>
        Resetear
      </button>
    </div>
  );
};

export default Contador;

