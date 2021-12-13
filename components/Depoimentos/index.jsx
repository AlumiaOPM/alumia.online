import { Avatar, Typography } from '@material-ui/core';
import React from 'react';

import Container from '../Container';
import styles from './index.module.css';

export default function Depoimentos(props) {


  const TestimonialCard = props => {
    const firstLetter = String(props.name)[0];
    return (
      <div
        className={styles.testimonial}
        style={{
          display: "flex",
          flexDirection: `${props.orientation === "reverse" ? "row-reverse" : "row"}`
        }}
      >
        <div className={styles.text}>
          <Typography 
            component="p" 
            color="secondary"
            style={{
              textAlign: `${props.orientation === "reverse" ? "left" : "right"}`
            }}
          >
            {props.content}
          </Typography>
          <Typography 
            component="h5" 
            variant="h6"
            color="secondary"
            style={{
              textAlign: `${props.orientation === "reverse" ? "left" : "right"}`,
              fontSize: "16px",
              margin: "10px auto"
            }}
          >
            {props.name}
            <span style={{fontStyle: "italic", display: "block"}}>
              {props.work}
            </span>
          </Typography>
        </div>

        <Avatar 
          style={{ 
            backgroundColor: "#F15A22", 
            margin: "20px",
            width: '90px',
            height: "90px",
            fontSize: "30px"
          }}
          variant="circular"
          src={props.image}
        >
          {firstLetter}
        </Avatar>
      </div>
    )
  }

  return (
    <div className={styles.depoimentos}>
      <Container>
        <Typography 
          component="h4" 
          variant="h4" 
          className={styles.title}
          color="secondary"
        >
          Veja o que dizem sobre nós:
        </Typography>
        <TestimonialCard
          name={"Antonieta Megale"}
          content={'" Nos ajudando sempre a pensar nas melhores possibilidades e soluções para levar cada vez mais qualidade para os nossos alunos. Muito obrigada Alumia!"'}
          work={"Coordenadora Instituto Singularidades "}
          orientation={"reverse"}
          image="/antonieta.png"
        />
        <TestimonialCard
          name={"Caio Giusti"}
          content={'" A parceria com a Alumia tem sido proveitosa em diversos sentidos, desde a qualidade/agilidade do atendimento à seriedade com que conduzem as atividades e ao valor agregado. "'}
          work={"Gerente de Educação Continuada"}
          orientation={"left"}
          image="/caio.png"
        />
      </Container>
    </div>
  )
}
