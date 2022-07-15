import { useEffect, useState } from 'react';
import { useFetch } from '../../../customHooks/useFetch';

export const useSignUp = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    username: '',
  });

  const { data, loading, error, reFetch } = useFetch({
    url: 'http://localhost:8080/contact/list/api/v1/dashboard/signup',
    options: {
      method: 'POST',
    },
    callOnInitiate: false,
  });

  useEffect(() => {
    if (data) {
      sessionStorage.setItem('token', data.result.token);
      sessionStorage.setItem('name', data.result.name);
      sessionStorage.setItem('email', data.result.email);
      sessionStorage.setItem('username', data.result.username);
      sessionStorage.setItem('userId', data.result.subId);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      // show some error notification
      console.log(error);
    }
  },[error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    reFetch(login)
  };

  return {
    login,
    handleChange,
    handleSubmit,
    loading,
  };
};
