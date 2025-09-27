// Interfaces para la aplicación de biblioteca personal

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  paginas: number;
  leido: boolean;
  calificacion?: number; // Opcional, solo si está leído
  portada: string; // URL de la imagen
}

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  esAdmin: boolean;
  avatar: string;
}

export interface Producto {
  nombre: string;
  precio: number;
  stock: number;
}

// Nuevas interfaces para la Clase 3 - Props y Estado Tipado

// Interfaces para ejemplos de Props
export interface SaludoProps {
  nombre: string;
}

export interface UsuarioProps {
  nombre: string;
  edad: number;
  ciudad?: string;
}

export interface UsuarioCardProps {
  nombre: string;
  edad: number;
  profesion?: string;
}

// Interfaces para estado
export interface UsuarioEstado {
  nombre: string;
  email: string;
}

export interface UsuarioCompleto {
  nombre: string;
  edad: number;
}

// Interfaces para formularios
export interface FormularioContacto {
  nombre: string;
  mensaje: string;
}

export interface FormularioLogin {
  usuario: string;
  contraseña: string;
}

// Interfaces para lifting state up
export interface SelectorColorProps {
  cambiarColor: (nuevoColor: string) => void;
}

export interface CajaColorProps {
  color: string;
}

export interface CampoNombreProps {
  cambiarNombre: (valor: string) => void;
}

export interface SaludoNombreProps {
  nombre: string;
}
