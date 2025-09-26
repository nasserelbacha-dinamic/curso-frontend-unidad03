// Componente MensajeCondicional - Retorno condicional con props booleanas
interface Props {
  mostrar: boolean;
  mensaje: string;
}

const MensajeCondicional = ({ mostrar, mensaje }: Props) => {
  return (
    <>
      {mostrar && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg shadow-soft">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-green-400 text-xl">✅</span>
            </div>
            <div className="ml-3">
              <p className="text-green-800 font-medium">{mensaje}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MensajeCondicional;
