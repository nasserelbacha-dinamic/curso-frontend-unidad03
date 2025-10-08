// App principal - Clase 3: Props y Estado Tipado en React - Ecommerce Simplificado
import { useState, useEffect } from 'react';

// Componentes del ecommerce
import Header from './components/Header';
import Buscador from './components/Buscador';
import MostrarResultados from './components/MostrarResultados';
import ListaProductos from './components/ListaProductos';
import TemporizadorOfertas from './components/TemporizadorOfertas';
import FormularioContacto from './components/FormularioContacto';

// Tipos e interfaces
import type { Producto } from './types';

// Datos de ejemplo
import { productosEjemplo } from './data/productos';

function App() {
  // Estados principales del ecommerce - Lifting State Up
  const [productos] = useState<Producto[]>(productosEjemplo);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>(productosEjemplo);

  // Estados para búsqueda - Lifting State Up
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('');

  // Estados para UI
  const [mostrarFormulario, setMostrarFormulario] = useState<boolean>(false);

  // useEffect para filtrar productos cuando cambia la búsqueda
  useEffect(() => {
    let productosFiltrados = productos;

    // Filtrar por término de búsqueda
    if (terminoBusqueda) {
      productosFiltrados = productosFiltrados.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    }

    setProductosFiltrados(productosFiltrados);
  }, [productos, terminoBusqueda]);

  // useEffect para mostrar mensaje de bienvenida
  useEffect(() => {
    console.log('TechStore: Aplicación montada');
    console.log('Productos cargados:', productos.length);
    
    return () => {
      console.log('TechStore: Aplicación desmontada');
    };
  }, [productos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <Header 
        titulo="🛍️ TechStore - Clase 3"
        subtitulo="Props y Estado Tipado en React"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Banner de ofertas */}
        <div className="mb-8">
          <TemporizadorOfertas />
        </div>

        {/* Sección de búsqueda - Lifting State Up */}
        <section className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              🔍 Búsqueda de Productos (Lifting State Up)
            </h2>
            <p className="text-gray-600">
              El estado de búsqueda se comparte entre el buscador y los resultados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
            <Buscador 
              termino={terminoBusqueda} 
              onCambiarTermino={setTerminoBusqueda} 
            />
            <MostrarResultados 
              termino={terminoBusqueda}
              cantidad={productosFiltrados.length}
            />
          </div>
        </section>

        {/* Lista de productos */}
        <section className="mb-8">
          <ListaProductos productos={productosFiltrados} />
        </section>

        {/* Formulario de contacto */}
        <section className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              📝 Formulario de Contacto
            </h2>
            <p className="text-gray-600">
              Ejemplo de formulario controlado con useState
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <button
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  mostrarFormulario 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}
              </button>
            </div>
            
            {mostrarFormulario && <FormularioContacto />}
          </div>
        </section>

        {/* Footer educativo */}
        <footer className="bg-white rounded-lg shadow-md border p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">🎓 Conceptos Demostrados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Props Tipadas</h4>
              <ul className="space-y-1 text-left">
                <li>• ProductoCard recibe props tipadas</li>
                <li>• Header con props opcionales</li>
                <li>• Interfaces bien definidas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Estado y Eventos</h4>
              <ul className="space-y-1 text-left">
                <li>• useState con tipos explícitos</li>
                <li>• Formularios controlados</li>
                <li>• Eventos tipados correctamente</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ciclo de Vida</h4>
              <ul className="space-y-1 text-left">
                <li>• useEffect para montaje/desmontaje</li>
                <li>• Temporizador con limpieza</li>
                <li>• Lifting State Up implementado</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-medium">
              💡 Abre las herramientas de desarrollo (F12) para ver los mensajes de consola
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;