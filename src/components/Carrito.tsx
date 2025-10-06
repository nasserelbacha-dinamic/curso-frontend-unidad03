import type { CarritoProps } from '../types';

// Componente que demuestra props tipadas y manejo de eventos - Clase 3
const Carrito = ({ 
  carrito, 
  onActualizarCantidad, 
  onRemoverProducto, 
  onLimpiarCarrito 
}: CarritoProps) => {
  if (carrito.items.length === 0) {
    return (
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-6">Agrega algunos productos para comenzar tu compra</p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Carrito de Compras</h2>
        </div>
        <button
          onClick={onLimpiarCarrito}
          className="text-red-500 hover:text-red-700 text-sm font-semibold bg-red-50 hover:bg-red-100 px-3 py-1 rounded-lg transition-all duration-200"
        >
          Limpiar carrito
        </button>
      </div>

      <div className="space-y-4 mb-8">
        {carrito.items.map((item) => (
          <div key={item.producto.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                <img 
                  src={item.producto.imagen} 
                  alt={item.producto.nombre}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-1">{item.producto.nombre}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.producto.categoria}</p>
                <p className="text-lg font-semibold text-blue-600">${item.producto.precio.toFixed(2)} c/u</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onActualizarCantidad(item.producto.id, item.cantidad - 1)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={item.cantidad <= 1}
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                
                <span className="w-12 text-center font-bold text-lg bg-gray-50 rounded-lg py-2">{item.cantidad}</span>
                
                <button
                  onClick={() => onActualizarCantidad(item.producto.id, item.cantidad + 1)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              
              <div className="text-right">
                <p className="text-xl font-bold text-gray-800 mb-1">
                  ${(item.producto.precio * item.cantidad).toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">{item.cantidad} unidades</p>
              </div>
              
              <button
                onClick={() => onRemoverProducto(item.producto.id)}
                className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-gray-800">Total ({carrito.cantidadTotal} productos):</span>
          <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${carrito.total.toFixed(2)}
          </span>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={onLimpiarCarrito}
            className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Vaciar Carrito
          </button>
          <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
