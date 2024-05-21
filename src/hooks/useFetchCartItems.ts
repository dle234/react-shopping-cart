import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { refreshCartItemsState } from '../recoil/cartItems';

const useFetch = (fetch: Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const updateCartItem = useSetRecoilState(refreshCartItemsState);

  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true);
      try {
        await fetch;
        updateCartItem([]);

        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetching();
  }, [fetch]);

  return { isLoading, error };
};

export default useFetch;
