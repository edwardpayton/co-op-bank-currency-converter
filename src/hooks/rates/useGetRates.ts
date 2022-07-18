import { useState } from 'react';

import { getRates } from '@/services/rates';

export default function useGetRates() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  async function perform(base: string) {
    if (!base) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const { data } = await getRates(base);
      return data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, perform };
}
