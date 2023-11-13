/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Switch } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { classNames } from '@/utils/css';

interface PropsType {
  label: string;
  name: string;
  className?: string;
  disabled?: boolean;
  rules?: any; // validation rules
  size?: 'small' | 'medium' | undefined;
}

const SwitchField = ({
  name,
  label,
  className,
  disabled = false,
  size,
  rules,
}: PropsType) => {
  const methods = useFormContext();
  const { control, watch } = methods;
  const value = watch(name);

  return (
    <div className={classNames('-ml-3 w-full', className)}>
      <Controller
        name={name}
        control={control}
        rules={{
          ...rules,
        }}
        render={({ field }) => (
          <Switch
            {...field}
            className={className}
            id={name}
            disabled={disabled}
            size={size}
            placeholder={label}
            inputProps={{
              className: 'w-full h-full',
            }}
            checked={value}
          />
        )}
      />
      <label htmlFor={name} className="text-[#4F575E]">
        {label}
      </label>
    </div>
  );
};

export default SwitchField;
