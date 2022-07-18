import Button from '@/components/atoms/Button';

import ComboBox from '@/components/molecules/ComboBox';
import CurrencyInput from '@/components/molecules/CurrencyInput';
import CurrencyResult from '@/components/molecules/CurrencyResult';

import { Country } from '@/hooks/countries/types';

export interface Props {
  amount: string;
  items: Country[];
  rateTo: string;
  currencyFrom: string;
  currencyTo: string;
  renderConverter: boolean;
  renderResults: boolean;
  countriesError: boolean | null;
  handleAmountChange: (newAmount: string) => void;
  handleCurrencyFromChange: ({ value }: { value: string }) => void;
  handleCurrencyToChange: ({ value }: { value: string }) => void;
  handleTimedOut: () => void;
  handleConvertClick: () => void;
}

export default function Layout({
  amount,
  items,
  rateTo,
  currencyFrom,
  currencyTo,
  renderConverter,
  renderResults,
  countriesError,
  handleAmountChange,
  handleCurrencyFromChange,
  handleCurrencyToChange,
  handleTimedOut,
  handleConvertClick,
}: Props) {
  return (
    <div className="coop-l-grid">
      <>
        {renderConverter && (
          <>
            <div className="coop-l-grid__item">
              <CurrencyInput
                name="amount"
                label="Amount"
                ariaLabel="Enter an amount to convert"
                placeholder="eg. 100.00"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="coop-l-grid__item">
              <ComboBox
                options={items}
                name="from"
                label="Convert from"
                ariaLabel="enter country to convert from"
                onItemSelected={handleCurrencyFromChange}
              />
            </div>
            <div className="coop-l-grid__item">
              <ComboBox
                options={items}
                name="to"
                label="Convert to"
                ariaLabel="enter country to convert to"
                onItemSelected={handleCurrencyToChange}
              />
            </div>
            {renderResults && (
              <div className="coop-l-grid__item grid__item--centered">
                <CurrencyResult
                  amount={amount}
                  rateTo={rateTo}
                  currencyFrom={currencyFrom}
                  currencyTo={currencyTo}
                  onTimeout={handleTimedOut}
                />
              </div>
            )}
            <div className="coop-l-grid__item grid__item--centered">
              <Button onClick={handleConvertClick} text="Convert" />
            </div>
          </>
        )}
        {countriesError && <p>There was a problem loading the converter</p>}
      </>
    </div>
  );
}
