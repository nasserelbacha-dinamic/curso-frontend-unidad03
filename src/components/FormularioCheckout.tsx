import { useForm } from 'react-hook-form';
import type { FormularioCheckout as FormularioCheckoutType, Carrito } from '../types';

/**
 * Componente: FormularioCheckout
 * Clase 5 - Demuestra:
 * - Formulario de checkout real integrado al carrito
 * - Select con validaciones
 * - Campos opcionales vs obligatorios
 * - Integración con estado del carrito
 * - Validación de código postal con regex
 * - onSubmit con datos complejos
 */

interface FormularioCheckoutProps {
  carrito: Carrito;
  onFinalizarCompra: (datos: FormularioCheckoutType) => void;
}

const FormularioCheckout = ({ carrito, onFinalizarCompra }: FormularioCheckoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<FormularioCheckoutType>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      nombreCompleto: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      codigoPostal: '',
      notas: '',
      metodoPago: 'tarjeta'
    }
  });

  const metodoPago = watch('metodoPago');

  const onSubmit = async (data: FormularioCheckoutType) => {
    console.log('🛒 Checkout completo:', { ...data, carrito });
    
    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onFinalizarCompra(data);
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/40">
      <div className="mb-6">
        <h2 className="text-3xl font-black text-gray-800 mb-2">Finalizar Compra</h2>
        <p className="text-gray-600">
          Total a pagar: <span className="font-black text-2xl text-green-600">${carrito.total.toFixed(2)}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Información de contacto */}
        <div className="bg-blue-50 p-4 rounded-xl">
          <h3 className="font-bold text-blue-900 mb-4">📧 Información de Contacto</h3>
          
          <div className="space-y-4">
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
                    : 'border-gray-200 focus:ring-green-300 focus:border-green-500 bg-white'
                }`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Nombre Completo */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                {...register('nombreCompleto', {
                  required: 'El nombre es obligatorio',
                  minLength: { value: 3, message: 'Mínimo 3 caracteres' }
                })}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                  errors.nombreCompleto
                    ? 'border-red-500 focus:ring-red-300 bg-red-50'
                    : 'border-gray-200 focus:ring-green-300 focus:border-green-500 bg-white'
                }`}
                placeholder="Juan Pérez"
              />
              {errors.nombreCompleto && (
                <p className="mt-1 text-sm text-red-600">{errors.nombreCompleto.message}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                {...register('telefono', {
                  required: 'El teléfono es obligatorio',
                  pattern: {
                    value: /^[0-9+\-\s()]+$/,
                    message: 'Formato inválido'
                  }
                })}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                  errors.telefono
                    ? 'border-red-500 focus:ring-red-300 bg-red-50'
                    : 'border-gray-200 focus:ring-green-300 focus:border-green-500 bg-white'
                }`}
                placeholder="+54 11 1234-5678"
              />
              {errors.telefono && (
                <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Dirección de envío */}
        <div className="bg-purple-50 p-4 rounded-xl">
          <h3 className="font-bold text-purple-900 mb-4">🏠 Dirección de Envío</h3>
          
          <div className="space-y-4">
            {/* Dirección */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Dirección *
              </label>
              <input
                type="text"
                {...register('direccion', {
                  required: 'La dirección es obligatoria',
                  minLength: { value: 10, message: 'Dirección muy corta' }
                })}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                  errors.direccion
                    ? 'border-red-500 focus:ring-red-300 bg-red-50'
                    : 'border-gray-200 focus:ring-green-300 focus:border-green-500 bg-white'
                }`}
                placeholder="Av. Libertador 1234, Piso 5, Depto B"
              />
              {errors.direccion && (
                <p className="mt-1 text-sm text-red-600">{errors.direccion.message}</p>
              )}
            </div>

            {/* Ciudad y Código Postal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  {...register('ciudad', {
                    required: 'La ciudad es obligatoria'
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                    errors.ciudad
                      ? 'border-red-500 focus:ring-red-300 bg-red-50'
                      : 'border-gray-200 focus:ring-green-300 focus:border-green-500 bg-white'
                  }`}
                  placeholder="Buenos Aires"
                />
                {errors.ciudad && (
                  <p className="mt-1 text-sm text-red-600">{errors.ciudad.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Código Postal *
                </label>
                <input
                  type="text"
                  {...register('codigoPostal', {
                    required: 'El código postal es obligatorio',
                    pattern: {
                      value: /^[0-9]{4,5}$/,
                      message: 'Debe tener 4 o 5 dígitos'
                    }
                  })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                    errors.codigoPostal
                      ? 'border-red-500 focus:ring-red-300 bg-red-50'
                      : 'border-gray-200 focus:ring-green-300 focus:border-green-500 bg-white'
                  }`}
                  placeholder="1425"
                />
                {errors.codigoPostal && (
                  <p className="mt-1 text-sm text-red-600">{errors.codigoPostal.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Método de Pago - Select (Clase 5) */}
        <div className="bg-green-50 p-4 rounded-xl">
          <h3 className="font-bold text-green-900 mb-4">💳 Método de Pago</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Selecciona método de pago *
            </label>
            <select
              {...register('metodoPago', {
                required: 'Debes seleccionar un método de pago'
              })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all bg-white"
            >
              <option value="tarjeta">💳 Tarjeta de Crédito/Débito</option>
              <option value="efectivo">💵 Efectivo (pago contra entrega)</option>
              <option value="transferencia">🏦 Transferencia Bancaria</option>
            </select>

            {/* Mensaje según método de pago */}
            <div className="mt-3 p-3 bg-white rounded-lg border border-green-200">
              <p className="text-sm text-gray-700">
                {metodoPago === 'tarjeta' && '✓ Procesamiento seguro con encriptación SSL'}
                {metodoPago === 'efectivo' && '✓ Paga cuando recibas tu pedido'}
                {metodoPago === 'transferencia' && '✓ Recibirás los datos bancarios por email'}
              </p>
            </div>
          </div>
        </div>

        {/* Notas adicionales (opcional) */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Notas adicionales <span className="text-gray-400 text-xs">(opcional)</span>
          </label>
          <textarea
            {...register('notas')}
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all resize-none"
            placeholder="Ej: Timbre roto, llamar al celular"
          />
        </div>

        {/* Resumen y botón */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-gray-800">Total a pagar:</span>
            <span className="text-3xl font-black text-green-600">${carrito.total.toFixed(2)}</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {carrito.cantidadTotal} producto(s) • Método: {metodoPago}
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl transform ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white hover:shadow-2xl hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </span>
            ) : (
              '✓ Confirmar y Pagar'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCheckout;

