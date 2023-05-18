import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Services</title>
    </Helmet>
    <h1 className={style.services}>This is Services Page</h1>
    </>
  )
}

export default Services