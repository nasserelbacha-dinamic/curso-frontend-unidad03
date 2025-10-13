import { useForm } from 'react-hook-form';
import type { FormularioRegistro as FormularioRegistroType } from '../types';

/**
 * Componente: FormularioRegistro
 * Clase 5 - Demuestra:
 * - Validaciones complejas (contraseñas coincidentes, edad mínima)
 * - Validación personalizada con validate
 * - watch() para validaciones cruzadas
 * - Campos opcionales en TypeScript
 * - Manejo de checkboxes
 * - Estilos condicionales avanzados
 */
const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<FormularioRegistroType>({
    mode: 'onBlur',
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      confirmarPassword: '',
      telefono: '',
      fechaNacimiento: '',
      aceptaTerminos: false,
      recibirPromociones: false
    }
  });

  // Observar password para validación cruzada (Clase 5)
  const password = watch('password');
  const aceptaTerminos = watch('aceptaTerminos');

  const onSubmit = async (data: FormularioRegistroType) => {
    console.log('✅ Usuario registrado:', data);
    
    // Simular registro asíncrono
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('¡Registro exitoso! Datos en consola.');
    reset();
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/40 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-gray-800 mb-2">Crear Cuenta</h2>
        <p className="text-gray-600">Completa el formulario para registrarte en TechStore</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre y Apellido en dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              {...register('nombre', {
                required: 'El nombre es obligatorio',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                pattern: {
                  value: /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo letras y espacios'
                }
              })}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                errors.nombre
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-blue-300 focus:border-blue-500'
              }`}
              placeholder="Juan"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Apellido */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Apellido *
            </label>
            <input
              type="text"
              {...register('apellido', {
                required: 'El apellido es obligatorio',
                minLength: { value: 2, message: 'Mínimo 2 caracteres' },
                pattern: {
                  value: /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/,
                  message: 'Solo letras y espacios'
                }
              })}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                errors.apellido
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-blue-300 focus:border-blue-500'
              }`}
              placeholder="Pérez"
            />
            {errors.apellido && (
              <p className="mt-1 text-sm text-red-600">{errors.apellido.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
              errors.email
                ? 'border-red-500 focus:ring-red-300 bg-red-50'
                : 'border-gray-200 focus:ring-blue-300 focus:border-blue-500'
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password y Confirmar Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Contraseña *
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'La contraseña es obligatoria',
                minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message: 'Debe incluir mayúscula, minúscula y número'
                }
              })}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                errors.password
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-blue-300 focus:border-blue-500'
              }`}
              placeholder="******"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Confirmar Password - Validación cruzada (Clase 5) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Confirmar Contraseña *
            </label>
            <input
              type="password"
              {...register('confirmarPassword', {
                required: 'Debes confirmar la contraseña',
                validate: (value) =>
                  value === password || 'Las contraseñas no coinciden'
              })}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                errors.confirmarPassword
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-blue-300 focus:border-blue-500'
              }`}
              placeholder="******"
            />
            {errors.confirmarPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmarPassword.message}</p>
            )}
          </div>
        </div>

        {/* Teléfono y Fecha de Nacimiento (Opcionales) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Teléfono opcional */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Teléfono <span className="text-gray-400 text-xs">(opcional)</span>
            </label>
            <input
              type="tel"
              {...register('telefono', {
                pattern: {
                  value: /^[0-9+\-\s()]+$/,
                  message: 'Formato de teléfono inválido'
                }
              })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
              placeholder="+54 11 1234-5678"
            />
            {errors.telefono && (
              <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
            )}
          </div>

          {/* Fecha de Nacimiento - Validación de edad (Clase 5) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Fecha de Nacimiento <span className="text-gray-400 text-xs">(opcional)</span>
            </label>
            <input
              type="date"
              {...register('fechaNacimiento', {
                validate: (value) => {
                  if (!value) return true; // Opcional
                  const edad = new Date().getFullYear() - new Date(value).getFullYear();
                  return edad >= 18 || 'Debes ser mayor de 18 años';
                }
              })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
            />
            {errors.fechaNacimiento && (
              <p className="mt-1 text-sm text-red-600">{errors.fechaNacimiento.message}</p>
            )}
          </div>
        </div>

        {/* Checkboxes (Clase 5) */}
        <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
          {/* Términos y condiciones (obligatorio) */}
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('aceptaTerminos', {
                required: 'Debes aceptar los términos y condiciones'
              })}
              className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-3 text-sm text-gray-700">
              Acepto los{' '}
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                términos y condiciones
              </a>{' '}
              *
            </label>
          </div>
          {errors.aceptaTerminos && (
            <p className="text-sm text-red-600 ml-8">{errors.aceptaTerminos.message}</p>
          )}

          {/* Promociones (opcional) */}
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('recibirPromociones')}
              className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-3 text-sm text-gray-700">
              Quiero recibir promociones y ofertas especiales por email
            </label>
          </div>
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isSubmitting || !aceptaTerminos}
          className={`w-full font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl transform ${
            isSubmitting || !aceptaTerminos
              ? 'bg-gray-400 cursor-not-allowed text-gray-200'
              : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white hover:shadow-2xl hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Registrando...
            </span>
          ) : (
            'Crear Cuenta'
          )}
        </button>

        <p className="text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Inicia sesión
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormularioRegistro;

