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
            width: '100px',
            height: "100px",
            fontSize: "30px"
          }}
          variant="circular"
        >
          {firstLetter}
        </Avatar>
      </div>
    )
  }

  return (
    <div className={styles.depoimentos}>
      <Container>
        <TestimonialCard
          name={"Antonieta Megale"}
          content={'" Nos ajudando sempre a pensar nas melhores possibilidades e soluções para levar cada vez mais qualidade para os nossos alunos. Muito obrigada Alumia!"'}
          work={"Coordenadora Instituto Singularidades "}
          orientation={"reverse"}
        />
        <TestimonialCard
          name={"Guto Grieco"}
          content={'" Trabalhar com a Alumia tem sido muito bom pela qualidade do atendimento, pelos valores éticos da companhia, pelo serviço completo que eles prestam e pelos resultados que nos ajudam a atingir. "'}
          work={"Head inovação ESPM"}
          orientation={"left"}
        />
      </Container>
    </div>
  )
}
