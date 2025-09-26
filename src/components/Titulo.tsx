// Componente Titulo - Implementa props tipadas básicas
interface Props {
  texto: string;
}

const Titulo = ({ texto }: Props) => {
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
      {texto}
    </h1>
  );
};

export default Titulo;
