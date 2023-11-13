/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { classNames } from '@/utils/css'
import get from '@/utils/get'

interface PropsType {
  label: string | JSX.Element
  name: string
  required: boolean
  className?: string
  inputDivClassName?: string // style the div parent to <input>
  inputClassName?: string // style the <input>
  options?: JSX.Element[] // list of options to select
  autoFocus?: boolean
  disabled?: boolean
  multiline?: number
  rules?: any // validation rules
  multiple?: boolean
  type?: 'password' | 'number' | 'text' | 'textarea' | 'date' | 'file' // anything else for now is detected by default
  variant?: 'filled' | 'outlined' | 'standard'
  size?: 'small' | 'medium' | undefined
  topLabel?: boolean
  startAdornment?: JSX.Element
  endAdornment?: JSX.Element
  ref?: React.Ref<HTMLInputElement>
}

const Field = ({
  name,
  required,
  label,
  className,
  inputDivClassName,
  inputClassName,
  autoFocus = false,
  options,
  disabled = false,
  multiline,
  size,
  rules,
  type,
  ref,
  multiple = false,
  topLabel = false,
  startAdornment,
  endAdornment,
}: PropsType) => {
  const methods = useFormContext()
  const { control, formState } = methods
  const { errors } = formState

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required,
        ...rules,
      }}
      render={({ field }) => (
        <TextField
          {...field}
          className={classNames(className)}
          error={Boolean(get(errors, name))}
          required={required}
          helperText={get(errors, name)?.message}
          autoFocus={autoFocus}
          id={name}
          fullWidth
          select={Boolean(options)}
          SelectProps={{
            multiple,
          }}
          disabled={disabled}
          multiline={Boolean(multiline)}
          rows={multiline ?? 0}
          size={size}
          type={type}
          ref={ref}
          label={label}
          InputLabelProps={{
            className: topLabel ? 'whitespace-nowrap' : 'sr-only',
            shrink: true,
            required: false, // remove the asterisk
          }}
          inputProps={{
            style: {
              boxShadow: 'none',
            },
            className: classNames(
              inputClassName,
              'bg-transparent px-7 py-3 focus:bg-white',
            ),
          }}
          InputProps={{
            className: classNames(
              inputDivClassName,
              'text-[#272B30] p-0',
              Boolean(get(errors, name)) && 'border-[#DC2020]',
            ),
            startAdornment,
            endAdornment,
          }}
        >
          {options}
        </TextField>
      )}
    />
  )
}

Field.defaultProps = {
  required: false,
}

export default Field
