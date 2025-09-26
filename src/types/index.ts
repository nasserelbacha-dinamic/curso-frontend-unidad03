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
