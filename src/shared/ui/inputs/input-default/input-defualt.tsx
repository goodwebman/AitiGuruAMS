import { forwardRef } from 'react';
import { BaseInput, type BaseInputProps } from '../base-input';

export const InputDefault = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <BaseInput {...props} ref={ref} />;
  },
);

InputDefault.displayName = 'InputDefault';
