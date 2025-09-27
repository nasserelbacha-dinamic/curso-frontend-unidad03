import { useState } from 'react';
import SelectorColor from './SelectorColor';
import CajaColor from './CajaColor';
import CampoNombre from './CampoNombre';
import SaludoNombre from './SaludoNombre';

const EjemploLiftingState = () => {
  // Estado elevado para el color
  const [color, setColor] = useState<string>('white');
  
  // Estado elevado para el nombre
  const [nombre, setNombre] = useState<string>('');

  return (
    <div className="space-y-8">
      {/* Ejemplo 1: Selector de color */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">
          Ejemplo 1: Selector de Color (Lifting State Up)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectorColor cambiarColor={setColor} />
          <CajaColor color={color} />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          El estado <code className="bg-gray-100 px-2 py-1 rounded">color</code> vive en el componente padre y se comparte entre los hijos
        </p>
      </div>

      {/* Ejemplo 2: Campo nombre y saludo */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">
          Ejemplo 2: Campo Nombre y Saludo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CampoNombre cambiarNombre={setNombre} />
          <SaludoNombre nombre={nombre} />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">
          El estado <code className="bg-gray-100 px-2 py-1 rounded">nombre</code> se comparte entre el input y el saludo
        </p>
      </div>
    </div>
  );
};

export default EjemploLiftingState;
