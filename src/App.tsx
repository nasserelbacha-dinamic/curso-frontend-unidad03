// Clase 3: Props y Estado Tipado en React
// Versión simplificada para clase de 1 hora

// Componentes para demostración
import Saludo from './components/Saludo';
// import Usuario from './components/Usuario';
import Contador from './components/Contador';
import FormularioSimple from './components/FormularioSimple';
// import EjemploLiftingState from './components/EjemploLiftingState';
// import DemostracionHooks from './components/DemostracionHooks';
// import FormularioCompleto from './components/FormularioCompleto';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DetalleProducto } from './components/DetalleProducto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contador />}/>
        <Route path="/contacto" element={<FormularioSimple />}/>
        <Route path="/perfil" element={<Saludo nombre='Federico Herrera'/>}/>
        <Route path='/producto-detalle/:id' element={<DetalleProducto />}/>
      </Routes>
    </BrowserRouter>
    // <div style={{ 
    //   maxWidth: '900px', 
    //   margin: '0 auto', 
    //   padding: '20px',
    //   fontFamily: 'Arial, sans-serif'
    // }}>
    //   <header style={{ textAlign: 'center', marginBottom: '30px' }}>
    //     <h1>Clase 3: Props y Estado Tipado en React</h1>
    //     <p>Conceptos fundamentales de React + TypeScript + Hooks Avanzados</p>
    //   </header>

    //   <Saludo nombre="Camila" />

    //   <Usuario nombre="Lucas" edad={25} ciudad="Mendoza" />
    //   <Usuario nombre="Sofía" edad={30} />

    //   <Contador />

    //   <FormularioSimple />

    //   <EjemploLiftingState />

    //   <DemostracionHooks />

    //   <FormularioCompleto />

    //   <footer style={{ 
    //     marginTop: '40px', 
    //     padding: '20px', 
    //     background: '#f5f5f5',
    //     textAlign: 'center'
    //   }}>
    //     <p>💡 Abre las DevTools (F12) para ver los logs del ciclo de vida</p>
    //   </footer>
    // </div>
  );
}

export default App;
