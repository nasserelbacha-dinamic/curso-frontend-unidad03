// Componente CardProducto - Usando interface Producto
import type { Producto } from '../types';

interface Props {
  producto: Producto;
}

const CardProducto = ({ producto }: Props) => {
  return (
    <div className="card p-6 hover:scale-105 transition-transform duration-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{producto.nombre}</h3>
      <div className="space-y-2 mb-4">
        <p className="text-gray-600">
          <span className="font-medium">Precio:</span> 
          <span className="text-primary-600 font-bold ml-1">${producto.precio}</span>
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Stock:</span> 
          <span className="ml-1">{producto.stock} unidades</span>
        </p>
      </div>
      <div className={`badge ${producto.stock > 0 ? 'badge-success' : 'bg-red-100 text-red-800'}`}>
        {producto.stock > 0 ? '✅ Disponible' : '❌ Agotado'}
      </div>
    </div>
  );
};

export default CardProducto;
