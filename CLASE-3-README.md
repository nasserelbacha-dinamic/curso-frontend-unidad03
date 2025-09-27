# Clase 3 - Props y Estado Tipado en React

## 📋 Contenido de la Clase

Esta clase cubre los conceptos fundamentales de React con TypeScript:

### 1. Props en React con TypeScript
- ✅ **Conceptos básicos**: Qué son las props y por qué tiparlas
- ✅ **Props opcionales**: Uso del operador `?` 
- ✅ **Interfaces**: Definición de contratos claros
- ✅ **Buenas prácticas**: Destructuring y nombres descriptivos

### 2. Estado en Componentes (useState)
- ✅ **useState tipado**: Declaración explícita de tipos
- ✅ **Estado primitivo**: string, number, boolean
- ✅ **Estado complejo**: objetos, arrays
- ✅ **Actualización inmutable**: Uso del spread operator

### 3. Manejo de Eventos
- ✅ **Eventos tipados**: `React.MouseEvent`, `React.ChangeEvent`, etc.
- ✅ **Formularios controlados**: Control total del estado
- ✅ **Eventos de teclado**: `React.KeyboardEvent`

### 4. Ciclo de Vida con useEffect
- ✅ **Montaje**: Ejecución al crear el componente
- ✅ **Actualización**: Reaccionar a cambios de estado/props
- ✅ **Desmontaje**: Limpieza de recursos
- ✅ **Dependencias**: Control preciso de cuándo ejecutar efectos

### 5. Lifting State Up
- ✅ **Elevación de estado**: Compartir datos entre componentes
- ✅ **Flujo de datos**: Props hacia abajo, eventos hacia arriba
- ✅ **Comunicación entre hermanos**: A través del componente padre

## 🎯 Ejercicios Implementados

### Ejercicios Básicos (1-5)
1. **UsuarioCard**: Props tipadas con profesión opcional
2. **Contador**: Estado numérico con tres botones
3. **FormularioContacto**: Formulario controlado con dos campos
4. **InputTipado**: Captura de texto con evento tipado
5. **DetectorTeclas**: Detección de teclas con `onKeyDown`

### Ejercicios de Ciclo de Vida (6-8)
6. **BienvenidaEjercicio**: Mensaje en consola al montar
7. **NombreConEfecto**: Efecto que reacciona a cambios
8. **TemporizadorEjercicio**: Limpieza de intervalos al desmontar

### Ejercicios Avanzados (9-10)
9. **LiftingStateEjercicio**: Estado compartido entre componentes
10. **FormularioLogin**: Submit con prevención de default

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── ejercicios/          # Ejercicios prácticos
│   │   ├── UsuarioCard.tsx
│   │   ├── ContadorEjercicio.tsx
│   │   ├── FormularioContacto.tsx
│   │   ├── InputTipado.tsx
│   │   ├── DetectorTeclasEjercicio.tsx
│   │   ├── BienvenidaEjercicio.tsx
│   │   ├── NombreConEfecto.tsx
│   │   ├── TemporizadorEjercicio.tsx
│   │   ├── LiftingStateEjercicio.tsx
│   │   └── FormularioLogin.tsx
│   ├── Saludo.tsx           # Ejemplo básico de props
│   ├── Usuario.tsx          # Props con opcionales
│   ├── Contador.tsx         # useState básico
│   ├── FormularioUsuario.tsx # Formulario con objeto
│   ├── InputTexto.tsx       # Eventos básicos
│   ├── DetectorTeclas.tsx   # Eventos de teclado
│   ├── Bienvenida.tsx       # useEffect montaje/actualización
│   ├── Reloj.tsx           # useEffect con intervalo
│   ├── Temporizador.tsx    # useEffect con limpieza
│   ├── SelectorColor.tsx   # Lifting state (hijo)
│   ├── CajaColor.tsx       # Lifting state (hijo)
│   ├── CampoNombre.tsx     # Lifting state (hijo)
│   ├── SaludoNombre.tsx    # Lifting state (hijo)
│   └── EjemploLiftingState.tsx # Lifting state (padre)
├── types/
│   └── index.ts            # Interfaces de TypeScript
└── App.tsx                 # Aplicación principal
```

## 🚀 Cómo usar este proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir el navegador** en la URL que muestra Vite (generalmente `http://localhost:5173`)

4. **Abrir las DevTools** (F12) para ver los mensajes de consola de los ejemplos de ciclo de vida

## 💡 Conceptos Clave Aprendidos

### Props Tipadas
```typescript
interface Props {
  nombre: string;
  edad: number;
  ciudad?: string; // Opcional
}

const Usuario = ({ nombre, edad, ciudad }: Props) => {
  return <div>{/* JSX */}</div>;
};
```

### Estado Tipado
```typescript
const [usuario, setUsuario] = useState<Usuario>({
  nombre: '',
  email: ''
});

// Actualización inmutable
setUsuario(prev => ({
  ...prev,
  nombre: 'Nuevo nombre'
}));
```

### Eventos Tipados
```typescript
const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTexto(e.target.value);
};

const manejarTecla = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log(e.key);
};
```

### useEffect
```typescript
// Montaje
useEffect(() => {
  console.log('Componente montado');
}, []);

// Actualización
useEffect(() => {
  console.log('Estado cambió');
}, [estado]);

// Desmontaje
useEffect(() => {
  return () => {
    console.log('Limpieza');
  };
}, []);
```

### Lifting State Up
```typescript
// Componente padre
const Padre = () => {
  const [estado, setEstado] = useState('');
  
  return (
    <>
      <HijoEditor cambiarEstado={setEstado} />
      <HijoVisualizador estado={estado} />
    </>
  );
};
```

## 🎓 Objetivos de Aprendizaje Cumplidos

- ✅ Entender qué son las props y cómo tiparlas
- ✅ Manejar estado local con useState y TypeScript
- ✅ Gestionar eventos del usuario de forma tipada
- ✅ Controlar el ciclo de vida de componentes con useEffect
- ✅ Implementar el patrón "lifting state up"
- ✅ Crear formularios controlados y funcionales
- ✅ Aplicar buenas prácticas de TypeScript en React

## 📚 Próximos Pasos

Esta clase sienta las bases para conceptos más avanzados como:
- Context API para estado global
- Custom hooks para lógica reutilizable
- Optimización de rendimiento con React.memo
- Manejo de efectos más complejos
- Integración con APIs externas
