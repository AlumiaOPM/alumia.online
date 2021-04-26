import React from 'react';

import Head from 'next/head';

import { Typography } from '@material-ui/core';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Obrigado() {
	return (
		<div>
			<Head>
				<title>Alumia | O que fazemos</title>
				<link rel="icon" href="/favicon.png" />
				<meta name="format-detection" content="telephone=no"></meta>
			</Head>

			<Header />
			<div className="tankyou">
				<Typography
					component="h1"
					variant="h2"
					style={{ color: "#f1f1f1", fontWeight: '800' }}>
					Obrigada pela sua inscrição!
        </Typography>

				<Typography
					component="h5"
					variant="h6"
					style={{ color: "#f1f1f1", fontWeight: '800', marginTop: "40px" }}>
					Estamos animados para transformar o mundo educacional juntos. Lembre-se: O EAD já é uma realidade, agora ele também poderá ser a sua!
        </Typography>

				<Typography
					component="h5"
					variant="h6"
					style={{ color: "#f1f1f1", fontWeight: '800' }}>
					Dia 11/05 você receberá o link de acesso para o nosso webinar, vamos juntos?
        </Typography>
			</div>

			<Footer />
		</div>
	)
}
