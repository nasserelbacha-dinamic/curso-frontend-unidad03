/**
 * App Principal - Clase 4: Hooks Avanzados en React con TypeScript
 * 
 * Demuestra:
 * - Custom hooks (useLocalStorage, useDebounce, useOnlineStatus)
 * - useState avanzado con objetos complejos y arrays
 * - useEffect con múltiples efectos y limpieza correcta
 * - Persistencia de estado con localStorage
 * - Lifting State Up entre componentes
 * - Props tipadas con TypeScript
 */

import { useState, useEffect } from 'react';

// Custom hooks (Clase 4)
import useLocalStorage from './hooks/useLocalStorage';

// Componentes del ecommerce
import Header from './components/Header';
import Buscador from './components/Buscador';
import Filtros from './components/Filtros';
import ListaProductos from './components/ListaProductos';
import CarritoComponent from './components/Carrito';
import TemporizadorOfertas from './components/TemporizadorOfertas';

// Componentes de formularios (Clase 5)
import FormularioContacto from './components/FormularioContacto';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioCheckout from './components/FormularioCheckout';

// Tipos e interfaces
import type { Producto, Carrito as CarritoType, ItemCarrito, FiltrosProductos } from './types';

// Datos de ejemplo
import { productosEjemplo } from './data/productos';

function App() {
  // Estados principales del ecommerce - Lifting State Up
  const [productos] = useState<Producto[]>(productosEjemplo);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productosEjemplo);
  
  // Carrito con persistencia en localStorage (Clase 4: useLocalStorage)
  const [carrito, setCarrito] = useLocalStorage<CarritoType>('techstore-carrito', {
    items: [],
    total: 0,
    cantidadTotal: 0
  });

  // Estados para filtros y búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');
  const [filtros, setFiltros] = useState<FiltrosProductos>({
    categoria: 'Todos',
    precioMin: 0,
    precioMax: 2000,
    soloDestacados: false
  });

  // Estados para UI
  const [mostrarCarrito, setMostrarCarrito] = useState<boolean>(false);
  const [vistaActual, setVistaActual] = useState<'tienda' | 'registro' | 'contacto' | 'checkout'>('tienda');

  // useEffect para filtrar productos cuando cambian los filtros o búsqueda
  useEffect(() => {
    let productosFiltrados = productos;

    // Filtrar por término de búsqueda
    if (terminoBusqueda) {
      productosFiltrados = productosFiltrados.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (filtros.categoria !== 'Todos') {
      productosFiltrados = productosFiltrados.filter(producto =>
        producto.categoria === filtros.categoria
      );
    }

    // Filtrar por rango de precios
    productosFiltrados = productosFiltrados.filter(producto =>
      producto.precio >= filtros.precioMin && producto.precio <= filtros.precioMax
    );

    // Filtrar solo destacados
    if (filtros.soloDestacados) {
      productosFiltrados = productosFiltrados.filter(producto =>
        producto.destacado
      );
    }

    setProductosFiltrados(productosFiltrados);
  }, [productos, terminoBusqueda, filtros]);

  // useEffect para calcular total del carrito
  useEffect(() => {
    const total = carrito.items.reduce((sum: number, item: ItemCarrito) => {
      return sum + (item.producto.precio * item.cantidad);
    }, 0);

    const cantidadTotal = carrito.items.reduce((sum: number, item: ItemCarrito) => {
      return sum + item.cantidad;
    }, 0);

    setCarrito((prev: CarritoType) => ({
      ...prev,
      total,
      cantidadTotal
    }));
  }, [carrito.items]);

  // useEffect para mostrar mensaje de bienvenida
  useEffect(() => {
    console.log('TechStore: Aplicación montada');
    console.log('Productos cargados:', productos.length);
    
    return () => {
      console.log('TechStore: Aplicación desmontada');
    };
  }, []);

  // Funciones para manejar el carrito
  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev: CarritoType) => {
      const itemExistente = prev.items.find((item: ItemCarrito) => item.producto.id === producto.id);
      
      if (itemExistente) {
        return {
          ...prev,
          items: prev.items.map((item: ItemCarrito) =>
            item.producto.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        };
      } else {
        return {
          ...prev,
          items: [...prev.items, { producto, cantidad: 1 }]
        };
      }
    });
  };

  const actualizarCantidad = (productoId: number, cantidad: number) => {
    if (cantidad <= 0) {
      removerDelCarrito(productoId);
      return;
    }

    setCarrito((prev: CarritoType) => ({
      ...prev,
      items: prev.items.map((item: ItemCarrito) =>
        item.producto.id === productoId
          ? { ...item, cantidad }
          : item
      )
    }));
  };

  const removerDelCarrito = (productoId: number) => {
    setCarrito((prev: CarritoType) => ({
      ...prev,
      items: prev.items.filter((item: ItemCarrito) => item.producto.id !== productoId)
    }));
  };

  const limpiarCarrito = () => {
    setCarrito({
      items: [],
      total: 0,
      cantidadTotal: 0
    });
  };

  // Función para finalizar compra (Clase 5)
  const finalizarCompra = (datosCheckout: any) => {
    console.log('✅ Compra finalizada:', datosCheckout);
    alert(`¡Gracias por tu compra, ${datosCheckout.nombreCompleto}! Total: $${carrito.total.toFixed(2)}`);
    limpiarCarrito();
    setVistaActual('tienda');
    setMostrarCarrito(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header 
        carrito={carrito}
        onMostrarCarrito={() => setMostrarCarrito(!mostrarCarrito)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Navegación - Clase 5: Múltiples formularios */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white/95 backdrop-blur-lg p-2 rounded-3xl shadow-2xl border border-white/40 inline-flex gap-2 flex-wrap">
            <button
              onClick={() => setVistaActual('tienda')}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                vistaActual === 'tienda'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              🛍️ Tienda
            </button>
            <button
              onClick={() => setVistaActual('registro')}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                vistaActual === 'registro'
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📝 Registro
            </button>
            <button
              onClick={() => setVistaActual('contacto')}
              className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                vistaActual === 'contacto'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              📧 Contacto
            </button>
            {carrito.cantidadTotal > 0 && (
              <button
                onClick={() => setVistaActual('checkout')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                  vistaActual === 'checkout'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                💳 Checkout
              </button>
            )}
          </div>
        </div>

        {/* Banner de ofertas - Solo en tienda */}
        {vistaActual === 'tienda' && (
          <div className="mb-8">
            <TemporizadorOfertas />
          </div>
        )}

        {/* Contenido según vista seleccionada */}
        {vistaActual === 'tienda' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar con filtros y búsqueda */}
            <div className="lg:col-span-1 space-y-6">
              <Buscador
                termino={terminoBusqueda}
                onCambiarTermino={setTerminoBusqueda}
              />
              <Filtros
                categoria={filtros.categoria}
                precioMin={filtros.precioMin}
                precioMax={filtros.precioMax}
                soloDestacados={filtros.soloDestacados}
                onCambiarFiltros={setFiltros}
              />
            </div>

            {/* Contenido principal */}
            <div className="lg:col-span-3">
              {mostrarCarrito ? (
                <CarritoComponent
                  carrito={carrito}
                  onActualizarCantidad={actualizarCantidad}
                  onRemoverProducto={removerDelCarrito}
                  onLimpiarCarrito={limpiarCarrito}
                />
              ) : (
                <ListaProductos
                  productos={productosFiltrados}
                  onAgregarAlCarrito={agregarAlCarrito}
                />
              )}
            </div>
          </div>
        )}

        {/* Vista de Registro - Clase 5 */}
        {vistaActual === 'registro' && (
          <div className="max-w-2xl mx-auto">
            <FormularioRegistro />
          </div>
        )}

        {/* Vista de Contacto - Clase 5 */}
        {vistaActual === 'contacto' && (
          <div className="max-w-2xl mx-auto">
            <FormularioContacto />
          </div>
        )}

        {/* Vista de Checkout - Clase 5 */}
        {vistaActual === 'checkout' && carrito.cantidadTotal > 0 && (
          <div className="max-w-3xl mx-auto">
            <FormularioCheckout
              carrito={carrito}
              onFinalizarCompra={finalizarCompra}
            />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;