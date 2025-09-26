// Componente TarjetaLibro - Usando interface Libro con lógica condicional
import type { Libro } from '../types';

interface Props {
  libro: Libro;
}

const TarjetaLibro = ({ libro }: Props) => {
  return (
    <div className="card overflow-hidden hover:shadow-strong transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={libro.portada} 
          alt={`Portada de ${libro.titulo}`} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2">
          {libro.leido ? (
            <span className="badge badge-success">✅ Leído</span>
          ) : (
            <span className="badge badge-warning">📖 Por leer</span>
          )}
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{libro.titulo}</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <p><span className="font-medium">Autor:</span> {libro.autor}</p>
          <p><span className="font-medium">Género:</span> {libro.genero}</p>
          <p><span className="font-medium">Páginas:</span> {libro.paginas}</p>
        </div>
        
        {/* Retorno condicional basado en si está leído */}
        {libro.leido && libro.calificacion && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">⭐</span>
              <span className="text-sm font-medium text-gray-700">
                Calificación: {libro.calificacion}/5
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarjetaLibro;
