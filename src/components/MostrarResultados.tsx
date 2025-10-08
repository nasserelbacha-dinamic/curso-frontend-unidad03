import type { MostrarResultadosProps } from '../types';

const MostrarResultados = ({ termino, cantidad }: MostrarResultadosProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        📊 Resultados (Estado Compartido)
      </h3>
      
      <div className="space-y-3">
        <div className="p-3 bg-blue-50 rounded-md">
          <p className="text-blue-800">
            <strong>Término de búsqueda:</strong> {termino || 'Sin búsqueda'}
          </p>
        </div>
        
        <div className="p-3 bg-green-50 rounded-md">
          <p className="text-green-800">
            <strong>Productos encontrados:</strong> {cantidad}
          </p>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-3">
        Este componente recibe el estado del componente padre
      </p>
    </div>
  );
};

export default MostrarResultados;
