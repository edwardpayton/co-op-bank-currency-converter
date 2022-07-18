import { useEffect, useState } from 'react';

import { getCountries } from '@/services/countries';

export default function useGetCountries() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (data) {
      return;
    }

    async function perform() {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await getCountries();
        setData(data);
      } catch (err) {
        setError(err);
        return null;
      } finally {
        setIsLoading(false);
      }
    }
    perform();
  }, [data]);

  return { isLoading, error, data };
}
