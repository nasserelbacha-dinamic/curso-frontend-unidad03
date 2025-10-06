# 📚 Clase 4: Hooks en React con TypeScript

## useState y useEffect en Profundidad

Este documento explica cómo se implementaron los conceptos avanzados de la Clase 4 en el proyecto TechStore.

---

## 🎣 Custom Hooks Implementados

### 1. `useLocalStorage<T>`

**Archivo:** `src/hooks/useLocalStorage.ts`

**Propósito:** Sincronizar estado con localStorage automáticamente.

**Conceptos demostrados:**
- ✅ Inicialización con función (lazy initialization)
- ✅ useEffect para sincronización externa
- ✅ Manejo de errores con try/catch
- ✅ Tipado genérico `<T>`
- ✅ Return type con `as const` para tuplas

**Uso en el proyecto:**
```tsx
// App.tsx
const [carrito, setCarrito] = useLocalStorage<CarritoType>('techstore-carrito', {
  items: [],
  total: 0,
  cantidadTotal: 0
});
```

**Por qué es importante:**
- El carrito persiste entre sesiones
- Se guarda automáticamente sin intervención manual
- Mejora la experiencia del usuario

---

### 2. `useDebounce<T>`

**Archivo:** `src/hooks/useDebounce.ts`

**Propósito:** Retrasar la ejecución de una función hasta que el usuario deje de escribir.

**Conceptos demostrados:**
- ✅ useEffect con setTimeout
- ✅ Limpieza de timeouts (cleanup function)
- ✅ Dependencias correctas `[value, delay]`
- ✅ Optimización de renders

**Uso en el proyecto:**
```tsx
// Buscador.tsx
const [terminoLocal, setTerminoLocal] = useState<string>(termino);
const terminoDebounced = useDebounce(terminoLocal, 500);

useEffect(() => {
  onCambiarTermino(terminoDebounced);
}, [terminoDebounced, onCambiarTermino]);
```

**Por qué es importante:**
- Reduce llamadas innecesarias al filtrar
- Mejora el rendimiento de la aplicación
- Evita búsquedas por cada tecla presionada

---

### 3. `useOnlineStatus`

**Archivo:** `src/hooks/useOnlineStatus.ts`

**Propósito:** Detectar si el usuario tiene conexión a internet.

**Conceptos demostrados:**
- ✅ Event listeners del navegador (`online`, `offline`)
- ✅ Limpieza de múltiples listeners
- ✅ Tipado correcto de eventos
- ✅ Estado booleano reactivo

**Uso en el proyecto:**
```tsx
// Header.tsx
const isOnline = useOnlineStatus();

<button disabled={!isOnline}>
  Carrito
</button>
```

**Por qué es importante:**
- Informa al usuario sobre su conectividad
- Deshabilita funciones que requieren internet
- Mejora la UX con feedback visual

---

### 4. `useWindowSize`

**Archivo:** `src/hooks/useWindowSize.ts`

**Propósito:** Detectar cambios en el tamaño de la ventana.

**Conceptos demostrados:**
- ✅ Event listener `resize`
- ✅ Tipado de `UIEvent` y `Window`
- ✅ Interfaz personalizada `WindowSize`
- ✅ Limpieza de listener único

**Uso potencial:**
```tsx
const { width, height } = useWindowSize();

if (width < 768) {
  // Mostrar vista móvil
}
```

**Por qué es importante:**
- Permite diseños responsivos dinámicos
- Útil para mostrar/ocultar elementos según pantalla
- Base para otros hooks responsivos

---

## 🔧 useState Avanzado

### Inicialización con función

**Dónde:** `useLocalStorage.ts`

```tsx
const [valorAlmacenado, setValorAlmacenado] = useState<T>(() => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : valorInicial;
  } catch (error) {
    console.error(`Error al leer ${key}:`, error);
    return valorInicial;
  }
});
```

**Por qué:**
- La función solo se ejecuta una vez (en el montaje)
- Evita operaciones costosas en cada render
- Útil para cálculos iniciales complejos

### Funciones de actualización

**Dónde:** `App.tsx` - Agregar al carrito

```tsx
const agregarAlCarrito = (producto: Producto) => {
  setCarrito((prev) => {
    const itemExistente = prev.items.find(
      (item: ItemCarrito) => item.producto.id === producto.id
    );

    let nuevosItems: ItemCarrito[];

    if (itemExistente) {
      // Actualizar cantidad
      nuevosItems = prev.items.map((item: ItemCarrito) =>
        item.producto.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      // Agregar nuevo item
      nuevosItems = [...prev.items, { producto, cantidad: 1 }];
    }

    // Calcular totales
    const nuevoTotal = nuevosItems.reduce(
      (sum: number, item: ItemCarrito) => sum + item.producto.precio * item.cantidad,
      0
    );
    const nuevaCantidadTotal = nuevosItems.reduce(
      (sum: number, item: ItemCarrito) => sum + item.cantidad,
      0
    );

    return {
      items: nuevosItems,
      total: nuevoTotal,
      cantidadTotal: nuevaCantidadTotal
    };
  });
};
```

**Por qué:**
- Garantiza que usamos el valor más reciente del estado
- Previene errores en actualizaciones concurrentes
- Esencial cuando el nuevo estado depende del anterior

### Inmutabilidad

**Siempre usar:**
- Spread operator: `{...objeto}`, `[...array]`
- `.map()`, `.filter()`, `.reduce()` para arrays
- Nunca mutar directamente: `objeto.prop = valor` ❌

**Ejemplo:**
```tsx
// ❌ INCORRECTO
carrito.items.push(nuevoItem);
setCarrito(carrito);

// ✅ CORRECTO
setCarrito(prev => ({
  ...prev,
  items: [...prev.items, nuevoItem]
}));
```

---

## ⚡ useEffect Avanzado

### Múltiples efectos separados

**Dónde:** `TemporizadorOfertas.tsx`

```tsx
// Efecto 1: Manejar el temporizador
useEffect(() => {
  if (!activo || tiempo <= 0) return;
  
  const intervalo = setInterval(() => {
    setTiempo(prevTiempo => {
      if (prevTiempo <= 1) {
        setActivo(false);
        return 0;
      }
      return prevTiempo - 1;
    });
  }, 1000);

  return () => clearInterval(intervalo);
}, [activo, tiempo]);

// Efecto 2: Ciclo de vida
useEffect(() => {
  console.log('🔥 Componente montado');
  return () => console.log('🧹 Componente desmontado');
}, []);

// Efecto 3: Alertas en hitos específicos
useEffect(() => {
  if (tiempo === 600) {
    console.log('⚠️ Últimos 10 minutos!');
  }
}, [tiempo]);
```

**Por qué separar:**
- Cada efecto tiene una responsabilidad única
- Más fácil de entender y mantener
- Se ejecutan solo cuando sus dependencias cambian

### Limpieza de efectos (cleanup)

**Regla de oro:** Si creas algo externo (intervalo, listener, suscripción), debes limpiarlo.

**Ejemplos:**

```tsx
// Intervalo
useEffect(() => {
  const id = setInterval(() => {...}, 1000);
  return () => clearInterval(id); // 🧹 Limpieza
}, []);

// Timeout
useEffect(() => {
  const id = setTimeout(() => {...}, 500);
  return () => clearTimeout(id); // 🧹 Limpieza
}, [value]);

// Event listener
useEffect(() => {
  const handleResize = (e: UIEvent) => {...};
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize); // 🧹 Limpieza
}, []);
```

### Dependencias correctas

| Dependencias | Cuándo se ejecuta | Uso |
|-------------|-------------------|-----|
| `[]` | Solo montaje/desmontaje | Inicialización única |
| `[dep]` | Cuando cambia `dep` | Sincronización con variable |
| Sin array | Cada render | ⚠️ **EVITAR** (ineficiente) |

**ESLint ayuda:**
```bash
npm install eslint-plugin-react-hooks
```

Configurar en `.eslintrc`:
```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

---

## 🎨 Buenas Prácticas Aplicadas

### 1. Tipado Explícito

```tsx
// ✅ Explícito
const [usuario, setUsuario] = useState<Usuario | null>(null);

// ❌ Implícito (puede causar errores)
const [usuario, setUsuario] = useState(null);
```

### 2. Nombres descriptivos de custom hooks

```tsx
// ✅ CORRECTO
useLocalStorage
useDebounce
useOnlineStatus

// ❌ INCORRECTO
useStorage
useDelay
useNet
```

### 3. Comentarios en código complejo

```tsx
// Efecto 1: Manejar el temporizador con setInterval
useEffect(() => {
  // Función de actualización basada en valor anterior
  setTiempo(prevTiempo => prevTiempo - 1);
}, [activo]);
```

### 4. Logs de debugging

```tsx
useEffect(() => {
  console.log('[TemporizadorOfertas] Iniciando contador...');
  return () => {
    console.log('[TemporizadorOfertas] Limpiando intervalo');
  };
}, [activo]);
```

### 5. Manejo de errores

```tsx
try {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : valorInicial;
} catch (error) {
  console.error(`Error al leer ${key}:`, error);
  return valorInicial;
}
```

---

## 📊 Comparación: Antes vs Después

### Carrito sin persistencia (Clase 3)
```tsx
const [carrito, setCarrito] = useState<CarritoType>({
  items: [],
  total: 0,
  cantidadTotal: 0
});
// ❌ Se pierde al recargar la página
```

### Carrito con persistencia (Clase 4)
```tsx
const [carrito, setCarrito] = useLocalStorage<CarritoType>('techstore-carrito', {
  items: [],
  total: 0,
  cantidadTotal: 0
});
// ✅ Persiste entre sesiones automáticamente
```

---

### Búsqueda sin optimizar (Clase 3)
```tsx
<input
  onChange={(e) => setBusqueda(e.target.value)}
/>
// ❌ Filtra en cada tecla (costoso)
```

### Búsqueda optimizada (Clase 4)
```tsx
const [termino, setTermino] = useState('');
const terminoDebounced = useDebounce(termino, 500);

<input
  onChange={(e) => setTermino(e.target.value)}
/>
// ✅ Filtra solo al terminar de escribir
```

---

## 🚀 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview
```

---

## 🎓 Recursos de Aprendizaje

- [React Docs - Hooks](https://react.dev/reference/react)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [usehooks.com](https://usehooks.com/) - Colección de custom hooks

---

**Desarrollado como parte del curso de React + TypeScript - Clase 4** 🚀

