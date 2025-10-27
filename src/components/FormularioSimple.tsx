// Componente 4: Eventos + Estado
import { useState } from 'react';

const FormularioSimple = () => {
  const [nombre, setNombre] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', { nombre, mensaje });
    alert(`Datos: ${nombre} - ${mensaje}`);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      <h2>4. Eventos y Formularios</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre: </label>
          <input 
            type="text"
            value={nombre}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Mensaje: </label>
          <input 
            type="text"
            value={mensaje}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMensaje(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        <strong>Vista previa:</strong> {nombre} dice: "{mensaje}"
      </p>
    </div>
  );
};

export default FormularioSimple;

