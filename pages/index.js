import Head from 'next/head';

import Header from '../components/Header';

import FirstSection from '../components/FirstSection';
import PorQueAlumia from '../components/PorQueAlumia';
import SuaIESOnline from '../components/SuaIESOnline';
import Depoimentos from '../components/Depoimentos';
import Parceiros from '../components/Parceiros';
import Popup from '../components/Popup';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Alumia | A educação do futuro, hoje!</title>
        <link rel="icon" href="favicon.png" />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>

      <Header />
      <FirstSection />
      <PorQueAlumia />
      <SuaIESOnline />
      <Parceiros />
      <Depoimentos />
      <Popup />
      <Footer />
    </div>
  )
}
