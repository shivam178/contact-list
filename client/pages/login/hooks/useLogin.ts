import { useState } from "react";

export const useLogin = () => { 
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    console.log(login);
  }

  return {
    login,
    handleChange,
    handleSubmit,
  }
}

