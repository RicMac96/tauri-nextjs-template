/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { FieldError } from 'react-hook-form'

interface Option {
  name: string
  value: any
}
interface FormFieldInt {
  label: string
  type: string
  register: Function // to complex to define Function
  name: string
  validation?: {
    required?: string
    minLength?: {
      value: number
      message: string
    }
    pattern?: {
      value: RegExp
      message: string
    }
  }
  options?: Option[]
  error?: FieldError
  className: string
  labelClassName?: string
  inputClassName?: string
  placeholder?: string
}

const FormField = ({
  label,
  type,
  options,
  error,
  register,
  name,
  validation,
  className,
  labelClassName,
  inputClassName,
  placeholder,
}: FormFieldInt) => {
  return (
    <div className={`mb-5 px-3 ${className}`}>
      <label className={`mb-2 block font-semibold text-zinc-700 ${labelClassName}`}>
        {label}
        {validation?.required && ' *'}
      </label>
      {type === 'textarea' && (
        <textarea {...register(name, validation)} className="h-32 w-full rounded" />
      )}
      {type === 'select' && (
        <select {...register(name, validation)} className="w-full rounded">
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      )}
      {!['textarea', 'select'].includes(type) && (
        <input
          type={type}
          {...register(name, validation)}
          className={`w-full rounded ${inputClassName}`}
          placeholder={placeholder}
        />
      )}
      <p className="text-red-600">{error?.message}</p>
    </div>
  )
}

export { FormField }
