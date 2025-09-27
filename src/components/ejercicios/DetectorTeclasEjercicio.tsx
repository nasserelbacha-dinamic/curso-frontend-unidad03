import { useState } from 'react';

// Ejercicio 5: Tecla presionada
const DetectorTeclasEjercicio = () => {
  const [ultimaTecla, setUltimaTecla] = useState<string>('');
  const [texto, setTexto] = useState<string>('');

  const manejarTecla = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setUltimaTecla(e.key);
    console.log('Tecla presionada:', e.key);
  };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4">Ejercicio 5: Detector de Teclas</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          value={texto}
          onChange={manejarCambio}
          onKeyDown={manejarTecla}
          placeholder="Presiona cualquier tecla aquí..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">
              <strong>Última tecla:</strong> {ultimaTecla || 'Ninguna'}
            </p>
          </div>
          
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
            <p className="text-purple-800">
              <strong>Texto completo:</strong> {texto || 'Vacío'}
            </p>
          </div>
        </div>
        
        <p className="text-xs text-gray-500">
          Tipo del evento: React.KeyboardEvent&lt;HTMLInputElement&gt;
        </p>
      </div>
    </div>
  );
};

export default DetectorTeclasEjercicio;
