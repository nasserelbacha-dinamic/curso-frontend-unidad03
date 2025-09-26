# 📚 Mi Biblioteca Personal

Una aplicación React + TypeScript que demuestra todos los conceptos fundamentales de la **Clase 2: JSX y Componentes Tipados en React**.

## 🎯 Objetivos del Proyecto

Este proyecto implementa una biblioteca personal donde los usuarios pueden gestionar su colección de libros, demostrando:

- ✅ **JSX básico** y diferencias con HTML
- ✅ **Componentes funcionales** con TypeScript
- ✅ **Props tipadas** con interfaces
- ✅ **Retorno condicional** y expresiones dinámicas
- ✅ **Fragmentos** para múltiples elementos
- ✅ **Composición de componentes**
- ✅ **Arrays y .map()** para listas dinámicas
- ✅ **Estructura de carpetas** organizada

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de CSS utilitario
- **PostCSS** - Procesador de CSS

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Titulo.tsx       # Componente básico con props tipadas
│   ├── TarjetaUsuario.tsx # Props múltiples
│   ├── MensajeCondicional.tsx # Retorno condicional
│   ├── Avatar.tsx       # Props con URLs de imagen
│   ├── CardProducto.tsx # Interface Producto
│   ├── TarjetaLibro.tsx # Interface Libro con lógica condicional
│   ├── ListaLibros.tsx  # Arrays y .map()
│   ├── DatosUsuario.tsx # Fragmentos
│   ├── MensajeAdmin.tsx # Ternarios condicionales
│   └── Perfil.tsx       # Composición de componentes
├── types/
│   └── index.ts         # Interfaces TypeScript
├── App.tsx              # Componente principal
└── App.css              # Estilos de la aplicación
```

## 🧩 Componentes Implementados

### 1. **Titulo** - Props básicas
```tsx
<Titulo texto="Mi Biblioteca Personal" />
```

### 2. **TarjetaUsuario** - Props múltiples
```tsx
<TarjetaUsuario 
  nombre="María García" 
  edad={25} 
  email="maria@email.com" 
/>
```

### 3. **MensajeCondicional** - Retorno condicional
```tsx
<MensajeCondicional 
  mostrar={true} 
  mensaje="¡Bienvenido!" 
/>
```

### 4. **Avatar** - Props con URLs
```tsx
<Avatar 
  urlImagen="https://..." 
  nombre="María"
  tamaño="grande"
/>
```

### 5. **CardProducto** - Interface Producto
```tsx
<CardProducto producto={producto} />
```

### 6. **TarjetaLibro** - Interface Libro con lógica
```tsx
<TarjetaLibro libro={libro} />
```

### 7. **ListaLibros** - Arrays y .map()
```tsx
<ListaLibros libros={libros} />
```

### 8. **DatosUsuario** - Fragmentos
```tsx
<DatosUsuario usuario={usuario} />
```

### 9. **MensajeAdmin** - Ternarios
```tsx
<MensajeAdmin 
  esAdmin={true}
  nombre="María"
/>
```

### 10. **Perfil** - Composición
```tsx
<Perfil usuario={usuario} />
```

## 🎨 Características Visuales

- **Diseño responsivo** con Tailwind CSS Grid y Flexbox
- **Gradientes modernos** y sombras personalizadas
- **Animaciones suaves** en hover y transiciones
- **Sistema de colores** personalizado con paleta primaria
- **Tipografía Inter** para mejor legibilidad
- **Componentes reutilizables** con clases utilitarias
- **Tema oscuro/claro** preparado para futuras implementaciones

## 🚀 Cómo Ejecutar el Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:5173
   ```

## 📚 Conceptos Demostrados

### JSX vs HTML
- `className` en lugar de `class`
- `htmlFor` en lugar de `for`
- Cierre obligatorio de etiquetas
- Comentarios con `{/* */}`

### TypeScript
- Interfaces para tipar props
- Importaciones de tipos con `import type`
- Validación automática de tipos
- Autocompletado en el editor

### Tailwind CSS
- Clases utilitarias para diseño rápido
- Sistema de colores personalizado
- Responsive design con breakpoints
- Componentes reutilizables con `@layer`
- Animaciones y transiciones suaves

### Componentes React
- Componentes funcionales
- Props tipadas
- Retorno condicional
- Fragmentos para múltiples elementos
- Composición de componentes

### Buenas Prácticas
- Un componente por archivo
- Nombres en PascalCase
- Separación de lógica y presentación
- Estructura de carpetas organizada

## 🎯 Próximos Pasos

Este proyecto está preparado para evolucionar en las siguientes clases:

- **Clase 3:** Estado y Hooks (useState, useEffect)
- **Clase 4:** Eventos y formularios
- **Clase 5:** Routing y navegación
- **Clase 6:** Context API y estado global

## 👥 Contribución

Este es un proyecto educativo. Si encuentras algún error o tienes sugerencias, ¡no dudes en contribuir!

---

**Desarrollado como parte del curso de React + TypeScript** 🚀