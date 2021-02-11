import Container from '../Container';

import { MdTrendingUp, MdAttachMoney } from 'react-icons/md';

import styles from './index.module.css';
import { Typography } from '@material-ui/core';

export default function PorQueAlumia() {
  return (
    <div className={styles.curiosidades}>
      <Container>
        <Typography component="h2" variant="h4">
          Por que a <span style={{ color: "#F15A22" }}>alumia</span>?
        </Typography>
        <div className={styles.flex}>

          <div className={styles.item}>
            <img src="/graduation-hat.svg" alt="ícone marketing" />
            <Typography component="h4">
              Transformação <br></br>digital
            </Typography>
            <Typography component="p">
              A alumia atualiza sua marca para o mundo digital. Fazemos uma reavaliação 360º de seus programas de ensino com foco no modelo online. Ajudamos a melhorar a experiência digital do seu aluno, de forma personalizada e exclusiva, alinhada à estratégia de sua instituição.
            </Typography>
          </div>

          <div className={styles.item}>
            <img src="/trophy.svg" alt="ícone marketing" />
            <Typography component="h4">
              Metodologia premiada para o máximo engajamento dos alunos
            </Typography>
            <Typography component="p">
              Desenvolvimento e validação de cursos e dinâmicas de aprendizagem atuais e alinhadas ao que o aluno procura, garantindo a permanência e o sucesso do aluno.
            </Typography>
            <Typography component="p">
              Nosso modelo foi premiado pela ABED como primeiro colocado do Brasil no seu <a href="https://www.eadranking.com.br/" target="_blank">ranking</a> de cursos EaD.
            </Typography>
          </div>

          <div className={styles.item}>
            <img src="/marketing.svg" alt="ícone marketing" />
            <Typography component="h4">
              Alta performance na <br></br>captação de alunos
            </Typography>
            <Typography component="p">
              Especialidade em novos formatos de marketing de performance permite crescimento acelerado e escalável
            </Typography>
          </div>

        </div>
      </Container>
    </div>
  )
}
