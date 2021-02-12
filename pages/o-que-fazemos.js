import Head from 'next/head';

import Header from '../components/Header';
import CriamosVersoesDigitais from '../components/CriamosVersoesDigitais';
import OQueFazemos from '../components/OQueFazemos';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Alumia | O que fazemos</title>
        <link rel="icon" href="favicon.png" />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>

      <Header />
      <CriamosVersoesDigitais />
      <OQueFazemos />
      <Footer />
    </div>
  )
}
