import type { Producto } from '../types';

export const productosEjemplo: Producto[] = [
  {
    id: 1,
    nombre: "iPhone 15 Pro",
    descripcion: "El iPhone más avanzado con chip A17 Pro y cámara de 48MP",
    precio: 1299,
    stock: 15,
    categoria: "Smartphones",
    imagen: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    descuento: 10,
    destacado: true
  },
  {
    id: 2,
    nombre: "MacBook Air M2",
    descripcion: "Laptop ultradelgada con chip M2 y pantalla Liquid Retina",
    precio: 1199,
    stock: 8,
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
    destacado: true
  },
  {
    id: 3,
    nombre: "AirPods Pro",
    descripcion: "Auriculares inalámbricos con cancelación activa de ruido",
    precio: 249,
    stock: 25,
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
    descuento: 15,
    destacado: false
  },
  {
    id: 4,
    nombre: "iPad Pro 12.9\"",
    descripcion: "Tablet profesional con chip M2 y pantalla Liquid Retina XDR",
    precio: 1099,
    stock: 12,
    categoria: "Tablets",
    imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    destacado: true
  },
  {
    id: 5,
    nombre: "Apple Watch Series 9",
    descripcion: "Smartwatch con GPS y monitor de salud avanzado",
    precio: 399,
    stock: 20,
    categoria: "Wearables",
    imagen: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop",
    destacado: false
  },
  {
    id: 6,
    nombre: "Samsung Galaxy S24",
    descripcion: "Smartphone Android con cámara de 200MP y AI integrada",
    precio: 899,
    stock: 18,
    categoria: "Smartphones",
    imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    descuento: 5,
    destacado: false
  },
  {
    id: 7,
    nombre: "Dell XPS 13",
    descripcion: "Laptop ultrabook con procesador Intel Core i7 de 13va gen",
    precio: 1299,
    stock: 6,
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    destacado: false
  },
  {
    id: 8,
    nombre: "Sony WH-1000XM5",
    descripcion: "Auriculares over-ear con la mejor cancelación de ruido",
    precio: 399,
    stock: 14,
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    destacado: true
  },
  {
    id: 9,
    nombre: "Nintendo Switch OLED",
    descripcion: "Consola de videojuegos híbrida con pantalla OLED de 7 pulgadas",
    precio: 349,
    stock: 22,
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop",
    destacado: false
  },
  {
    id: 10,
    nombre: "GoPro Hero 12",
    descripcion: "Cámara de acción 5.3K con estabilización HyperSmooth",
    precio: 499,
    stock: 16,
    categoria: "Cámaras",
    imagen: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
    descuento: 20,
    destacado: true
  }
];