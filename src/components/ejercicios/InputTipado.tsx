import { useState } from 'react';

// Ejercicio 4: Tipado de eventos
const InputTipado = () => {
  const [texto, setTexto] = useState<string>('');

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
    console.log('Texto actualizado:', e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 4: Input con Evento Tipado</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          value={texto}
          onChange={manejarCambio}
          placeholder="Escribe algo y mira la consola..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-blue-800">
            <strong>Texto capturado:</strong> {texto || 'Nada escrito aún'}
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Tipo del evento: React.ChangeEvent&lt;HTMLInputElement&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputTipado;
