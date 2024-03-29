import Head from 'next/head';

import Header from '../components/Header';

import FirstSection from '../components/FirstSection';
import PorQueAlumia from '../components/PorQueAlumia';
import SuaIESOnline from '../components/SuaIESOnline';
import Depoimentos from '../components/Depoimentos';
import Parceiros from '../components/Parceiros';
import Popup from '../components/Popup';
import Footer from '../components/Footer';
import SimpleSlider from '../components/Slider/index'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Alumia | A educação do futuro, hoje!</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>

      <Header />

      <FirstSection />

      <PorQueAlumia />
      <SuaIESOnline />
     {/*  <Parceiros /> */}
      <SimpleSlider />
      <Depoimentos />
      <Popup />
      <Footer />
    </div>
  )
}
