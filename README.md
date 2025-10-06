# 🛍️ TechStore - Ecommerce

Una aplicación React + TypeScript que demuestra todos los conceptos avanzados de la **Clase 4: Hooks en React con TypeScript** - useState y useEffect en profundidad.

## 🎯 Objetivos del Proyecto

Este proyecto implementa un ecommerce completo donde los usuarios pueden explorar productos, agregar al carrito y realizar compras, demostrando **Clase 4: Hooks Avanzados**:

- ✅ **Custom Hooks** (`useLocalStorage`, `useDebounce`, `useOnlineStatus`, `useWindowSize`)
- ✅ **useState avanzado** con objetos complejos, arrays y funciones de actualización
- ✅ **useEffect avanzado** con limpieza, múltiples efectos y event listeners
- ✅ **Persistencia de datos** con localStorage
- ✅ **Optimización de búsquedas** con debounce
- ✅ **Detección de conexión** en tiempo real
- ✅ **Tipado explícito** con TypeScript
- ✅ **Buenas prácticas** en el manejo de hooks

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de CSS utilitario
- **PostCSS** - Procesador de CSS

## 📁 Estructura del Proyecto

```
src/
├── components/                    # Componentes del ecommerce
│   ├── Header.tsx                 # Header con detector de conexión (useOnlineStatus)
│   ├── ProductoCard.tsx           # Tarjeta de producto con props tipadas
│   ├── ListaProductos.tsx         # Lista de productos con arrays
│   ├── Carrito.tsx                # Carrito de compras con persistencia
│   ├── Filtros.tsx                # Filtros con formularios controlados
│   ├── Buscador.tsx               # Búsqueda optimizada con debounce
│   ├── TemporizadorOfertas.tsx    # useEffect avanzado con múltiples efectos
│   └── FormularioContacto.tsx     # Formulario controlado
├── hooks/                         # Custom Hooks (Clase 4)
│   ├── useLocalStorage.ts         # Persistencia en localStorage
│   ├── useDebounce.ts             # Optimización de búsquedas
│   ├── useOnlineStatus.ts         # Detector de conexión
│   └── useWindowSize.ts           # Detector de tamaño de ventana
├── data/
│   └── productos.ts               # Datos de ejemplo
├── types/
│   └── index.ts                   # Interfaces TypeScript
└── App.tsx                        # App principal con useLocalStorage
```

## 🧩 Componentes Implementados

### 1. **Header** - Props tipadas y estado compartido
```tsx
<Header 
  carrito={carrito} 
  onMostrarCarrito={() => setMostrarCarrito(!mostrarCarrito)} 
/>
```

### 2. **ProductoCard** - Props con interfaces complejas
```tsx
<ProductoCard 
  producto={producto}
  onAgregarAlCarrito={agregarAlCarrito}
/>
```

### 3. **ListaProductos** - Arrays y .map() con props
```tsx
<ListaProductos 
  productos={productosFiltrados} 
  onAgregarAlCarrito={agregarAlCarrito} 
/>
```

### 4. **Carrito** - useState con objetos complejos
```tsx
<Carrito 
  carrito={carrito}
  onActualizarCantidad={actualizarCantidad}
  onRemoverProducto={removerDelCarrito}
  onLimpiarCarrito={limpiarCarrito}
/>
```

### 5. **Filtros** - Formularios controlados con useState
```tsx
<Filtros 
  categoria={filtros.categoria}
  precioMin={filtros.precioMin}
  precioMax={filtros.precioMax}
  soloDestacados={filtros.soloDestacados}
  onCambiarFiltros={setFiltros}
/>
```

### 6. **Buscador** - Lifting State Up
```tsx
<Buscador 
  termino={terminoBusqueda} 
  onCambiarTermino={setTerminoBusqueda} 
/>
```

### 7. **TemporizadorOfertas** - useEffect con temporizador
```tsx
<TemporizadorOfertas />
```

### 8. **FormularioContacto** - Formularios controlados
```tsx
<FormularioContacto />
```

## 🎨 Características Visuales

- **Diseño responsivo** con Tailwind CSS Grid y Flexbox
- **Gradientes modernos** y sombras personalizadas
- **Animaciones suaves** en hover y transiciones
- **Sistema de colores** personalizado con paleta primaria
- **Tipografía Inter** para mejor legibilidad
- **Componentes reutilizables** con clases utilitarias

## 💡 Conceptos de Clase 4 Aplicados

### 🎣 Custom Hooks

#### `useLocalStorage`
- **Propósito:** Persistir estado en localStorage automáticamente
- **Ubicación:** Carrito de compras
- **Demuestra:** 
  - Inicialización con función
  - useEffect para sincronizar con localStorage
  - Manejo de errores con try/catch
  - Tipado genérico `<T>`

```tsx
const [carrito, setCarrito] = useLocalStorage<CarritoType>('techstore-carrito', {
  items: [],
  total: 0,
  cantidadTotal: 0
});
```

#### `useDebounce`
- **Propósito:** Optimizar búsquedas retrasando la ejecución
- **Ubicación:** Buscador
- **Demuestra:**
  - useEffect con timeout
  - Limpieza de timeouts (cleanup)
  - Dependencias correctas

```tsx
const terminoDebounced = useDebounce(terminoLocal, 500);
```

#### `useOnlineStatus`
- **Propósito:** Detectar conexión a internet en tiempo real
- **Ubicación:** Header
- **Demuestra:**
  - Event listeners (`online`, `offline`)
  - Limpieza de múltiples listeners
  - Tipado de eventos del navegador

```tsx
const isOnline = useOnlineStatus();
```

#### `useWindowSize`
- **Propósito:** Detectar cambios de tamaño de ventana
- **Demuestra:**
  - Event listener `resize`
  - Tipado de `UIEvent`
  - Estado con interfaz personalizada

### 🔧 useState Avanzado

- **Arrays de objetos complejos** en el carrito
- **Funciones de actualización** basadas en valor anterior (`prev => ...`)
- **Inicialización con función** en useLocalStorage
- **Inmutabilidad** con spread operator
- **Tipado explícito** con interfaces complejas

```tsx
setCarrito((prev) => ({
  ...prev,
  items: [...prev.items, nuevoItem]
}));
```

### ⚡ useEffect Avanzado

#### Múltiples efectos separados
```tsx
// Efecto 1: Temporizador
useEffect(() => {
  const intervalo = setInterval(() => {...}, 1000);
  return () => clearInterval(intervalo);
}, [activo]);

// Efecto 2: Ciclo de vida
useEffect(() => {
  console.log('Montado');
  return () => console.log('Desmontado');
}, []);

// Efecto 3: Alertas
useEffect(() => {
  if (tiempo === 600) console.log('⚠️ Últimos 10 min!');
}, [tiempo]);
```

#### Limpieza de efectos (cleanup)
- **Intervalos:** `clearInterval`
- **Timeouts:** `clearTimeout`
- **Event listeners:** `removeEventListener`

#### Dependencias correctas
- **`[]`:** Solo montaje/desmontaje
- **`[dep]`:** Cuando cambia la dependencia
- **Sin array:** Cada render (evitar)

### 🎨 Buenas Prácticas Aplicadas

1. **Tipado explícito** en todos los hooks
2. **Separación de responsabilidades** (un efecto, una responsabilidad)
3. **Reutilización de lógica** con custom hooks
4. **Limpieza obligatoria** de recursos externos
5. **Comentarios explicativos** en código complejo
6. **Logs de consola** para debugging

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

## 🎓 Funcionalidades del Ecommerce

### Catálogo de Productos
- ✅ Visualización de productos con imágenes
- ✅ Información detallada (precio, stock, categoría)
- ✅ Productos destacados y con descuentos
- ✅ Filtrado por categoría y precio
- ✅ Búsqueda en tiempo real

### Carrito de Compras
- ✅ Agregar productos al carrito
- ✅ Modificar cantidades
- ✅ Remover productos
- ✅ Cálculo automático de totales
- ✅ Limpiar carrito completo

### Interfaz de Usuario
- ✅ Header con contador de carrito
- ✅ Sidebar con filtros y búsqueda
- ✅ Temporizador de ofertas especiales
- ✅ Formulario de contacto
- ✅ Diseño responsive

## 📚 Qué Aprendiste en Clase 4

### ✅ Custom Hooks
- Crear hooks personalizados reutilizables
- Convenciones de nombrado (`use...`)
- Composición de hooks dentro de hooks
- Abstraer lógica compleja

### ✅ useState Avanzado
- Inicialización con función
- Funciones de actualización basadas en estado anterior
- Inmutabilidad con spread operator
- Tipado genérico y explícito

### ✅ useEffect Avanzado
- Separar efectos por responsabilidad
- Limpieza correcta de recursos
- Manejo de dependencias
- Event listeners del DOM

### ✅ Persistencia
- Sincronización con localStorage
- Manejo de errores en operaciones externas
- Serialización y deserialización de datos

### ✅ Optimización
- Debouncing de búsquedas
- Prevención de renders innecesarios
- Logs de debugging efectivos

## 📝 Ejercicios Adicionales Sugeridos

1. Crear un `useKeyPress` para detectar teclas específicas
2. Implementar un `useHover` para detectar mouse sobre elementos
3. Agregar un `usePrevious` para comparar valores anteriores
4. Crear un `useToggle` para estados booleanos
5. Implementar `useFetch` para llamadas a API

## 👥 Contribución

Este es un proyecto educativo. Si encuentras algún error o tienes sugerencias, ¡no dudes en contribuir!

---

**Desarrollado como parte del curso de React + TypeScript** 🚀