import type { Producto } from '../types';

export const productosEjemplo: Producto[] = [
  {
    id: 1,
    nombre: "Laptop Gaming Pro",
    descripcion: "Laptop de alto rendimiento para gaming y trabajo profesional",
    precio: 1299.99,
    stock: 15,
    categoria: "Electrónicos",
    imagen: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Laptop+Gaming+Pro",
    descuento: 10,
    destacado: true
  },
  {
    id: 2,
    nombre: "Smartphone Ultra",
    descripcion: "Teléfono inteligente con cámara de 108MP y pantalla OLED",
    precio: 899.99,
    stock: 25,
    categoria: "Electrónicos",
    imagen: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Smartphone+Ultra",
    destacado: true
  },
  {
    id: 3,
    nombre: "Auriculares Inalámbricos",
    descripcion: "Auriculares con cancelación de ruido y 30h de batería",
    precio: 199.99,
    stock: 50,
    categoria: "Audio",
    imagen: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Auriculares",
    destacado: false
  },
  {
    id: 4,
    nombre: "Smartwatch Fitness",
    descripcion: "Reloj inteligente con monitoreo de salud y GPS",
    precio: 299.99,
    stock: 30,
    categoria: "Wearables",
    imagen: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Smartwatch",
    destacado: true
  },
  {
    id: 5,
    nombre: "Tablet Pro 12",
    descripcion: "Tablet profesional con pantalla de 12 pulgadas y stylus",
    precio: 799.99,
    stock: 20,
    categoria: "Electrónicos",
    imagen: "https://via.placeholder.com/300x200/EC4899/FFFFFF?text=Tablet+Pro",
    destacado: false
  },
  {
    id: 6,
    nombre: "Cámara DSLR",
    descripcion: "Cámara profesional con sensor de 24MP y grabación 4K",
    precio: 1599.99,
    stock: 8,
    categoria: "Fotografía",
    imagen: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Camara+DSLR",
    descuento: 15,
    destacado: true
  },
  {
    id: 7,
    nombre: "Teclado Mecánico RGB",
    descripcion: "Teclado gaming con switches mecánicos y retroiluminación RGB",
    precio: 149.99,
    stock: 40,
    categoria: "Periféricos",
    imagen: "https://via.placeholder.com/300x200/14B8A6/FFFFFF?text=Monitor+4K",
    destacado: false
  },
  {
    id: 8,
    nombre: "Monitor 4K 27\"",
    descripcion: "Monitor profesional con resolución 4K y 99% sRGB",
    precio: 449.99,
    stock: 12,
    categoria: "Monitores",
    imagen: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=Teclado+RGB",
    destacado: true
  }
];

export const categorias = [
  "Todos",
  "Electrónicos", 
  "Audio",
  "Wearables",
  "Fotografía",
  "Periféricos",
  "Monitores"
];
