// App principal - Demostrando todos los conceptos de la Clase 2
import Titulo from './components/Titulo';
import TarjetaUsuario from './components/TarjetaUsuario';
import MensajeCondicional from './components/MensajeCondicional';
import Avatar from './components/Avatar';
import CardProducto from './components/CardProducto';
import ListaLibros from './components/ListaLibros';
import MensajeAdmin from './components/MensajeAdmin';
import Perfil from './components/Perfil';
import type { Libro, Usuario, Producto } from './types';

function App() {
  // Datos de ejemplo para demostrar los componentes
  const usuario: Usuario = {
    id: 1,
    nombre: "María García",
    email: "maria@email.com",
    esAdmin: true,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  };

  const libros: Libro[] = [
    {
      id: 1,
      titulo: "El Quijote",
      autor: "Miguel de Cervantes",
      genero: "Novela",
      paginas: 863,
      leido: true,
      calificacion: 5,
      portada: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop"
    },
    {
      id: 2,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      paginas: 471,
      leido: false,
      portada: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop"
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      genero: "Ciencia ficción",
      paginas: 326,
      leido: true,
      calificacion: 4,
      portada: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop"
    }
  ];

  const productos: Producto[] = [
    {
      nombre: "Marcador de libros",
      precio: 5.99,
      stock: 15
    },
    {
      nombre: "Lámpara de lectura",
      precio: 29.99,
      stock: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Componente Titulo con props tipadas */}
        <Titulo texto="📚 Mi Biblioteca Personal" />
        
        {/* Componente Perfil - Composición de múltiples componentes */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">👤 Mi Perfil</h2>
            <p className="text-gray-600">Información personal y configuración</p>
          </div>
          <Perfil usuario={usuario} />
        </section>

        {/* Componente MensajeCondicional */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">💬 Mensajes</h2>
            <p className="text-gray-600">Demostración de renderizado condicional</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            <MensajeCondicional 
              mostrar={true} 
              mensaje="¡Bienvenido a tu biblioteca personal!" 
            />
            <MensajeCondicional 
              mostrar={false} 
              mensaje="Este mensaje no se mostrará" 
            />
          </div>
        </section>

        {/* Componente ListaLibros con .map() */}
        <section className="mb-12">
          <div className="card p-8">
            <ListaLibros libros={libros} />
          </div>
        </section>

        {/* Componente CardProducto con interface Producto */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🛍️ Productos Relacionados</h2>
            <p className="text-gray-600">Accesorios para tu biblioteca</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((producto, index) => (
              <CardProducto key={index} producto={producto} />
            ))}
          </div>
        </section>

        {/* Demostración de componentes individuales */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">🧩 Demostración de Componentes</h2>
            <p className="text-gray-600">Ejemplos de uso individual de cada componente</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Tarjeta de Usuario</h3>
              <TarjetaUsuario 
                nombre="Ana López" 
                edad={28} 
                email="ana@email.com" 
              />
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Avatar</h3>
              <Avatar 
                urlImagen="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                nombre="Ana López"
                tamaño="pequeño"
              />
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Mensaje de Usuario</h3>
              <MensajeAdmin 
                esAdmin={false}
                nombre="Ana López"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;