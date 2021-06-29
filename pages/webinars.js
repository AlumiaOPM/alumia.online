import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import WebinarWrapper from '../components/WebinarWrapper';

export default function Webinars({ webinars }) {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Webinars</title>
        <meta name="title" content="Webinars" />
        <meta name="description" content="Como realizar a transformação digital nas instituições de ensino" />

      </Head>
      <Header />

      <WebinarWrapper webinars={webinars && webinars}/>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://api.alumia.online/api/v1/sheets?range=Alumia-webinars');
    const data = await response.json();

    return {
      props: {
        webinars: data.values
      },
      revalidate: 1
    };
  } catch (error) {
    throw error;
  }
};
