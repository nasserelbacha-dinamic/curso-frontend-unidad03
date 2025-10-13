# 📝 Clase 5: Manejo de Formularios con React Hook Form

## useState y useEffect en Profundidad

Este documento explica cómo se implementaron los conceptos de la Clase 5 en el proyecto TechStore.

---

## 🎯 **Cambio de Paradigma**

### ❌ **Antes (Formularios Tradicionales)**
```tsx
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [mensaje, setMensaje] = useState('');

<input value={nombre} onChange={(e) => setNombre(e.target.value)} />
<input value={email} onChange={(e) => setEmail(e.target.value)} />
<textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
```

**Problemas:**
- 3 `useState` para 3 campos
- 3 `onChange` manuales
- Validaciones dispersas
- Mucho código repetitivo

### ✅ **Después (React Hook Form)**
```tsx
const { register, handleSubmit, formState: { errors } } = useForm<FormularioContacto>();

<input {...register('nombre', { required: 'Obligatorio' })} />
<input {...register('email', { required: 'Obligatorio', pattern: /email/ })} />
<textarea {...register('mensaje', { minLength: 10 })} />
```

**Beneficios:**
- Un solo hook
- Sin `useState` ni `onChange`
- Validaciones declarativas
- Código limpio y escalable

---

## 📦 **Conceptos Implementados**

### 1. **`useForm` con Tipado TypeScript**

**Archivo:** `FormularioContacto.tsx`, `FormularioRegistro.tsx`, `FormularioCheckout.tsx`

```tsx
interface FormularioContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  watch,
  reset
} = useForm<FormularioContacto>({
  mode: 'onBlur',
  defaultValues: {
    nombre: '',
    email: '',
    mensaje: ''
  }
});
```

**Qué demuestra:**
- ✅ Tipado genérico `<FormularioContacto>`
- ✅ `mode: 'onBlur'` para validar al salir del campo
- ✅ `defaultValues` para valores iniciales
- ✅ Extracción de `errors`, `isSubmitting`, `watch`, `reset`

---

### 2. **`register` - Conectar Inputs**

**Sin `useState` ni `onChange`:**

```tsx
<input
  {...register('nombre', {
    required: 'El nombre es obligatorio',
    minLength: { value: 3, message: 'Mínimo 3 caracteres' },
    maxLength: { value: 50, message: 'Máximo 50 caracteres' }
  })}
  placeholder="Tu nombre"
/>
```

**Lo que hace internamente:**
1. Conecta el input al sistema de RHF
2. Escucha cambios automáticamente
3. Valida según las reglas
4. Almacena el valor sin estado local

---

### 3. **Validaciones Integradas**

**Implementadas en todos los formularios:**

#### A. Validaciones Simples
```tsx
{...register('email', {
  required: 'El email es obligatorio',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Email inválido'
  }
})}
```

#### B. Validación Personalizada (validate)
```tsx
{...register('fechaNacimiento', {
  validate: (value) => {
    if (!value) return true; // Opcional
    const edad = new Date().getFullYear() - new Date(value).getFullYear();
    return edad >= 18 || 'Debes ser mayor de 18 años';
  }
})}
```

#### C. Validación Cruzada con `watch()`
```tsx
const password = watch('password');

{...register('confirmarPassword', {
  validate: (value) =>
    value === password || 'Las contraseñas no coinciden'
})}
```

**Dónde se aplica:** `FormularioRegistro.tsx` - contraseñas coincidentes

---

### 4. **Manejo de Errores Centralizado**

```tsx
const { formState: { errors } } = useForm();

{errors.email && (
  <p className="text-red-600 flex items-center">
    <svg>...</svg>
    {errors.email.message}
  </p>
)}
```

**Estilos Condicionales:**
```tsx
className={`w-full px-4 py-3 border-2 rounded-xl ${
  errors.nombre
    ? 'border-red-500 focus:ring-red-300 bg-red-50'
    : 'border-gray-200 focus:ring-purple-300'
}`}
```

**Implementado en:** Todos los formularios del proyecto

---

### 5. **`handleSubmit` y `onSubmit`**

```tsx
const onSubmit = async (data: FormularioContacto) => {
  console.log('📧 Formulario enviado:', data);
  
  // Simular envío asíncrono
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  alert('¡Mensaje enviado!');
  reset(); // Limpiar formulario
};

<form onSubmit={handleSubmit(onSubmit)}>
  {/* inputs */}
</form>
```

**Características:**
- ✅ `data` viene tipado automáticamente
- ✅ Solo se ejecuta si no hay errores
- ✅ No necesita `e.preventDefault()`
- ✅ Datos validados garantizados

---

### 6. **`isSubmitting` - Estado de Carga**

```tsx
const { formState: { isSubmitting } } = useForm();

<button
  type="submit"
  disabled={isSubmitting}
  className={isSubmitting ? 'bg-gray-400' : 'bg-blue-600'}
>
  {isSubmitting ? (
    <span className="flex items-center">
      <svg className="animate-spin">...</svg>
      Enviando...
    </span>
  ) : (
    'Enviar Mensaje'
  )}
</button>
```

**Beneficios:**
- Evita envíos duplicados
- Feedback visual al usuario
- UX profesional

**Implementado en:** Todos los formularios

---

### 7. **`watch()` - Observar Valores**

```tsx
const valoresActuales = watch();
const password = watch('password');
const metodoPago = watch('metodoPago');

// Mostrar en tiempo real
<p>Nombre: {valoresActuales.nombre}</p>

// Validación cruzada
{...register('confirmarPassword', {
  validate: (value) => value === password || 'No coinciden'
})}

// Condicionales
{metodoPago === 'tarjeta' && <div>Datos de tarjeta</div>}
```

**Dónde se usa:**
- `FormularioContacto.tsx` - mostrar estado en tiempo real
- `FormularioRegistro.tsx` - validar contraseñas
- `FormularioCheckout.tsx` - mostrar info según método de pago

---

### 8. **`reset()` - Limpiar Formulario**

```tsx
const { reset } = useForm();

const onSubmit = async (data) => {
  await enviarDatos(data);
  reset(); // Volver a valores iniciales
};
```

**Implementado en:** Todos los formularios después de envío exitoso

---

## 📋 **Formularios Implementados**

### 1. **FormularioContacto** (`src/components/FormularioContacto.tsx`)

**Conceptos demostrados:**
- ✅ `register` con validaciones integradas
- ✅ `required`, `minLength`, `maxLength`, `pattern`
- ✅ `formState.errors` para mostrar errores
- ✅ `isSubmitting` para estado de carga
- ✅ `watch()` para mostrar valores en tiempo real
- ✅ `reset()` para limpiar formulario
- ✅ Estilos condicionales según errores
- ✅ Contador de caracteres

**Validaciones:**
- Nombre: obligatorio, 3-50 caracteres
- Email: obligatorio, formato válido
- Mensaje: obligatorio, 10-500 caracteres

---

### 2. **FormularioRegistro** (`src/components/FormularioRegistro.tsx`)

**Conceptos demostrados:**
- ✅ Validaciones complejas (contraseña con mayúscula, minúscula, número)
- ✅ Validación cruzada (contraseñas coincidentes)
- ✅ `watch()` para validación entre campos
- ✅ Validación personalizada con `validate` (edad mínima)
- ✅ Campos opcionales en TypeScript (`telefono?`)
- ✅ Manejo de checkboxes
- ✅ Grid layout (nombre y apellido en 2 columnas)
- ✅ Botón deshabilitado si no acepta términos

**Validaciones:**
- Nombre/Apellido: obligatorio, solo letras, 2+ caracteres
- Email: obligatorio, formato válido
- Password: 6+ caracteres, mayúscula + minúscula + número
- Confirmar Password: debe coincidir con password
- Fecha Nacimiento: mayor de 18 años (opcional)
- Teléfono: formato válido (opcional)
- Aceptar Términos: obligatorio (checkbox)

---

### 3. **FormularioCheckout** (`src/components/FormularioCheckout.tsx`)

**Conceptos demostrados:**
- ✅ Formulario integrado al estado del carrito
- ✅ Props tipadas (`FormularioCheckoutProps`)
- ✅ Select con validaciones
- ✅ Validación de código postal con regex
- ✅ Campo opcional (`notas?`)
- ✅ `watch()` para mostrar info condicional según select
- ✅ Integración con callback del padre
- ✅ Layout organizado por secciones (contacto, envío, pago)

**Validaciones:**
- Email, nombre, teléfono: obligatorios
- Dirección: mínimo 10 caracteres
- Código postal: 4-5 dígitos numéricos
- Método de pago: obligatorio (select)
- Notas: opcional

---

## 🎨 **Tipos TypeScript Añadidos**

**Archivo:** `src/types/index.ts`

```tsx
export interface FormularioContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface FormularioRegistro {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confirmarPassword: string;
  telefono?: string;
  fechaNacimiento?: string;
  aceptaTerminos: boolean;
  recibirPromociones: boolean;
}

export interface FormularioCheckout {
  email: string;
  nombreCompleto: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  notas?: string;
  metodoPago: 'tarjeta' | 'efectivo' | 'transferencia';
}
```

**Características:**
- ✅ Campos opcionales con `?`
- ✅ Union types (`metodoPago`)
- ✅ Tipos booleanos para checkboxes
- ✅ Interfaces exportables y reutilizables

---

## 🎯 **Integración en App.tsx**

```tsx
import FormularioContacto from './components/FormularioContacto';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioCheckout from './components/FormularioCheckout';

const [vistaActual, setVistaActual] = useState<'tienda' | 'registro' | 'contacto' | 'checkout'>('tienda');

// Navegación
<button onClick={() => setVistaActual('registro')}>
  📝 Registro
</button>

// Vistas condicionales
{vistaActual === 'registro' && <FormularioRegistro />}
{vistaActual === 'contacto' && <FormularioContacto />}
{vistaActual === 'checkout' && (
  <FormularioCheckout
    carrito={carrito}
    onFinalizarCompra={finalizarCompra}
  />
)}
```

---

## 📊 **Comparación: Antes vs Después**

| Aspecto | Sin RHF (useState) | Con RHF |
|---------|-------------------|---------|
| **Estados** | 1 por campo | 1 para todo el form |
| **Validación** | Manual | Declarativa |
| **Código** | ~80 líneas | ~40 líneas |
| **Errores** | Objeto propio | `formState.errors` |
| **Tipado** | Manual | Automático |
| **Renders** | En cada tecla | Solo cuando necesario |
| **Loading** | Estado manual | `isSubmitting` |
| **Reset** | Función manual | `reset()` |

---

## ✅ **Conceptos de Clase 5 Cubiertos**

### ✅ **1. Desafíos de Formularios Tradicionales**
- Demostrado en comentarios del código
- Comparación implícita con la clase anterior

### ✅ **2. ¿Por qué React Hook Form?**
- Menos código
- Mejor rendimiento
- API declarativa

### ✅ **3. Registro de Inputs (`register`)**
- Usado en todos los formularios
- Sin `useState` ni `onChange`

### ✅ **4. Validaciones**
- Integradas: `required`, `minLength`, `pattern`
- Personalizadas: `validate`
- Cruzadas: con `watch()`

### ✅ **5. Tipado TypeScript**
- `useForm<MiInterfaz>()`
- Interfaces en `types/index.ts`
- Autocompletado y seguridad de tipos

### ✅ **6. Manejo de Errores**
- `formState.errors`
- Estilos condicionales
- Mensajes personalizados

### ✅ **7. Submisión (`handleSubmit`)**
- Validación automática antes de enviar
- `onSubmit` con datos tipados
- `isSubmitting` para UX

### ✅ **8. Componentes Personalizados**
- Select (método de pago)
- Checkboxes (términos y condiciones)
- Date input (fecha de nacimiento)

### ✅ **9. Buenas Prácticas**
- Interfaces exportables
- Validaciones centralizadas
- Formularios reutilizables
- Mensajes de error claros

---

## 🚀 **Comandos para Probar**

```bash
# Instalar dependencias (ya hecho)
npm install

# Desarrollo
npm run dev

# Build
npm run build
```

### **Navegación en la App:**

1. **🛍️ Tienda** - Vista de productos (Clase 3-4)
2. **📝 Registro** - Formulario completo con validaciones complejas
3. **📧 Contacto** - Formulario con contador de caracteres
4. **💳 Checkout** - Solo aparece si hay productos en el carrito

---

## 📝 **Ejercicios Cubiertos de Clase 5**

De los 10 ejercicios propuestos, el proyecto cubre:

1. ✅ **Formulario de registro** con contraseñas coincidentes
2. ✅ **Formulario de contacto** con validación de longitud mínima
3. ✅ **Fecha de nacimiento** con validación de edad (18+)
4. ✅ **Checkbox condicional** (aceptar términos)
5. ⚠️ **useFieldArray** - No implementado (fuera del scope actual)
6. ✅ **react-select** - Usando select nativo con validaciones
7. ⚠️ **Componentes reutilizables** - Posible mejora futura
8. ⚠️ **Validaciones con Zod** - Usando validaciones integradas
9. ✅ **Envío asíncrono** con `isSubmitting`
10. ✅ **Estilos condicionales** y mensajes de error

**Resultado: 7/10 conceptos implementados directamente en la app**

---

## 💡 **Puntos Clave para el Estudiante**

1. **React Hook Form elimina boilerplate:** No más `useState` por cada campo
2. **Validaciones declarativas:** Directamente en el `register`
3. **TypeScript potencia RHF:** Tipado automático en `onSubmit`
4. **`watch()` sin renders:** Observa valores sin causar re-renders innecesarios
5. **`isSubmitting` mejora UX:** Feedback visual durante envíos
6. **`reset()` simplifica limpieza:** Un solo método para resetear todo

---

## 📚 **Próximos Pasos**

Posibles mejoras futuras:
- `useFieldArray` para experiencias laborales
- Validaciones con Zod para esquemas complejos
- Componentes de input reutilizables
- Integración con API real

---

**Desarrollado como parte del curso de React + TypeScript - Clase 5** 🚀

