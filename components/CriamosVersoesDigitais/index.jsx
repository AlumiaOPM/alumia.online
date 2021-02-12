import React from 'react';
import { Typography } from '@material-ui/core';

import Container from '../Container';

import styles from './index.module.css';

export default function CriamosVersoesDigitais() {
  return (
    <div className={styles.criamosVersoesDigitais}>
      <Container>
        <div className={styles.text}>
          <Typography component="h4" variant="h4">
            Criamos versões digitais de seus cursos presenciais ou novos cursos EaD totalmente personalizados e exclusivos!
          </Typography>
        </div>
      </Container>
    </div>
  )
}
