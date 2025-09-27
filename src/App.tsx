// App principal - Clase 3: Props y Estado Tipado en React
import { useState } from 'react';

// Componentes básicos de ejemplo
import Saludo from './components/Saludo';
import Usuario from './components/Usuario';
import Contador from './components/Contador';
import FormularioUsuario from './components/FormularioUsuario';
import InputTexto from './components/InputTexto';
import DetectorTeclas from './components/DetectorTeclas';

// Ejemplos de ciclo de vida
import Bienvenida from './components/Bienvenida';
import Reloj from './components/Reloj';
import Temporizador from './components/Temporizador';

// Ejemplos de Lifting State Up
import EjemploLiftingState from './components/EjemploLiftingState';

// Ejercicios prácticos
import UsuarioCard from './components/ejercicios/UsuarioCard';
import ContadorEjercicio from './components/ejercicios/ContadorEjercicio';
import FormularioContacto from './components/ejercicios/FormularioContacto';
import InputTipado from './components/ejercicios/InputTipado';
import DetectorTeclasEjercicio from './components/ejercicios/DetectorTeclasEjercicio';
import BienvenidaEjercicio from './components/ejercicios/BienvenidaEjercicio';
import NombreConEfecto from './components/ejercicios/NombreConEfecto';
import TemporizadorEjercicio from './components/ejercicios/TemporizadorEjercicio';
import LiftingStateEjercicio from './components/ejercicios/LiftingStateEjercicio';
import FormularioLogin from './components/ejercicios/FormularioLogin';

function App() {
  const [mostrarReloj, setMostrarReloj] = useState<boolean>(true);
  const [mostrarTemporizador, setMostrarTemporizador] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📚 Clase 3: Props y Estado Tipado en React
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manejo de Eventos y Ciclo de Vida con TypeScript. 
            Esta clase cubre props tipadas, useState, eventos, useEffect y lifting state up.
          </p>
        </header>

        {/* Sección 1: Props en React con TypeScript */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🎯 1. Props en React con TypeScript
            </h2>
            <p className="text-gray-600">
              Ejemplos de props tipadas y props opcionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold mb-4">Saludo Simple</h3>
              <Saludo nombre="Camila" />
            </div>
            
            <Usuario nombre="Lucas" edad={25} ciudad="Mendoza" />
            <Usuario nombre="Sofía" edad={30} />
          </div>
        </section>

        {/* Sección 2: Estado con useState */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              📊 2. Estado en Componentes - useState
            </h2>
            <p className="text-gray-600">
              Ejemplos de useState con diferentes tipos de datos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Contador />
            <FormularioUsuario />
          </div>
        </section>

        {/* Sección 3: Manejo de Eventos */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ⌨️ 3. Manejo de Eventos con TypeScript
            </h2>
            <p className="text-gray-600">
              Eventos de clic, input y teclado correctamente tipados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputTexto />
            <DetectorTeclas />
          </div>
        </section>

        {/* Sección 4: Ciclo de Vida con useEffect */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              🔄 4. Ciclo de Vida con useEffect
            </h2>
            <p className="text-gray-600">
              Montaje, actualización y desmontaje de componentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Bienvenida />
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md border text-center">
                <h3 className="text-lg font-semibold mb-4">Control de Reloj</h3>
                <button
                  onClick={() => setMostrarReloj(!mostrarReloj)}
                  className={`px-4 py-2 rounded font-medium transition-colors ${
                    mostrarReloj 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {mostrarReloj ? 'Ocultar Reloj' : 'Mostrar Reloj'}
                </button>
              </div>
              {mostrarReloj && <Reloj />}
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md border text-center">
                <h3 className="text-lg font-semibold mb-4">Control de Temporizador</h3>
                <button
                  onClick={() => setMostrarTemporizador(!mostrarTemporizador)}
                  className={`px-4 py-2 rounded font-medium transition-colors ${
                    mostrarTemporizador 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {mostrarTemporizador ? 'Desmontar' : 'Montar'}
                </button>
              </div>
              {mostrarTemporizador && <Temporizador />}
            </div>
          </div>
        </section>

        {/* Sección 5: Lifting State Up */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ⬆️ 5. Lifting State Up
            </h2>
            <p className="text-gray-600">
              Elevación de estado para compartir datos entre componentes
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <EjemploLiftingState />
          </div>
        </section>

        {/* Sección 6: Ejercicios Prácticos */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              💪 6. Ejercicios Prácticos
            </h2>
            <p className="text-gray-600">
              Implementación de los 10 ejercicios de la clase
            </p>
          </div>
          
          {/* Ejercicios 1-5: Props, Estado y Eventos */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Props, Estado y Eventos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <UsuarioCard 
                nombre="Ana López" 
                edad={28} 
                profesion="Desarrolladora"
              />
              <ContadorEjercicio />
              <FormularioContacto />
              <InputTipado />
              <DetectorTeclasEjercicio />
            </div>
          </div>

          {/* Ejercicios 6-8: Ciclo de Vida */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Ciclo de Vida
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BienvenidaEjercicio />
              <NombreConEfecto />
              <TemporizadorEjercicio />
            </div>
          </div>

          {/* Ejercicios 9-10: Lifting State y Formularios */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Lifting State y Formularios Avanzados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LiftingStateEjercicio />
              <FormularioLogin />
            </div>
          </div>
        </section>

        {/* Footer con información adicional */}
        <footer className="bg-white rounded-lg shadow-md border p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">🎓 Conceptos Aprendidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Props Tipadas</h4>
              <ul className="space-y-1">
                <li>• Interfaces para props</li>
                <li>• Props opcionales</li>
                <li>• Validación con TypeScript</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Estado</h4>
              <ul className="space-y-1">
                <li>• useState con tipos</li>
                <li>• Estado de objetos</li>
                <li>• Actualización inmutable</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Eventos</h4>
              <ul className="space-y-1">
                <li>• Eventos tipados</li>
                <li>• onChange, onClick, onKeyDown</li>
                <li>• Prevención de defaults</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Ciclo de Vida</h4>
              <ul className="space-y-1">
                <li>• useEffect montaje/desmontaje</li>
                <li>• Dependencias</li>
                <li>• Limpieza de efectos</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-medium">
              💡 Recuerda: Abre las herramientas de desarrollo del navegador (F12) 
              para ver los mensajes de consola de los ejemplos de ciclo de vida.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;