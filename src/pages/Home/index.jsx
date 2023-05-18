import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
    </Helmet>
    <h1 className={style.home}>This is Home Page</h1>
    </>
  )
}

export default Home