import { useEffect, useState } from "react";
import { useFetch } from "../../../customHooks/useFetch";
import { useRouter } from 'next/router'

export const useLogin = () => { 
  const router = useRouter()
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { data, loading, error, reFetch } = useFetch({
    url: 'http://localhost:8080/contact/list/api/v1/dashboard/login',
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
      router.push('/');
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
  }

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    reFetch(login);
  }

  return {
    login,
    handleChange,
    handleSubmit,
    loading,
  }
}

