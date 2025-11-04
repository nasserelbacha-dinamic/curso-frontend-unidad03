
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export const DetalleProducto = () => {
    const [productoAMostrar, setProductoAMostrar] = useState<{ id: number, titulo: string, precio: number}>()
    const { id } = useParams()

    useEffect(() => {
        const prod = producto.find(prod => prod.id === parseInt(id || ''))
        setProductoAMostrar(prod)
    }, [id])

    return (
        <div>
            {productoAMostrar && (
                <div>
                    <h1>{productoAMostrar.titulo}</h1>
                    <p>{productoAMostrar.precio}</p>
                </div>
            )}
        </div>
    )
}

const producto = [
  {
    "id": 1,
    "titulo": "Producto 1",
    "precio": 11000
  },
  {
    "id": 2,
    "titulo": "Producto 2",
    "precio": 22000
  },
  {
    "id": 3,
    "titulo": "Producto 3",
    "precio": 55000
  },
  {
    "id": 4,
    "titulo": "Producto 4",
    "precio": 4000
  },
]