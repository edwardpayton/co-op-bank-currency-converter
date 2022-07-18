import { useEffect, useState } from 'react';

import Layout from '@/components/organisms/CurrencyConverter/Layout';

import useGetCountries from '@/hooks/countries/useGetCountries';
import useGetRates from '@/hooks/rates/useGetRates';

import { JsonObjectToArray } from '@/utils';

import { Country } from '@/hooks/countries/types';

export default function CurrencyConverter() {
  const [items, setItems] = useState<Country[]>();
  const [amount, setAmount] = useState('');
  const [rateTo, setRateTo] = useState('');
  const [currencyFrom, setcurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [resultsTimedOut, setResultTimedOut] = useState(false);

  const {
    data,
    error: countriesError,
    isLoading: countriesLoading,
  } = useGetCountries();

  const { perform, error: ratesError, isLoading: ratesLoading } = useGetRates();

  useEffect(() => {
    if (!data) {
      return;
    }

    const newItems = JsonObjectToArray(data);
    setItems(newItems);
  }, [data]);

  const renderConverter = Boolean(
    !countriesLoading && !countriesError && items?.length,
  );
  const renderResults = Boolean(
    !ratesLoading && !ratesError && amount && rateTo && !resultsTimedOut,
  );

  const handleAmountChange = (newAmount: string) => {
    setAmount(newAmount);
  };

  const handleCurrencyFromChange = ({ value }: { value: string }) => {
    setcurrencyFrom(value);
  };

  const handleCurrencyToChange = ({ value }: { value: string }) => {
    setCurrencyTo(value);
  };

  const handleConvertClick = async () => {
    if (!amount || !currencyFrom || !currencyTo) {
      return;
    }

    const { rates } = await perform(currencyFrom);

    setRateTo(rates[currencyTo]);
    setResultTimedOut(false);
  };

  const handleTimedOut = () => {
    setResultTimedOut(true);
    setRateTo('');
  };

  const props = {
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
    handleConvertClick,
    handleTimedOut,
  };

  return <Layout {...props} />;
}
