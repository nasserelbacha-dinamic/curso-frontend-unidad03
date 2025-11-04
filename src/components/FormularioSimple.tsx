import { useState, useEffect } from "react";


const FormularioSimple = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    console.log("hola")
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    console.log(email)
    console.log(password)

    if (!email || !password ) {
      console.log("el email es requerido")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <input 
        placeholder="email" 
        className="bg-zinc-200 p-5" 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input 
        placeholder="password" 
        className="bg-zinc-200 p-5" 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <input type="submit" />
    </form>
  )
};

export default FormularioSimple;

