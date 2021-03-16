import React from 'react';

import Container from '../Container';
import Section from '../Section';
import {  TextField,  Grid,  Button,  Typography,  DialogTitle,  CircularProgress,  Collapse,  IconButton} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Close } from '@material-ui/icons';
import store from '../../src/store';
import { AlertTitle } from '@material-ui/lab';
import styles from './index.module.css';

export default function FirstSection() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(store.getState());
  const [fields, setFields] = React.useState({})
  const [isPageFullyLoaded, setisPageFullyLoaded] = React.useState(false);

  React.useEffect(() => {
    window.onload = () => setisPageFullyLoaded(true)
  }, [])


  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value })
  }

  const handleSubmit = async event => {
    setLoading(true);
    event.preventDefault();
    const { nome_completo, cargo, email, mobilephone } = fields;
    const payload = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "nome_completo",
          "value": nome_completo,
        },
        {
          "name": "cargo",
          "value": cargo,
        },
        {
          "name": "email",
          "value": email,
        },
        {
          "name": "mobilephone",
          "value": mobilephone,
        }
      ]
    }

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/6331207/df425ee5-2a7c-4471-bcab-8e4858de22df", {
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
    <div className={styles.webnarHeader}>
      <Container>
        <Section>
          <div className={styles.sectionItem}>
            <Typography
              component="h2"
              variant="h4"
              style={{ color: "#f1f1f1", fontWeight: '800' }}>
              [ WEBINAR ] <br/> Como Escalar Rapidamente um Programa <span style={{ color: "#F15A22" }}>EAD</span>
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              style={{ color: "#f1f1f1", fontWeight: '800' }}>
              <br/>Dia: <span style={{ color: "#F15A22" }}>16/03</span> às <span style={{ color: "#F15A22" }}>15hrs</span>
            </Typography>
            <Typography
              component="p"
              style={{ color: '#f1f1f1' }}>
              Nós estamos vivendo a transformação digital. O ambiente online é o futuro e, ainda mais, a educação online é o futuro. Venha entender com a gente como!
            </Typography>
            
          </div>

          <div className={styles.sectionForms}>
          <Typography
              component="h5"
              style={{ color: '#f1f1f1' }}>
              Quer baixar a apresentação? <br/>Preencha o formulário:
            </Typography>
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
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="E-mail"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="cargo"
                  label="Cargo"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                  name="cargo"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Telefone"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                  name="mobilephone"
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
        </Section>

      </Container>

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
    </div>
  )
}
