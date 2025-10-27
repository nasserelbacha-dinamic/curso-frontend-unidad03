// Componente 1: Props tipadas básicas
interface SaludoProps {
  nombre: string;
}

const Saludo = ({ nombre }: SaludoProps) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h2>1. Props Tipadas</h2>
      <p>Hola, {nombre}!</p>
    </div>
  );
};

export default Saludo;

