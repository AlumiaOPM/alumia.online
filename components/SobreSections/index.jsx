import React from 'react';
import { Typography } from '@material-ui/core';

import Container from '../Container';

import styles from './index.module.css';

export default function SobreAAlumia() {

  const Section = props => {
    return (
      <div className={`${styles.section} ${props.inverted ? styles.inverted : null}`}>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} title={props.title}/>
        </div>
        <div className={styles.text}>
          <Typography component="h5">
            {props.title && props.title}
          </Typography>
          {props.content && props.content.map(text => (
            <Typography component="p">
              {text}
            </Typography>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.sobreAAlumia}>
      <Container>
        <Section
          title="Nossa filosofia"
          content={[
            "O foco na experiência do usuário é a nossa prioridade. Os alunos anseiam por Instituições de Ensino que se modernizem e rapidamente adaptem suas operações para proporcionar conveniência e adequação a um novo modelo de vida e de sociedade. É possível usar a EaD como ferramenta para atingir esse objetivo, com conteúdo de qualidade e alcance nacional.",
          ]}
          image="/nossa-filosofia.png"
        />
        <Section
          title="Nosso impacto"
          content={[
            "Apoiar as IES para transformar os alunos de hoje em excelentes profissionais amanhã, por meio da educação a distância personalizado e de alta qualidade.",
          ]}
          image="/nosso-impacto.png"
          inverted
        />
        <Section
          title="Transformação digital na prática"
          content={[
            "Como uma OPM (Online Program Management) usamos tecnologia, pessoas e dados para ajudar as IES a se transformarem na era digital.",
            "Produzimos conteúdos e objetos de aprendizagem exclusivos para as IES nas modalidades de graduação, pós-graduação e cursos livres. Trabalhamos de forma colaborativa, orientamos nossos parceiros nas melhores práticas de EaD e ajudamos as IES a acelerar o crescimento e superar os obstáculos da transformação digital. Com isso ajudamos a construir um ensino superior online de qualidade e melhoria contínua.",
          ]}
          image="/transformacao-digital.png"
        />
      </Container>
    </div>
  )
}
