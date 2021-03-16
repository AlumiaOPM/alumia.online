import React from 'react';
import { Avatar, Button, Typography } from '@material-ui/core';

import Container from '../Container';
import store from '../../src/store';

import styles from './index.module.css';

export default function OQueFazemos() {

  const Card = props => (
    <div className={styles.card}>
      <Avatar 
          style={{ 
            margin: "20px 0",
            width: '90px',
            height: "90px",
            fontSize: "30px"
          }}
          variant="circular"
          src={props.image}
        >
      </Avatar>
      <Typography
        component="h4"
        variant="h5"
        color="secondary"
      >
        {props.title}
      </Typography>
      <Typography
        color="secondary"
        component="p"
      >
        {props.content}
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
          image="/antonio.jpg"
            title={"Antonio Álvaro"}
            content={"Diretor de Educação e Inovação"}
          />
          <Card
          image="/cibele.png"
            title={"Cibele Schuelter"}
            content={"Diretora de Novos Negócios"}
          />
        </div>
      </Container>

    </div>
  )
}