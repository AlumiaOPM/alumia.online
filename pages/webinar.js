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
        <title>O Novo perfil dos ingressantes no Ensino Superior</title>
        <meta name="title" content="O Novo perfil dos ingressantes no Ensino Superior" />
        <meta name="description" content="Como realizar a transformação digital nas instituições de ensino" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alumia.online/webinar" />
        <meta property="og:title" content="O Novo perfil dos ingressantes no Ensino Superior" />
        <meta property="og:description" content="Uma nova proposta de ensino está caminhando para a implementação em todas as universidades..." />
        <meta property="twitter:title" content="O Novo perfil dos ingressantes no Ensino Superior" />
        <meta property="twitter:description" content="Uma nova proposta de ensino está caminhando para a implementação em todas as universidades..." />

      </Head>

      <Header />

      <WebinarHeader />
      <Participantes />

      <Footer />
    </div>
  )
}
