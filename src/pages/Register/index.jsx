import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Register</title>
    </Helmet>
    <h1 className={style.register} >This is Register Page</h1>
    </>
  )
}

export default Register