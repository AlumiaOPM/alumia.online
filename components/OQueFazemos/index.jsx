import React from 'react';
import { Button, Typography } from '@material-ui/core';

import Container from '../Container';
import store from '../../src/store';

import styles from './index.module.css';

export default function OQueFazemos() {

  const Card = props => (
    <div className={styles.card}>
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
      {props.action && <Button
        color="primary"
        variant="contained"
        onClick={() => store.dispatch({type:"openPopup"})}
      >Saiba mais</Button>}
    </div>
  )

  return (
    <div className={styles.oQueFazemos}>
      <Container>
        <div className={styles.cards}>
          <Card
            title={<div>Pesquisa de <br></br> mercado e viabilidade</div>}
            content={"Iniciamos com a pesquisa de mercado, desenho de estratégia e propostas de cursos, visando definir o posicionamento, mitigar riscos e alcançar o sucesso escalável."}
            action
          />
          <Card
            title={"Desenvolvimento de conteúdo e estrutura curricular"}
            content={"Construção de conteúdo focada no engajamento e numa trilha intuitiva de aprendizagem, com uso de objetos de aprendizagem diversificados e interativos."}
            action
          />
          <Card
            title={"Gestão do ambiente virtual de aprendizagem"}
            content={"Configuramos a sala de aula digital e fazemos a gestão do conteúdo no AVA (Ambiente Virtual de Aprendizagem), para deixá-lo intuitivo, seguro e estável."}
            action
          />
        </div>

        <div className={styles.cards}>
          <Card
            title={"Apoio e formação da equipe docente"}
            content={"Capacitamos e acompanhamos os docentes para as novas práticas pedagógicas nos ambientes online. Damos suporte a todas as atividades virtuais."}
            action
          />
          <Card
            title={<div>Captação e permanência<br></br> de alunos</div>}
            content={"Encontramos os alunos certos para cada programa, de forma a promover um crescimento escalável e saudável. Para isso, utilizamos as estratégias de marketing mais modernas do mercado, com uma proposta específica e única em cada caso."}
            action
          />
          <Card
            title={<div>Sucesso do aluno</div>}
            content={"Configuramos a sala de aula digital e fazemos a gestão do conteúdo no AVA (Ambiente Virtual de Aprendizagem), para deixá-lo intuitivo, seguro e estável."}
            action
          />
        </div>
      </Container>

    </div>
  )
}
