import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Container from '../Container';

import store from '../../src/store';

import styles from './index.module.css';

export default function SuaIESOnline() {

  return (
    <div className={styles.suaIESOnline}>
      <Container>
        <Typography color="secondary" component="h4">
          Sua IES on-line e digital!
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
          onClick={() => store.dispatch({type: "openPopup"})}
          style={{
            margin: "20px auto"
          }}
        >
          Seja um parceiro alumia
        </Button>

      </Container>
    </div>
  )
}
