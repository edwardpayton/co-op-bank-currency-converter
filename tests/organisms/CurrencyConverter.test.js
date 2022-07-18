import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CurrencyConverter from '@/components/organisms/CurrencyConverter';

import useGetCountries from '@/hooks/countries/useGetCountries';
import useGetRates from '@/hooks/rates/useGetRates';

jest.mock('@/hooks/countries/useGetCountries.ts');
jest.mock('@/hooks/rates/useGetRates.ts');

const mockItems = [
  { name: 'United States Dollar', value: 'USD' },
  {
    name: 'British Pound Sterling',
    value: 'GBP',
  },
];

const mockPerform = jest.fn();

describe('CurrencyConverter', () => {
  beforeEach(() => {
    useGetCountries.mockImplementation(() => ({
      data: mockItems,
      isLoading: false,
    }));

    useGetRates.mockImplementation(() => ({
      perform: mockPerform,
      isLoading: false,
    }));

    render(<CurrencyConverter />);
  });

  describe('renders the app with the default props', () => {
    it('renders the number input', () => {
      const inputField = screen.getByLabelText(/Amount/);
      expect(inputField.value).toEqual('');
    });

    it('renders the country from input', () => {
      const inputField = screen.getByLabelText(/Convert from/);
      expect(inputField).toBeInTheDocument();
    });

    it('renders the country to input', () => {
      const inputField = screen.getByLabelText(/Convert to/);
      expect(inputField).toBeInTheDocument();
    });

    it('renders the convert button', () => {
      const button = screen.getByRole('button', { name: 'Convert' });
      expect(button).toBeInTheDocument();
    });

    it('does not render the currency result', () => {
      const alert = screen.queryByRole('alert');
      expect(alert).toBeNull();
    });
  });

  describe('converts the currency between GBP and USD', () => {
    it('enters the value into the currency field', () => {
      const inputField = screen.getByLabelText(/Amount/);
      fireEvent.change(inputField, { target: { value: '100.00' } });
      fireEvent.blur(inputField);
      expect(inputField).toHaveValue('100.00');
    });

    it.todo('enters the value into the country from field');

    it.todo('enters the value into the country to field');

    it.todo(
      'calculates when clicking the convert button (with mockReturnValue on rates hook)',
    );

    it.todo('sets the timeout when results arrive');
  });

  describe('shows the correct error messages', () => {
    it.todo(
      'shows the error when entering an incorrect format into the currency field',
    );
  });
});
