// Componente 6: Lifting State Up
import { useState } from 'react';

// Componente hijo que MODIFICA el estado
interface InputNombreProps {
  cambiarNombre: (valor: string) => void;
}

const InputNombre = ({ cambiarNombre }: InputNombreProps) => {
  return (
    <div style={{ padding: '10px', background: '#e3f2fd', margin: '5px' }}>
      <h4>Hijo 1: Input</h4>
      <input 
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
    </div>
  );
};

// Componente hijo que MUESTRA el estado
interface MostrarNombreProps {
  nombre: string;
}

const MostrarNombre = ({ nombre }: MostrarNombreProps) => {
  return (
    <div style={{ padding: '10px', background: '#f3e5f5', margin: '5px' }}>
      <h4>Hijo 2: Saludo</h4>
      <p>{nombre ? `¡Hola, ${nombre}!` : 'Escribe tu nombre arriba'}</p>
    </div>
  );
};

// Componente PADRE que mantiene el estado
const EjemploLiftingState = () => {
  const [nombre, setNombre] = useState<string>('');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h2>6. Lifting State Up</h2>
      <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
        El estado "nombre" vive en el padre y se comparte entre los hijos
      </p>
      <InputNombre cambiarNombre={setNombre} />
      <MostrarNombre nombre={nombre} />
    </div>
  );
};

export default EjemploLiftingState;

