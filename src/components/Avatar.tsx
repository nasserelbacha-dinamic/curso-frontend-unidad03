// Componente Avatar - Props con URLs de imagen
interface Props {
  urlImagen: string;
  nombre: string;
  tamaño?: 'pequeño' | 'mediano' | 'grande';
}

const Avatar = ({ urlImagen, nombre, tamaño = 'mediano' }: Props) => {
  const sizeClasses = {
    pequeño: 'w-16 h-16',
    mediano: 'w-24 h-24',
    grande: 'w-32 h-32'
  };
  
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${sizeClasses[tamaño]} rounded-full overflow-hidden border-4 border-primary-200 shadow-medium hover:shadow-strong transition-shadow duration-300`}>
        <img 
          src={urlImagen} 
          alt={`Avatar de ${nombre}`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-3 font-semibold text-gray-700 text-sm">{nombre}</p>
    </div>
  );
};

export default Avatar;
