import type { ProductoCardProps } from '../types';

// Componente que demuestra props tipadas - Clase 3
const ProductoCard = ({ producto, onAgregarAlCarrito }: ProductoCardProps) => {
  const precioConDescuento = producto.descuento 
    ? producto.precio * (1 - producto.descuento / 100)
    : producto.precio;

  const manejarClick = () => {
    onAgregarAlCarrito(producto);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <img 
          src={producto.imagen} 
          alt={producto.nombre}
          className="max-h-full object-contain"
        />
        {producto.destacado && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            Destacado
          </div>
        )}
        {producto.descuento && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            -{producto.descuento}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          {producto.nombre}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {producto.descripcion}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            {producto.descuento ? (
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${precioConDescuento.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  ${producto.precio.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${producto.precio.toFixed(2)}
              </span>
            )}
          </div>
          
        </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Stock: {producto.stock}
          </span>
        
        <div className="flex flex-col gap-2 justify-between mt-2">
          <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full">
            {producto.categoria}
          </span>
          
                <button
                  onClick={manejarClick}
                  disabled={producto.stock === 0}
                  className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                    producto.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-110'
                  }`}
                >
                  {producto.stock === 0 ? 'Agotado' : '+ Agregar al Carrito'}
                </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;
