import type { SaludoProps } from '../types';

const Saludo = ({ nombre }: SaludoProps) => {
  return <h1 className="text-2xl font-bold text-blue-600">Hola, {nombre}</h1>;
};

export default Saludo;
