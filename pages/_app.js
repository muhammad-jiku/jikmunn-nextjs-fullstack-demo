import React, { useEffect, useState } from 'react';

import '../styles/globals.css';
import Head from 'next/head';
// import MainLayout from '@/components/Layout/Layout';

export default function App({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Simple CRUD App</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <MainLayout> */}
        <Component {...pageProps} />
        {/* </MainLayout> */}
      </>
    );
  }
}