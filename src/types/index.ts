// Interfaces para el Ecommerce - Clase 3: Props y Estado Tipado

// Interfaces principales del ecommerce
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen: string;
  descuento?: number; // Porcentaje de descuento opcional
  destacado: boolean;
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  esAdmin: boolean;
  avatar: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

export interface Carrito {
  items: ItemCarrito[];
  total: number;
  cantidadTotal: number;
}

// Interfaces para props de componentes
export interface ProductoCardProps {
  producto: Producto;
  onAgregarAlCarrito: (producto: Producto) => void;
}

export interface CarritoProps {
  carrito: Carrito;
  onActualizarCantidad: (productoId: number, cantidad: number) => void;
  onRemoverProducto: (productoId: number) => void;
  onLimpiarCarrito: () => void;
}

export interface FiltrosProps {
  categoria: string;
  precioMin: number;
  precioMax: number;
  soloDestacados: boolean;
  onCambiarFiltros: (filtros: FiltrosProductos) => void;
}

export interface FiltrosProductos {
  categoria: string;
  precioMin: number;
  precioMax: number;
  soloDestacados: boolean;
}

// Interfaces para formularios
export interface FormularioContacto {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface FormularioRegistro {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
}

// Interfaces para lifting state up
export interface BuscadorProps {
  termino: string;
  onCambiarTermino: (termino: string) => void;
}

export interface ListaProductosProps {
  productos: Producto[];
  onAgregarAlCarrito: (producto: Producto) => void;
}

export interface HeaderProps {
  carrito: Carrito;
  onMostrarCarrito: () => void;
}
