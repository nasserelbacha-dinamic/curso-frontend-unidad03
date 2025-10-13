import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { FormularioContacto as FormularioContactoType } from '../types';

/**
 * Componente: FormularioContacto
 * Clase 5 - Demuestra:
 * - useForm con tipado TypeScript
 * - register para conectar inputs sin useState
 * - Validaciones integradas (required, minLength, pattern)
 * - handleSubmit para validación automática
 * - formState.errors para manejo centralizado de errores
 * - isSubmitting para estado de carga
 * - reset() para limpiar formulario
 */
const FormularioContacto = () => {
  const [enviado, setEnviado] = useState<boolean>(false);

  // useForm con tipado (Clase 5)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<FormularioContactoType>({
    mode: 'onBlur', // Valida al salir del campo
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: ''
    }
  });

  // Observar valores en tiempo real con watch (Clase 5)
  const valoresActuales = watch();

  // onSubmit recibe datos validados y tipados (Clase 5)
  const onSubmit = async (data: FormularioContactoType) => {
    console.log('📧 Formulario enviado:', data);
    
    // Simular envío asíncrono
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setEnviado(true);
    
    setTimeout(() => {
      setEnviado(false);
      reset(); // Limpiar formulario (Clase 5)
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border p-6">
      <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
      
      {enviado ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-4xl mb-4">✓</div>
          <p className="text-green-600 font-medium">Mensaje enviado correctamente!</p>
          <p className="text-gray-600 text-sm mt-2">Te responderemos pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo Nombre con validaciones (Clase 5) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              {...register('nombre', {
                required: 'El nombre es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres'
                },
                maxLength: {
                  value: 50,
                  message: 'El nombre no puede exceder 50 caracteres'
                }
              })}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 ${
                errors.nombre
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-purple-300 focus:border-purple-500 bg-white'
              }`}
              placeholder="Tu nombre completo"
            />
            {/* Mostrar error (Clase 5) */}
            {errors.nombre && (
              <p className="mt-2 text-sm text-red-600 font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Campo Email con validaciones (Clase 5) */}
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
                  message: 'Formato de email inválido'
                }
              })}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-purple-300 focus:border-purple-500 bg-white'
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Campo Mensaje con validaciones (Clase 5) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Mensaje *
            </label>
            <textarea
              {...register('mensaje', {
                required: 'El mensaje es obligatorio',
                minLength: {
                  value: 10,
                  message: 'El mensaje debe tener al menos 10 caracteres'
                },
                maxLength: {
                  value: 500,
                  message: 'El mensaje no puede exceder 500 caracteres'
                }
              })}
              rows={4}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all duration-300 resize-none ${
                errors.mensaje
                  ? 'border-red-500 focus:ring-red-300 bg-red-50'
                  : 'border-gray-200 focus:ring-purple-300 focus:border-purple-500 bg-white'
              }`}
              placeholder="Escribe tu mensaje aquí..."
            />
            {errors.mensaje && (
              <p className="mt-2 text-sm text-red-600 font-medium flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.mensaje.message}
              </p>
            )}
            {/* Contador de caracteres */}
            <p className="mt-1 text-xs text-gray-500 text-right">
              {valoresActuales.mensaje?.length || 0} / 500 caracteres
            </p>
          </div>

          {/* Botón con estado de carga (Clase 5: isSubmitting) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl transform ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl hover:scale-105 text-white'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </form>
      )}

      {/* Mostrar estado en tiempo real con watch() (Clase 5) */}
      <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200">
        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Estado del formulario (watch)
        </h4>
        <div className="text-sm text-gray-700 space-y-2 bg-white p-3 rounded-lg">
          <p className="flex justify-between">
            <strong className="text-purple-700">Nombre:</strong>
            <span className="text-gray-600">{valoresActuales.nombre || 'Sin escribir'}</span>
          </p>
          <p className="flex justify-between">
            <strong className="text-purple-700">Email:</strong>
            <span className="text-gray-600">{valoresActuales.email || 'Sin escribir'}</span>
          </p>
          <p className="flex justify-between">
            <strong className="text-purple-700">Mensaje:</strong>
            <span className="text-gray-600">
              {valoresActuales.mensaje ? `${valoresActuales.mensaje.substring(0, 30)}...` : 'Sin escribir'}
            </span>
          </p>
        </div>
        <p className="text-xs text-purple-600 mt-3 italic">
          * Los valores se observan con watch() sin causar re-renders innecesarios
        </p>
      </div>
    </div>
  );
};

export default FormularioContacto;
