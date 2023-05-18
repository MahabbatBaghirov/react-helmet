import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Error</title>
    </Helmet>
    <h1 className={style.notfound}>Error 404 not found</h1>
    </>
  )
}

export default NotFound