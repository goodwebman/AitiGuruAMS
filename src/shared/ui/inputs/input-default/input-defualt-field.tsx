import {
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';
import type { BaseInputProps } from '../base-input';
import { InputDefault } from './input-defualt';

export function InputDefaultField<T extends FieldValues>({
  name,
  control,
  ...props
}: UseControllerProps<T> & BaseInputProps) {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control });

  return <InputDefault {...props} {...field} errorMessage={error?.message} />;
}
