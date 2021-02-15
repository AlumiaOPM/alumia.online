import React from 'react';

import {
  TextField,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  CircularProgress
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import store from '../../src/store';

import styles from './index.module.css';

export default function Popup(props) {
  const [loading, setLoading] = React.useState(false);
  const [fields, setFields] = React.useState({})
  const [isOpen, setIsOpen] = React.useState(store.getState());

  store.subscribe(() => {
    setIsOpen(!isOpen)
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: event.target.value, service: { ...fields.service } })
  }

  const handleSubmit = async event => {
    setLoading(true);
    event.preventDefault();
    window.setTimeout(() => {
      alert('Enviado com sucesso!')
      event.target.reset();
      return setLoading(false);
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onClose={() => store.dispatch({ type: "closePopup" })}>
      <DialogTitle style={{ backgroundColor: '#f1f1f1' }}>Por favor preencha os campos abaixo:</DialogTitle>
      <div
        onClick={() => store.dispatch({ type: "closePopup" })}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '20px',
          color: '#072E25',
          cursor: 'pointer',
        }}
      >
        <Close />
      </div>
      <div className={styles.popup} {...props}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Nome completo"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                name="fullname"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Nome da IES"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                style={{ marginRight: '6px' }}
                name="ies_name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="email"
                label="E-mail"
                fullWidth
                variant="outlined"
                margin="dense"
                style={{ marginLeft: '6px' }}
                onChange={handleChange}
                name="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Cidade"
                fullWidth
                variant="outlined"
                margin="dense"
                style={{ marginRight: '6px' }}
                onChange={handleChange}
                name="city"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                label="Telefone"
                fullWidth
                variant="outlined"
                margin="dense"
                style={{ marginLeft: '8px' }}
                onChange={handleChange}
                name="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                type="text"
                label="Mensagem"
                fullWidth
                variant="outlined"
                margin="dense"
                onChange={handleChange}
                multiline
                rows={6}
                name="message"
              />
            </Grid>

            <Grid item xs={12} style={{ margin: '10px auto' }}>
              <Button disabled={loading} color="primary" type="submit" variant="contained" fullWidth style={{ position: 'relative' }}>ENVIAR
              {loading && <CircularProgress size={24} style={{
                  position: 'absolute',
                  left: '50%', color: '#11333D'
                }} />}
              </Button>
            </Grid>

          </Grid>

        </form>
      </div>
    </Dialog>

  )
}
