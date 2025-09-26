// Componente DatosUsuario - Usando fragmentos para múltiples elementos
import type { Usuario } from '../types';

interface Props {
  usuario: Usuario;
}

const DatosUsuario = ({ usuario }: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">👤 Información del Usuario</h2>
      <div className="space-y-3">
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-primary-600 mr-3">👤</span>
          <div>
            <span className="font-medium text-gray-700">Nombre:</span>
            <span className="ml-2 text-gray-900">{usuario.nombre}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-primary-600 mr-3">📧</span>
          <div>
            <span className="font-medium text-gray-700">Email:</span>
            <span className="ml-2 text-gray-900">{usuario.email}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-primary-600 mr-3">🆔</span>
          <div>
            <span className="font-medium text-gray-700">ID:</span>
            <span className="ml-2 text-gray-900">{usuario.id}</span>
          </div>
        </div>
        
        <div className="flex items-center p-3 bg-gray-50 rounded-lg">
          <span className="text-primary-600 mr-3">🔐</span>
          <div>
            <span className="font-medium text-gray-700">Tipo:</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
              usuario.esAdmin 
                ? 'bg-purple-100 text-purple-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {usuario.esAdmin ? '👑 Administrador' : '👤 Usuario regular'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosUsuario;
