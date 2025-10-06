# Clase 3 - Props y Estado Tipado en React - Ecommerce

## 📋 Contenido de la Clase

Esta clase cubre los conceptos fundamentales de React con TypeScript aplicados a un ecommerce real:

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

## 🛍️ Ecommerce Implementado

### Componentes del Ecommerce
1. **Header**: Props tipadas y estado compartido
2. **ProductoCard**: Props con interfaces complejas
3. **ListaProductos**: Arrays y .map() con props
4. **Carrito**: useState con objetos complejos
5. **Filtros**: Formularios controlados con useState
6. **Buscador**: Lifting State Up
7. **TemporizadorOfertas**: useEffect con temporizador
8. **FormularioContacto**: Formularios controlados

### Funcionalidades Implementadas
- ✅ **Catálogo de productos** con filtrado y búsqueda
- ✅ **Carrito de compras** funcional
- ✅ **Temporizador de ofertas** con useEffect
- ✅ **Formulario de contacto** controlado
- ✅ **Interfaz responsive** con Tailwind CSS

## 📁 Estructura de Archivos

```
src/
├── components/           # Componentes del ecommerce
│   ├── Header.tsx       # Header con carrito
│   ├── ProductoCard.tsx # Tarjeta de producto con props tipadas
│   ├── ListaProductos.tsx # Lista de productos con arrays
│   ├── Carrito.tsx      # Carrito de compras con useState
│   ├── Filtros.tsx      # Filtros con formularios controlados
│   ├── Buscador.tsx     # Búsqueda con lifting state up
│   ├── TemporizadorOfertas.tsx # useEffect con temporizador
│   └── FormularioContacto.tsx # Formulario controlado
├── data/
│   └── productos.ts     # Datos de ejemplo
├── types/
│   └── index.ts         # Interfaces TypeScript
└── App.tsx              # Aplicación principal con lifting state up
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

## 💡 Conceptos Clave Aplicados

### Props Tipadas
```typescript
interface ProductoCardProps {
  producto: Producto;
  onAgregarAlCarrito: (producto: Producto) => void;
}

const ProductoCard = ({ producto, onAgregarAlCarrito }: ProductoCardProps) => {
  return <div>{/* JSX */}</div>;
};
```

### Estado Tipado
```typescript
const [carrito, setCarrito] = useState<Carrito>({
  items: [],
  total: 0,
  cantidadTotal: 0
});

// Actualización inmutable
setCarrito(prev => ({
  ...prev,
  total: nuevoTotal
}));
```

### Eventos Tipados
```typescript
const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTexto(e.target.value);
};

const manejarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Botón clickeado');
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
const App = () => {
  const [carrito, setCarrito] = useState<Carrito>({...});
  
  return (
    <>
      <Header carrito={carrito} onMostrarCarrito={setMostrarCarrito} />
      <ListaProductos onAgregarAlCarrito={agregarAlCarrito} />
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
- ✅ Construir una aplicación real y funcional

## 📚 Próximos Pasos

Esta clase sienta las bases para conceptos más avanzados como:
- Context API para estado global
- Custom hooks para lógica reutilizable
- Optimización de rendimiento con React.memo
- Manejo de efectos más complejos
- Integración con APIs externas