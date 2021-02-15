import React from 'react';
import { Typography } from '@material-ui/core';

import Container from '../Container';

import styles from './index.module.css';

export default function CriamosVersoesDigitais() {
  return (
    <div className={styles.criamosVersoesDigitais}>
      <Container>
        <div className={styles.text}>
          <Typography component="h5" variant="h5" color="primary">
            O que fazemos
          </Typography>
          <Typography component="h6">
            Criamos versões digitais de seus cursos presenciais ou novos cursos EaD totalmente personalizados e exclusivos!
          </Typography>
          <Typography component="h6">
            Veja como:
          </Typography>
        </div>
      </Container>
    </div>
  )
}
