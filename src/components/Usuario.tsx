// Componente 2: Props con propiedades opcionales
interface UsuarioProps {
  nombre: string;
  edad: number;
  ciudad?: string; // Opcional
}

const Usuario = ({ nombre, edad, ciudad }: UsuarioProps) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h2>2. Props Opcionales</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Ciudad:</strong> {ciudad || 'No especificada'}</p>
    </div>
  );
};

export default Usuario;

