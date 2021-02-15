import React from 'react';

import Container from '../Container';
import Section from '../Section';
import { Typography, Button, } from '@material-ui/core';

import store from '../../src/store';

import styles from './index.module.css';

export default function FirstSection() {
  const handleClick = event => {
    store.dispatch({type: "openPopup"})
  }

  return (
    <div className={styles.firstSection}>
      <Container>
        <Section>
          <div className={styles.sectionItem}>
            <Typography 
              component="h2" 
              variant="h4" 
              style={{color: "#f1f1f1", fontWeight: '800'}}>
              Criamos programas EaD exclusivos e
              personalizados para sua instituição
              de ensino, sem custos.
            </Typography>
            <Typography 
              component="p"
              style={{color: '#f1f1f1'}}
              
            >
              Conte com cursos digitais de alta qualidade no modelo <strong>OPM</strong> (online program management), incluindo captação de alunos para escalar seu EaD sem investimentos.
            </Typography>
            <div className={styles.containerActions}>
              <Button 
                variant="outlined" 
                size="large" 
                color="secondary"
                fullWidth 
              >
                <a 
                  href="https://www.youtube.com/watch?v=REdgyelb2Jw" 
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                    color: "#F5F1F9"
                  }}
                >
                  Assista nosso vídeo
                </a>
              </Button>
              <Button 
                onClick={handleClick} 
                variant="contained" 
                size="large" 
                color="primary"
                fullWidth 
              >Saiba mais</Button>
            </div>
          </div>

          <div className={styles.sectionItem}>
            {/* Espaço vazio segunda seção */}  
          </div>
        </Section>
      </Container>
    </div>
  )
}
