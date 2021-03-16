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
        <title>Como Escalar Rapidamente um Programa EAD</title>
        <meta name="title" content="Como Escalar Rapidamente um Programa EAD" />
        <meta name="description" content="Nós estamos vivendo a transformação digital. O ambiente online é o futuro e, ainda mais..." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alumia.online/webinar-como-escalar-rapidamente-um-programa-ead" />
        <meta property="og:title" content="Como Escalar Rapidamente um Programa EAD" />
        <meta property="og:description" content="Nós estamos vivendo a transformação digital. O ambiente online é o futuro e, ainda mais..." />
        <meta property="og:image" content="https://alumia.online/webinar_tumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://alumia.online/webinar-como-escalar-rapidamente-um-programa-ead" />
        <meta property="twitter:title" content="Como Escalar Rapidamente um Programa EAD" />
        <meta property="twitter:description" content="Nós estamos vivendo a transformação digital. O ambiente online é o futuro e, ainda mais..." />
        <meta property="twitter:image" content="https://alumia.online/webinar_tumbnail.png"></meta>


      </Head>

      <Header />

      <WebinarHeader />
      <Participantes />

      <Footer />
    </div>
  )
}
