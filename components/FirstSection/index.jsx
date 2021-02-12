import React from 'react';

import Container from '../Container';
import Section from '../Section';
import Popup from '../Popup';
import { Typography, Button, Dialog, DialogTitle } from '@material-ui/core';

import {Close} from '@material-ui/icons';

import styles from './index.module.css';

export default function FirstSection() {
  const [open, setIsOpen] = React.useState(false);

  return (
    <div className={styles.firstSection}>
      <Container>
        <Section>
          <div className={styles.sectionItem}>
            <Typography component="h2" variant="h4" style={{fontWeight: '600'}} style={{color: "#f1f1f1", fontWeight: '800'}}>
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
              <Button onClick={() => setIsOpen(true)} variant="outlined" size="large" color="secondary" fullWidth >Saiba mais</Button>
              <Button variant="contained" size="large" color="primary" fullWidth >Assista nosso vídeo</Button>
            </div>
          </div>

          <div className={styles.sectionItem}>
            {/* Espaço vazio segunda seção */}  
          </div>
        </Section>
      </Container>
      <Dialog open={open} onClose={() => setIsOpen(false)}>
        <DialogTitle style={{ backgroundColor: '#f1f1f1' }}>Por favor preencha os campos abaixo:</DialogTitle>
        <div 
          style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '20px', 
              fontSize: '20px', 
              color: '#072E25', 
              cursor: 'pointer' 
            }} 
          onClick={() => setIsOpen(false)}
        >
          <Close />
        </div>
        <Popup />
      </Dialog>
    </div>
  )
}
