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

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header 
        carrito={carrito}
        onMostrarCarrito={() => setMostrarCarrito(!mostrarCarrito)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Banner de ofertas */}
        <div className="mb-8">
          <TemporizadorOfertas />
        </div>

        {/* Contenido principal */}
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

      </div>
    </div>
  );
}

export default App;