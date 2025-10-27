// Clase 3: Props y Estado Tipado en React
// Versión simplificada para clase de 1 hora
import { useState } from 'react';

// Componentes para demostración
import Saludo from './components/Saludo';
import Usuario from './components/Usuario';
import Contador from './components/Contador';
import FormularioSimple from './components/FormularioSimple';
import Reloj from './components/Reloj';
import EjemploLiftingState from './components/EjemploLiftingState';

function App() {
  const [mostrarReloj, setMostrarReloj] = useState<boolean>(true);

  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Clase 3: Props y Estado Tipado en React</h1>
        <p>Conceptos fundamentales de React + TypeScript</p>
      </header>

      {/* 1. Props tipadas */}
      <Saludo nombre="Camila" />

      {/* 2. Props opcionales */}
      <Usuario nombre="Lucas" edad={25} ciudad="Mendoza" />
      <Usuario nombre="Sofía" edad={30} />

      {/* 3. Estado con useState */}
      <Contador />

      {/* 4. Eventos y formularios */}
      <FormularioSimple />

      {/* 5. Ciclo de vida - useEffect */}
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
        <button 
          onClick={() => setMostrarReloj(!mostrarReloj)}
          style={{ marginBottom: '10px' }}
        >
          {mostrarReloj ? 'Ocultar Reloj' : 'Mostrar Reloj'}
        </button>
        {mostrarReloj && <Reloj />}
      </div>

      {/* 6. Lifting State Up */}
      <EjemploLiftingState />

      <footer style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#f5f5f5',
        textAlign: 'center'
      }}>
        <p>💡 Abre las DevTools (F12) para ver los logs del ciclo de vida</p>
      </footer>
    </div>
  );
}

export default App;
