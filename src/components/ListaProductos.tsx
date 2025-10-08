import type { ListaProductosProps } from '../types';
import ProductoCard from './ProductoCard';

const ListaProductos = ({ productos }: ListaProductosProps) => {
  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          📱 Catálogo de Productos
        </h2>
        <p className="text-gray-600">
          Ejemplo de props tipadas y renderizado de arrays
        </p>
      </div>
      
      {productos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-gray-500">
            Intenta con otro término de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <ProductoCard 
              key={producto.id} 
              producto={producto} 
            />
          ))}
        </div>
      )}
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800 text-sm">
          <strong>💡 Concepto demostrado:</strong> Este componente recibe un array de productos 
          como prop tipada y usa .map() para renderizar cada ProductoCard con sus props correspondientes.
        </p>
      </div>
    </div>
  );
};

export default ListaProductos;