import { useState, ChangeEvent } from 'react';

import styles from '@/styles/ComboBox.module.css';

type Option = {
  name: string;
  value: string;
};

export interface Props {
  options: Option[];
  name: string;
  label: string;
  ariaLabel: string;
  onItemSelected: (option: Option) => void;
}

export default function ComboBox({
  options,
  name,
  label,
  ariaLabel,
  onItemSelected,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [filter, setFilter] = useState('');

  const id = `combobox-input-${name.replace(/\s+/g, '')}`;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onTextBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!filter && !isOpen) {
      setIsOpen(true);
    }
    setFilter(e.target.value.toLowerCase());
    setIsItemSelected(false);
  };

  const handleOptionClick = (option: Option) => () => {
    setFilter(option.name);
    setIsOpen(false);
    onItemSelected(option);
    setIsItemSelected(true);
  };

  let filteredOptions = [...options];
  if (filter.length && !isItemSelected) {
    filteredOptions = options.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.value.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  const OptionButton = ({ option }: { option: Option }) => {
    return (
      <button
        onClick={handleOptionClick(option)}
        className={styles.optionButton}
        aria-label={option.name}
      >
        <span className={styles.optionButtonValue}>{option.value}</span>/
        {option.name}
      </button>
    );
  };

  let showOptions = false;
  if (!isOpen && !isItemSelected) showOptions = false;
  if (!isItemSelected && isOpen) showOptions = true;
  if (filter && isOpen && isItemSelected) showOptions = true;

  const stylesInput = `coop-form__row ${styles.inputContainer}${
    isOpen ? ' active' : ''
  }`;

  return (
    <div>
      <label htmlFor={id} className="coop-form__label">
        {label}
      </label>
      <div className={stylesInput}>
        <input
          id={id}
          className={`coop-form__input ${styles.input}`}
          name={name}
          aria-label={ariaLabel}
          value={filter}
          type="text"
          onClick={handleClick}
          onChange={onTextBoxChange}
        />
        <span className={styles.arrowIcon} aria-hidden="true" />
        {showOptions && (
          <div className={styles.listOptions}>
            {filteredOptions.map((option) => (
              <OptionButton key={option.value} option={option} />
            ))}
            {!filteredOptions.length && (
              <p className={styles.optionMissing}>No matching countries</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
