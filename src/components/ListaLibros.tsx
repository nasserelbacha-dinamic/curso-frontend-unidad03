// Componente ListaLibros - Usando .map() con arrays tipados
import type { Libro } from '../types';
import TarjetaLibro from './TarjetaLibro';

interface Props {
  libros: Libro[];
}

const ListaLibros = ({ libros }: Props) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          📚 Mi Colección de Libros
        </h2>
        <p className="text-gray-600">
          {libros.length} {libros.length === 1 ? 'libro' : 'libros'} en tu biblioteca
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libros.map((libro) => (
          <TarjetaLibro key={libro.id} libro={libro} />
        ))}
      </div>
    </div>
  );
};

export default ListaLibros;
