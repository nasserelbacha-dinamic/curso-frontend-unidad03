// Interfaces para el Ecommerce Simplificado - Clase 3: Props y Estado Tipado

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

// Interfaces para props de componentes
export interface ProductoCardProps {
  producto: Producto;
}

export interface ListaProductosProps {
  productos: Producto[];
}

export interface HeaderProps {
  titulo: string;
  subtitulo?: string;
}

// Interfaces para lifting state up
export interface BuscadorProps {
  termino: string;
  onCambiarTermino: (termino: string) => void;
}

export interface MostrarResultadosProps {
  termino: string;
  cantidad: number;
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
