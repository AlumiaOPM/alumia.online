import Head from 'next/head';

import Header from '../components/Header';
import WebinarWrapper from '../components/WebinarWrapper';
import WebinarModal from '../components/WebinarModal';
import Footer from '../components/Footer';

export default function Webinars({ webinars }) {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Webinars</title>
        <meta name="title" content="Webinars" />
        <meta name="description" content="Fique por dentro de nossos webinars!" />

      </Head>
      <Header />

      <WebinarWrapper webinars={webinars && webinars}/>
      <WebinarModal />
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
