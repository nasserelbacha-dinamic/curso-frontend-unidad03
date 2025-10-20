

import { useState } from "react"
import { Link } from "react-router-dom"

export function Landing() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="flex justify-center mt-10 gap-10">
            <h1>Contador</h1>

            <button onClick={() => setCounter(counter + 1)} className="bg-red-200">Incrementar</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter - 1)} className="bg-blue-200">Decrementar</button>

            <Link to={'/contact-us'}>Ir al contacto</Link>
        </div>
    )
}