import type { HeaderProps } from '../types';

const Header = ({ titulo, subtitulo }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {titulo}
          </h1>
          {subtitulo && (
            <p className="mt-2 text-lg text-gray-600">
              {subtitulo}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;