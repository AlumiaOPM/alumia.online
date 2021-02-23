import React from 'react';

import {
  TextField,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  CircularProgress,
  Collapse,
  IconButton
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Close } from '@material-ui/icons';

import store from '../../src/store';

import styles from './index.module.css';
import { AlertTitle } from '@material-ui/lab';

export default function Popup(props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(store.getState());
  const [fields, setFields] = React.useState({})
  const [isPageFullyLoaded, setisPageFullyLoaded] = React.useState(false);

  React.useEffect(() => {
    window.onload = () => setisPageFullyLoaded(true)
  }, [])

  store.subscribe(() => {
    setIsOpen(!isOpen)
  })

  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value })
  }

  const handleSubmit = async event => {
    setLoading(true);
    event.preventDefault();
    const { nome_completo, city, company, email, mensagem, mobilephone } = fields;
    const payload = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "nome_completo",
          "value": nome_completo,
        },
        {
          "name": "city",
          "value": city,
        },
        {
          "name": "company",
          "value": company,
        },
        {
          "name": "email",
          "value": email,
        },
        {
          "name": "mensagem",
          "value": mensagem,
        },
        {
          "name": "mobilephone",
          "value": mobilephone,
        }
      ]
    }

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/6331207/ee38b1fd-e826-447a-942b-64e9c6ad30dc", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        event.target.reset();
        setLoading(false);
        setSuccess(true)

        return store.dispatch({ type: "closePopup" })
      } else {
        console.log(response)
        setLoading(false);
        setFailed(true);
        return store.dispatch({ type: "closePopup" })
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
      setFailed(true);
      return store.dispatch({ type: "closePopup" })
    }
  }

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTitle style={{ backgroundColor: '#f1f1f1' }} className={styles.dialogTitle}>
          Por favor preencha os campos abaixo:
        </DialogTitle>
        <div
          onClick={() => store.dispatch({ type: "closePopup" })}
          style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
            fontSize: '20px',
            color: '#072E25',
            cursor: 'pointer',
          }}
        >
          <IconButton>
            <Close />
          </IconButton>
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
                  name="nome_completo"
                  required
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
                  name="company"
                  required
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
                  required
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
                  required
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
                  name="mobilephone"
                  required
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
                  name="mensagem"
                  required
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

      {isPageFullyLoaded && <Collapse in={success} className={styles.successMessage} >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setSuccess(false);
              }}
            >
              <Close fontSize="inherit"/>
            </IconButton>
          }
        >
          <AlertTitle>Sucesso!</AlertTitle>
          Formulário enviado com sucesso! Em breve entraremos em contato.
        </Alert>
      </Collapse>}

      {isPageFullyLoaded && <Collapse in={failed} className={styles.failedMessage}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setFailed(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Erro!</AlertTitle>
          Desculpe, houve um erro. Tente novamente.
        </Alert>
      </Collapse>}
    </>
  )
}
