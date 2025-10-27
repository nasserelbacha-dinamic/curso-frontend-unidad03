# Clase 3 - Props y Estado Tipado en React
**Versión simplificada para clase de 1 hora**

## 🎯 Objetivos de la Clase

Esta clase cubre los **5 conceptos fundamentales** de React con TypeScript:

1. **Props tipadas** - Pasar datos entre componentes
2. **Estado (useState)** - Manejar datos que cambian
3. **Eventos** - Responder a interacciones del usuario
4. **Ciclo de vida (useEffect)** - Ejecutar código en momentos específicos
5. **Lifting State Up** - Compartir estado entre componentes

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Saludo.tsx              # 1. Props tipadas básicas
│   ├── Usuario.tsx             # 2. Props con opcionales
│   ├── Contador.tsx            # 3. Estado con useState
│   ├── FormularioSimple.tsx    # 4. Eventos y formularios
│   ├── Reloj.tsx               # 5. useEffect con limpieza
│   └── EjemploLiftingState.tsx # 6. Lifting state up
└── App.tsx                     # Aplicación principal
```

---

## 🚀 Cómo usar este proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir el navegador** en `http://localhost:5173`

4. **Abrir las DevTools** (F12) para ver los logs de useEffect

---

## 📚 Conceptos Demostrados

### 1. Props Tipadas (`Saludo.tsx`)
```typescript
interface SaludoProps {
  nombre: string;
}

const Saludo = ({ nombre }: SaludoProps) => {
  return <p>Hola, {nombre}!</p>;
};
```

### 2. Props Opcionales (`Usuario.tsx`)
```typescript
interface UsuarioProps {
  nombre: string;
  edad: number;
  ciudad?: string; // Opcional con ?
}
```

### 3. Estado con useState (`Contador.tsx`)
```typescript
const [cuenta, setCuenta] = useState<number>(0);
```

### 4. Eventos Tipados (`FormularioSimple.tsx`)
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setNombre(e.target.value);
};
```

### 5. Ciclo de Vida con useEffect (`Reloj.tsx`)
```typescript
useEffect(() => {
  const intervalo = setInterval(() => {
    // código
  }, 1000);

  return () => clearInterval(intervalo); // Limpieza
}, []); // Dependencias
```

### 6. Lifting State Up (`EjemploLiftingState.tsx`)
- El **padre** mantiene el estado
- Un **hijo** modifica el estado (recibe función)
- Otro **hijo** muestra el estado (recibe valor)

---

## ⏱️ Plan de Clase (1 hora)

| Tiempo | Tema | Componente |
|--------|------|------------|
| 0-10 min | Intro + Props | `Saludo.tsx`, `Usuario.tsx` |
| 10-25 min | useState | `Contador.tsx` |
| 25-40 min | Eventos | `FormularioSimple.tsx` |
| 40-50 min | useEffect | `Reloj.tsx` |
| 50-60 min | Lifting State | `EjemploLiftingState.tsx` |

---

## 💡 Notas para el Instructor

- **Enfoque**: Conceptos sobre estilos (estilos inline simples)
- **Live Coding**: Construir incrementalmente desde cero
- **Consola**: Mostrar logs de useEffect
- **Interactividad**: Hacer que los estudiantes prueben cada ejemplo

---

## 📖 Material Complementario

- La versión completa con todos los ejercicios está en la branch `clase-03`
- Documento teórico completo disponible en el repositorio

---

## 🎓 Qué lograrás al terminar

✅ Crear componentes con props tipadas  
✅ Manejar estado interno con useState  
✅ Capturar eventos del usuario  
✅ Controlar el ciclo de vida con useEffect  
✅ Compartir estado entre componentes  
✅ Construir aplicaciones React funcionales con TypeScript
