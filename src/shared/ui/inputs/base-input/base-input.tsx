import {
  type ChangeEvent,
  type FocusEvent,
  forwardRef,
  type ReactNode,
  useId,
  useState,
} from 'react';
import { getBaseInputClasses } from './styles/get-classes';
import { Icons } from '@/shared/assets/svg/components'

export type BaseInputProps = {
  classNameOuter?: string;
  classNameField?: string;
  label?: string;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  successMessage?: string;
  errorMessage?: string;
  captionMessage?: string;
  isLoading?: boolean;
  isClearable?: boolean;
  hasErrorIcon?: boolean;
  hasError?: boolean;
  hasSuccess?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      classNameOuter,
      classNameField,
      id,
      value,
      label,
      onChange,
      contentLeft,
      contentRight,
      type = 'text',
      disabled = false,
      successMessage,
      errorMessage,
      captionMessage,
      isLoading,
      isClearable,
      hasError,
      hasSuccess,
      ...props
    },
    ref,
  ) => {
    const ownId = useId();
    const inputId = id || ownId;

    const [isFocused, setIsFocused] = useState(false);
    const stringValue = value !== undefined ? value.toString() : '';

    const isError = Boolean(errorMessage) || hasError;
    const isSuccess = Boolean(successMessage) || hasSuccess;
    const isShowClearButton =
      isClearable &&
      !isLoading &&
      !isError &&
      !contentRight &&
      !disabled &&
      stringValue.length >= 1;

    const isShowContentRight =
      ((!isError && !isLoading) || isFocused) && contentRight;

    const captionText = isError
      ? errorMessage
      : isSuccess
        ? successMessage
        : captionMessage;

    const {
      cnRoot,
      cnLabel,
      cnOuter,
      cnField,
      cnContentLeft,
      cnContentRight,
      cnCaption,
    } = getBaseInputClasses({
      disabled,
      isError,
      isSuccess,
      focused: isFocused,
      classNameField,
      classNameOuter,
      contentLeft: !!contentLeft,
      contentRight: !!contentRight,
      isClearable,
      isLoading,
    });

    const handleClear = () => {
      onChange?.({
        target: { value: '' },
      } as ChangeEvent<HTMLInputElement>);
    };

    return (
      <label className={cnRoot}>
        {label && <p className={cnLabel}>{label}</p>}

        <div className={cnOuter}>
          {contentLeft && <div className={cnContentLeft}>{contentLeft}</div>}

          <input
            {...props}
            className={cnField}
            type={type}
            disabled={disabled || isLoading}
            value={value}
            id={inputId}
            onChange={onChange}
            ref={ref}
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            onFocus={(e: FocusEvent<HTMLInputElement>) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
          />

          {isShowContentRight && (
            <div className={cnContentRight}>{contentRight}</div>
          )}

          {isShowClearButton && (
            <button
              type="button"
              className={cnContentRight}
              onClick={handleClear}
            >
             <Icons.Xmark width={20} height={20}/>
            </button>
          )}
        </div>

        {captionText && <p className={cnCaption}>{captionText}</p>}
      </label>
    );
  },
);

BaseInput.displayName = 'BaseInput';
