import { useState, ChangeEvent } from 'react';

export interface Props {
  name: string;
  label: string;
  ariaLabel: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function CurrencyInput({
  name,
  label,
  ariaLabel,
  placeholder,
  value,
  onChange,
}: Props) {
  const [inputValue, setInputValue] = useState(value);
  const [inputError, setInputError] = useState(false);

  const id = `text-input-${name.replace(/\s+/g, '')}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
    setInputError(false);

    onChange('');
  };

  const hanldeBlur = () => {
    if (inputValue === '') {
      return;
    }

    if (!/^\d+\.\d{2}$/.test(inputValue)) {
      return setInputError(true);
    }

    onChange(inputValue);
  };

  return (
    <div className="coop-form__row">
      <label htmlFor={id} className="coop-form__label">
        {label}
      </label>
      <p id={`${name}-error`} className="coop-form__error" hidden={!inputError}>
        {inputValue} is not a valid number
      </p>
      <input
        id={id}
        className="coop-form__field coop-form__input"
        type="text"
        aria-label={ariaLabel}
        placeholder={placeholder}
        name={name}
        value={inputValue}
        onChange={handleChange}
        onBlur={hanldeBlur}
      />
    </div>
  );
}
