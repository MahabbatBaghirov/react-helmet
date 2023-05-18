import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Login</title>
    </Helmet>
    <h1 className={style.login}>This is Login Page</h1>
    </>
  )
}

export default Login