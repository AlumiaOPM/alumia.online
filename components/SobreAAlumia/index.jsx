import React from 'react';
import { Typography } from '@material-ui/core';

import Container from '../Container';

import styles from './index.module.css';

export default function SobreAAlumia() {
  return (
    <div className={styles.sobreAAlumia}>
      <Container>
        <div className={styles.text}>
          <Typography component="h5" variant="h5" color="primary">
            Sobre a Alumia
          </Typography>
          <Typography component="p">
            Alumiar significa “produzir ou passar conhecimento, cultura e sabedoria”. Foi com esse objetivo que a <span style={{color: "#F15A22"}}>Alumia</span> foi fundada: construir um ecossistema de Educação a Distância para apoiar instituições de
            ensino na construção dos melhores cursos digitais. Com isso, aliando conhecimento e tecnologia,
            acreditamos que as IES estarão melhor equipadas para ensinar e engajar alunos a qualquer hora e em
            qualquer lugar!
          </Typography>
        </div>
      </Container>
    </div>
  )
}
