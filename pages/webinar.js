import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Participantes from '../components/Participantes';
import WebinarHeader from '../components/WebinarHeader';

export default function Home() {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>O Mercado EAD em Números</title>
        <meta name="title" content="O Mercado EAD em Números" />
        <meta name="description" content="Basta fazer uma rápida pesquisa na internet que vemos como o EAD está crescendo mais que..." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alumia.online/webinar-como-escalar-rapidamente-um-programa-ead" />
        <meta property="og:title" content="O Mercado EAD em Números" />
        <meta property="og:description" content="Basta fazer uma rápida pesquisa na internet que vemos como o EAD está crescendo mais que..." />
        <meta property="twitter:title" content="O Mercado EAD em Números" />
        <meta property="twitter:description" content="Basta fazer uma rápida pesquisa na internet que vemos como o EAD está crescendo mais que..." />
        <meta property="twitter:image" content="https://alumia.online/tumb.png"></meta>


      </Head>

      <Header />

      <WebinarHeader />
      <Participantes />

      <Footer />
    </div>
  )
}
