import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
    </Helmet>
    <h1 className={style.contact}>This is Contact Page</h1>
    </>
  )
}

export default Contact