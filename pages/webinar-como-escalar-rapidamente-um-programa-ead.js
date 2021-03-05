import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Participantes from '../components/Participantes';  
import WebinarHeader from '../components/WebinarHeader';  

export default function Home() {

  return (
    <div>
      <Head>
        <title>ALUMIA | WEBINAR</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>

      <Header />

      <WebinarHeader/>
      <Participantes/>
      
      <Footer />
    </div>
  )
}
