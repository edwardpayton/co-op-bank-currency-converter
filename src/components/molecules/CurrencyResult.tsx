import { useEffect, useState } from 'react';

import useCountdown from '@/hooks/useCountdown';

import { formatTime } from '@/utils';

export interface Props {
  amount: string;
  rateTo: string;
  currencyFrom: string;
  currencyTo: string;
  onTimeout: () => void;
}

const TEN_MINUTES_IN_SECONDS = 600;

export default function CurrencyResult({
  amount,
  rateTo,
  currencyFrom,
  currencyTo,
  onTimeout,
}: Props) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const amountTo = (+amount * +rateTo).toFixed(2);

  const { currentTime, startTimer, resetTimer, finished } = useCountdown(
    TEN_MINUTES_IN_SECONDS,
  );

  useEffect(() => {
    startTimer();
    return () => {
      resetTimer();
    };
  }, []);

  useEffect(() => {
    if (finished) {
      onTimeout();
    }
  }, [finished]);

  useEffect(() => {
    setFrom(currencyFrom);
    setTo(currencyTo);
  }, [amount]);

  return (
    <div
      className="coop-c-notification coop-c-notification--alert"
      role="alert"
    >
      <h3 className="coop-c-notification__heading">
        {amount} {from} is equivalent to {amountTo} {to}
      </h3>
      <p className="coop-c-notification__p">
        Expires in {formatTime(currentTime)}
      </p>
    </div>
  );
}
