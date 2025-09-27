import { useState } from 'react';

const DetectorTeclas = () => {
  const [ultimaTecla, setUltimaTecla] = useState<string>('');

  const manejarTecla = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setUltimaTecla(e.key);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Detector de Teclas</h3>
      <div className="space-y-4">
        <input
          type="text"
          onKeyDown={manejarTecla}
          placeholder="Presiona cualquier tecla aquí..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-gray-700">
            <strong>Última tecla presionada:</strong> {ultimaTecla || 'Ninguna tecla presionada'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetectorTeclas;
