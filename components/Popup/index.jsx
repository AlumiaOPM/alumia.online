import React from 'react';

import {
  TextField,
  Grid,
  Button,
  FormControl,
  FormControlLabel,
  Typography,
  Checkbox,
  CircularProgress
} from '@material-ui/core';

import styles from './index.module.css';

export default function Popup(props) {
  const [loading, setLoading] = React.useState(false);
  const [fields, setFields] = React.useState({})

  const handleChange = event => {
    const { name, checked } = event.target;

    if (name === "psicoterapia_infantil" || name === "psicoterapia_adolescente" || name === "psicoterapia_adulto" || name === "psicoterapia_casal") {
      setFields({ ...fields, service: { ...fields.service, [name]: checked, } })
    } else {

      setFields({ ...fields, [name]: event.target.value, service: { ...fields.service } })
    }
  }

  const handleSubmit = async event => {
    setLoading(true);
    event.preventDefault();
/*     const response = await fetch('https://polisipo.herokuapp.com/api/v1/send', {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(fields),
    })
    const data = await response.json(); */
    window.setTimeout(() => {
      alert('Enviado com sucesso!')
      event.target.reset();
      return setLoading(false);
    }, 1000)
  }

  return (
    <div className={styles.popup} {...props}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="E-mail"
              fullWidth
              variant="outlined"
              margin="dense"
              onChange={handleChange}
              name="email"
            />
          </Grid>
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

          <Grid item xs={12} style={{ margin: '10px auto' }}>
            <Button disabled={loading} color="primary" type="submit" variant="contained" fullWidth style={{ position: 'relative' }}>ENVIAR
              {loading && <CircularProgress size={24} style={{position: 'absolute',
    left: '50%', color: '#11333D'}}/>}
            </Button>
          </Grid>

        </Grid>

      </form>
    </div>
  )
}
