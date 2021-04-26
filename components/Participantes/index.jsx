import React from 'react';
import { Avatar, Typography } from '@material-ui/core';

import Container from '../Container';

import styles from './index.module.css';

export default function OQueFazemos() {

  const Card = ({ image, title, content }) => (
    <div className={styles.card}>
      <Avatar
        style={{
          margin: "40px 0px",
          width: '150px',
          height: "150px",
          fontSize: "30px"
        }}
        variant="circular"
        src={image}
      >
      </Avatar>
      <Typography
        component="h4"
        variant="h5"
        color="secondary"
      >
        {title}
      </Typography>
      <Typography
        color="secondary"
        component="p"
      >
        {content}
      </Typography>
    </div>
  )

  return (
    <div className={styles.participantes}>
      <Container>
        <Typography
          component="h4"
          variant="h4"
          className={styles.title}
          color="secondary"
        >
          Conheça os participantes:
        </Typography>
        <div className={styles.cards}>
          <Card
            image="/jeferson.jpg"
            title={"Jeferson Pandolfo"}
            content={<p>Diretor de Educação Digital da Unicarioca, <br/>CRO na InterEDtech e Consultor da Hoper</p>}
          />
          <Card
            image="/cibele.png"
            title={"Cibele Schuelter"}
            content={"Diretora de Novos Negócios da Alumia"}
          />
        </div>
      </Container>

    </div>
  )
}
