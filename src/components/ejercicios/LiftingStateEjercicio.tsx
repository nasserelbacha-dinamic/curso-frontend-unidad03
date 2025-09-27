import { useState } from 'react';

// Componentes hijos para el ejercicio 9
interface InputNombreProps {
  cambiarNombre: (valor: string) => void;
}

const InputNombre = ({ cambiarNombre }: InputNombreProps) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg border">
      <h4 className="font-semibold mb-2 text-blue-800">Input de Nombre</h4>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="Escribe tu nombre..."
        className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

interface MostrarNombreProps {
  nombre: string;
}

const MostrarNombre = ({ nombre }: MostrarNombreProps) => {
  return (
    <div className="bg-green-50 p-4 rounded-lg border text-center">
      <h4 className="font-semibold mb-2 text-green-800">Mostrar Nombre</h4>
      <p className="text-lg text-green-700">
        {nombre ? `¡Hola, ${nombre}!` : 'Escribe tu nombre en el input'}
      </p>
    </div>
  );
};

// Ejercicio 9: Lifting state up - nombre compartido
const LiftingStateEjercicio = () => {
  // Estado elevado que se comparte entre los dos componentes hijos
  const [nombre, setNombre] = useState<string>('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 9: Lifting State Up</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <InputNombre cambiarNombre={setNombre} />
        <MostrarNombre nombre={nombre} />
      </div>
      
      <div className="p-3 bg-gray-50 rounded-md">
        <p className="text-sm text-gray-600">
          <strong>Explicación:</strong> El estado <code className="bg-gray-200 px-1 rounded">nombre</code> vive 
          en este componente padre y se pasa a ambos hijos. InputNombre recibe la función para modificarlo, 
          y MostrarNombre recibe el valor para mostrarlo.
        </p>
      </div>
    </div>
  );
};

export default LiftingStateEjercicio;
