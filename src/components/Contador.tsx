// Componente 3: useState básico
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contador = () => {
  const [cuenta, setCuenta] = useState<number>(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0', display: 'flex', flexDirection: 'column' }}>
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

      {producto.map(prod => (
        <Link to={`/producto-detalle/${prod.id}`} key={prod.id}>
          <div className='bg-zinc-200 w-fit p-5 rounded-2xl shadow-2xl border-2 border-zinc-900 cursor-pointer hover:scale-105 transition-all duration-150'>
            <h1>{prod.titulo}</h1>
            <p>Precio: {prod.precio}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};


const producto = [
  {
    "id": 1,
    "titulo": "Producto 1",
    "precio": 11000
  },
  {
    "id": 2,
    "titulo": "Producto 2",
    "precio": 22000
  },
  {
    "id": 3,
    "titulo": "Producto 3",
    "precio": 55000
  },
  {
    "id": 4,
    "titulo": "Producto 4",
    "precio": 4000
  },
]

export default Contador;

