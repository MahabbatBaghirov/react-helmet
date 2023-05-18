import React from 'react';
import style from './index.module.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
    </Helmet>
    <h1 className={style.about}>This is About Page</h1>
    </>
  )
}

export default About