import type { ListaProductosProps } from '../types';
import ProductoCard from './ProductoCard';

// Componente que demuestra props tipadas y arrays - Clase 3
const ListaProductos = ({ productos, onAgregarAlCarrito }: ListaProductosProps) => {
  if (productos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md border p-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Productos</h3>
        <p className="text-gray-500">No se encontraron productos con los filtros aplicados.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border p-6">
      <h3 className="text-lg font-semibold mb-4">
        Productos ({productos.length})
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onAgregarAlCarrito={onAgregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
