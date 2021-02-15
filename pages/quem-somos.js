import Head from 'next/head';

import Header from '../components/Header';
import SobreAAlumia from '../components/SobreAAlumia';
import SobreSections from '../components/SobreSections';
import Popup from '../components/Popup';  
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Alumia | Quem somos</title>
        <link rel="icon" href="favicon.png" />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>

      <Header />
      <SobreAAlumia />
      <SobreSections />
      <Popup />
      <Footer />
    </div>
  )
}
