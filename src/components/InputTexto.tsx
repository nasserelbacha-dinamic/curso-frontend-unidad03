import { useState } from 'react';

const InputTexto = () => {
  const [texto, setTexto] = useState<string>('');

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Input con evento tipado</h3>
      <div className="space-y-4">
        <input
          type="text"
          value={texto}
          onChange={manejarCambio}
          placeholder="Escribe algo aquí..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-gray-700">
            <strong>Texto actual:</strong> {texto || 'Nada escrito aún'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputTexto;
