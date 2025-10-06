# 🛍️ TechStore - Ecommerce

Una aplicación React + TypeScript que demuestra todos los conceptos fundamentales de la **Clase 3: Props y Estado Tipado en React**.

## 🎯 Objetivos del Proyecto

Este proyecto implementa un ecommerce completo donde los usuarios pueden explorar productos, agregar al carrito y realizar compras, demostrando:

- ✅ **Props tipadas** con interfaces TypeScript
- ✅ **useState** con diferentes tipos de datos
- ✅ **Manejo de eventos** tipados correctamente
- ✅ **useEffect** para ciclo de vida y efectos secundarios
- ✅ **Lifting State Up** para compartir estado entre componentes
- ✅ **Formularios controlados** con validación
- ✅ **Filtrado y búsqueda** en tiempo real
- ✅ **Carrito de compras** funcional

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de CSS utilitario
- **PostCSS** - Procesador de CSS

## 📁 Estructura del Proyecto

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

## 💡 Conceptos de la Clase 3 Aplicados

### Props Tipadas
- Interfaces bien definidas para todos los componentes
- Props opcionales con el operador `?`
- Validación de tipos en tiempo de compilación
- Autocompletado y detección de errores

### useState
- Estado primitivo (string, number, boolean)
- Estado complejo (objetos, arrays)
- Actualización inmutable con spread operator
- Tipado explícito para mejor seguridad

### Manejo de Eventos
- Eventos tipados correctamente
- Formularios controlados
- Prevención de defaults
- Eventos de teclado y mouse

### useEffect
- Montaje de componentes
- Actualización por dependencias
- Limpieza de efectos secundarios
- Temporizadores y listeners

### Lifting State Up
- Estado compartido entre componentes
- Props hacia abajo, eventos hacia arriba
- Comunicación entre componentes hermanos
- Centralización de la lógica de estado

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

## 📚 Próximos Pasos

Este proyecto está preparado para evolucionar en las siguientes clases:

- **Clase 4:** Hooks personalizados y Context API
- **Clase 5:** Routing y navegación
- **Clase 6:** Integración con APIs
- **Clase 7:** Testing y optimización

## 👥 Contribución

Este es un proyecto educativo. Si encuentras algún error o tienes sugerencias, ¡no dudes en contribuir!

---

**Desarrollado como parte del curso de React + TypeScript** 🚀