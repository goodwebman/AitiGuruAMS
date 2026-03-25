import type { FC } from 'react';
import { getCheckboxButtonClasses } from './styles/get-classes';

type CheckboxButtonProps = {
  label?: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
};

export const CheckboxButton: FC<CheckboxButtonProps> = ({
  label,
  checked,
  onChange,
  className,
}) => {
  const { cnButton, cnBox, cnLabel } = getCheckboxButtonClasses({
    checked,
    className,
  });

  return (
    <label className={cnButton} onClick={onChange}>
      <span className={cnBox}></span>
      <span className={cnLabel}>{label}</span>
    </label>
  );
};

CheckboxButton.displayName = 'CheckboxButton';
