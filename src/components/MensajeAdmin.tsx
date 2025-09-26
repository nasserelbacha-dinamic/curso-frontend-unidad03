// Componente MensajeAdmin - Retorno condicional con ternario
interface Props {
  esAdmin: boolean;
  nombre: string;
}

const MensajeAdmin = ({ esAdmin, nombre }: Props) => {
  return (
    <div className="w-full">
      {esAdmin ? (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-strong">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">👑</span>
            <h3 className="text-xl font-bold">Bienvenido, Administrador {nombre}</h3>
          </div>
          <p className="text-purple-100">
            Tienes acceso completo a todas las funciones de la biblioteca.
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-strong">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">👋</span>
            <h3 className="text-xl font-bold">Hola, {nombre}</h3>
          </div>
          <p className="text-blue-100">
            Disfruta explorando tu biblioteca personal.
          </p>
        </div>
      )}
    </div>
  );
};

export default MensajeAdmin;
