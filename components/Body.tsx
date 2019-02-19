import React from 'react';
import Head from 'next/head';
import Header from './Header';

function Body({
  title,
  ...attributes
}: {
  title: string;
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div {...attributes} />
    </div>
  );
}

export default Body;
