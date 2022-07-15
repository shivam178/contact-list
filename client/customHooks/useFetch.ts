import { useEffect, useState } from 'react';

type IUseFetch = {
  url: string;
  options?: RequestInit;
  callOnInitiate: boolean;
};

export const useFetch = ({ url, options, callOnInitiate = true }: IUseFetch): {
  data: any;
  loading: boolean;
  error: any;
  reFetch: (body?: object) => void;
} => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    callOnInitiate && reFetch();
  }, [callOnInitiate]);

  const reFetch = async (body?: object) => {
    setLoading(true);
    try {
      options.headers = {
        ...options.headers,
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('token') || '',
      };
      body && (options.body = JSON.stringify(body));
      const data = await fetch(url, options);
      const json = await data.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};
