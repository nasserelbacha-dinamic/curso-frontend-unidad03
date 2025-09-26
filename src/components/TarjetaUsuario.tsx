// Componente TarjetaUsuario - Props múltiples tipadas
interface Props {
  nombre: string;
  edad: number;
  email: string;
}

const TarjetaUsuario = ({ nombre, edad, email }: Props) => {
  return (
    <div className="card bg-gradient-to-br from-primary-500 to-purple-600 text-white p-6 rounded-xl shadow-strong">
      <h3 className="text-xl font-semibold mb-3">{nombre}</h3>
      <div className="space-y-2">
        <p className="flex items-center">
          <span className="mr-2">🎂</span>
          Edad: {edad} años
        </p>
        <p className="flex items-center">
          <span className="mr-2">📧</span>
          {email}
        </p>
      </div>
    </div>
  );
};

export default TarjetaUsuario;
