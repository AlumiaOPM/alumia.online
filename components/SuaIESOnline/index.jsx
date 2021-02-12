import React from 'react';
import { Button, Typography, Dialog, DialogTitle } from '@material-ui/core';
import Container from '../Container';
import Popup from '../Popup';

import {Close} from '@material-ui/icons';

import styles from './index.module.css';

export default function SuaIESOnline() {
  const [open, setIsOpen] = React.useState(false);

  return (
    <div className={styles.suaIESOnline}>
      <Container>
        <Typography color="secondary" component="h4">
          SUA IES ONLINE E DIGITAL
        </Typography>
        <Typography component="p" color="secondary">
          Crie novas receitas por meio de cursos EaD.
        </Typography>
        <Typography component="p" color="secondary">
          Explore as oportunidades do mundo digital com a Alumia.
        </Typography>
        <Typography component="p" color="secondary">
          Faça como nossos parceiros, foque na qualidade e crescimento
        </Typography>

        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => setIsOpen(true)}
          style={{
            margin: "20px auto"
          }}
        >
          Seja um parceiro alumia
        </Button>

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
