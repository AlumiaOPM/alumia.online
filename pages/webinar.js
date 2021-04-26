import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Participantes from '../components/Participantes';
import WebinarHeader from '../components/WebinarHeader';

export default function Webinar() {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Como realizar a transformação digital nas instituições de ensino</title>
        <meta name="title" content="Como realizar a transformação digital nas instituições de ensino" />
        <meta name="description" content="Como realizar a transformação digital nas instituições de ensino" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alumia.online/webinar-como-escalar-rapidamente-um-programa-ead" />
        <meta property="og:title" content="Como realizar a transformação digital nas instituições de ensino" />
        <meta property="og:description" content="Basta fazer uma rápida pesquisa na internet que vemos como o EAD está crescendo mais que..." />
        <meta property="twitter:title" content="Como realizar a transformação digital nas instituições de ensino" />
        <meta property="twitter:description" content="Basta fazer uma rápida pesquisa na internet que vemos como o EAD está crescendo mais que..." />

      </Head>

      <Header />

      <WebinarHeader />
      <Participantes />

      <Footer />
    </div>
  )
}
