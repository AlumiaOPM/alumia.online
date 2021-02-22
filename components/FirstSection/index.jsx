import React from 'react';

import Container from '../Container';
import Section from '../Section';
import { Typography, Button, Dialog, CircularProgress, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import store from '../../src/store';

import styles from './index.module.css';

export default function FirstSection() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loading, setIsLoading] = React.useState(true);

  const handleClick = event => {
    store.dispatch({ type: "openPopup" })
  }

  return (
    <div className={styles.firstSection}>
      <Container>
        <Section>
          <div className={styles.sectionItem}>
            <Typography
              component="h2"
              variant="h4"
              style={{ color: "#f1f1f1", fontWeight: '800' }}>
              Criamos programas EaD exclusivos e
              personalizados para sua instituição
              de ensino, <span style={{ color: "#F15A22" }}>sem custos</span>.
            </Typography>
            <Typography
              component="p"
              style={{ color: '#f1f1f1' }}

            >
              Conte com cursos digitais de alta qualidade no modelo <strong>OPM</strong> (online program management), incluindo captação de alunos para escalar seu EaD sem investimentos.
            </Typography>
            <div className={styles.containerActions}>
              <Button
                variant="outlined"
                size="large"
                color="secondary"
                fullWidth
                onClick={() => setIsOpen(!isOpen)}
              >
                <a
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

      <Dialog
        open={isOpen}
        fullWidth={true}
        maxWidth="md"
        /* onClose={() => {
          setIsOpen(false)
          setIsLoading(true)
        }} */
      >
        <div
          onClick={() => {
            setIsOpen(false)
            setIsLoading(true)
          }}
          style={{
            position: 'fixed',
            top: '0px',
            right: '0px',
            fontSize: '20px',
            color: '#f1f1f1',
            cursor: 'pointer',
          }}
        >
          <IconButton color="secondary">
            <Close color="secondary"/>
          </IconButton>
        </div>
        <div className={styles.video}>
          {loading && <CircularProgress
            size={24}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              color: '#11333D'
            }} />}

          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/REdgyelb2Jw"
            frameborder="0"
            /* allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen;" */
            allowfullscreen
            onLoad={() => setIsLoading(false)}
            style={{
              marginBottom: "-4px"
            }}
          />
        </div>
      </Dialog>
    </div>
  )
}
