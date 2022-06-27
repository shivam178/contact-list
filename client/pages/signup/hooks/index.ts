import { useState } from "react";

export const useSignUp = () => { 
  const [login, setLogin] = useState({
    email: '',
    password: '',
    username: '',
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

