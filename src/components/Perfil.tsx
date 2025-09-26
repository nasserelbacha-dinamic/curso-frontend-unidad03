// Componente Perfil - Composición de múltiples componentes
import type { Usuario } from '../types';
import Avatar from './Avatar';
import TarjetaUsuario from './TarjetaUsuario';
import DatosUsuario from './DatosUsuario';
import MensajeAdmin from './MensajeAdmin';

interface Props {
  usuario: Usuario;
}

const Perfil = ({ usuario }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Columna izquierda - Avatar y tarjeta de usuario */}
      <div className="space-y-6">
        <div className="card p-6 text-center">
          <Avatar 
            urlImagen={usuario.avatar} 
            nombre={usuario.nombre}
            tamaño="grande"
          />
        </div>
        
        <TarjetaUsuario 
          nombre={usuario.nombre}
          edad={25} // Edad hardcodeada para el ejemplo
          email={usuario.email}
        />
      </div>
      
      {/* Columna derecha - Datos y mensaje */}
      <div className="space-y-6">
        <div className="card p-6">
          <DatosUsuario usuario={usuario} />
        </div>
        
        <MensajeAdmin 
          esAdmin={usuario.esAdmin}
          nombre={usuario.nombre}
        />
      </div>
    </div>
  );
};

export default Perfil;
