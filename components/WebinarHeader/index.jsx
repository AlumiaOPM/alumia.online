import React from 'react';
import { useRouter } from 'next/router'

import Container from '../Container';
import Section from '../Section';

import {
  TextField,
  Grid,
  Button,
  Typography,
  CircularProgress,
  Collapse,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Close } from '@material-ui/icons';
import { AlertTitle, Alert } from '@material-ui/lab';

import store from '../../src/store';
import styles from './index.module.css';

export default function FirstSection() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(store.getState());
  const [fields, setFields] = React.useState({})
  const [isPageFullyLoaded, setisPageFullyLoaded] = React.useState(false);
  const router = useRouter();

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
          "name": "email",
          "value": email,
        },
        {
          "name": "mobilephone",
          "value": mobilephone,
        },
        {
          "name": "cargo",
          "value": cargo,
        }
      ]
    }

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/6331207/20233314-fcf5-441a-90cd-e3472798b4f2", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        event.target.reset();
        setLoading(false);
        setSuccess(true);
        store.dispatch({ type: "closePopup" });
        return router.push('https://alumia.online/obrigado');
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

  const useStyles = makeStyles((theme) => ({
    input: {
      '&::active': {
        fontSize: '40px !important',
      }
    }
  }))

  const classes = useStyles();

  return (
    <div className={styles.webnarHeader}>
      <Container>
        <Section>
          <div className={styles.sectionItem}>
            <Typography
              component="h4"
              variant="h4"
              style={{
                color: "#f1f1f1",
                fontWeight: 800
              }}
            >
              [ WEBINAR ]
            </Typography>
            <Typography
              component="h2"
              variant="h4"
              style={{
                color: "#f1f1f1",
                fontWeight: '800',
                margin: "20px auto"
              }}>
              Como realizar a<br /> <span style={{ color: "#F15A22" }}>transformação digital</span> nas instituições de ensino
            </Typography>
            <Typography
              component="h3"
              variant="h5"
              style={{
                color: "#f1f1f1",
                fontWeight: '800'
              }}
            >
              Data: <span style={{ color: "#F15A22" }}>11/05</span> <br />Horário: <span style={{ color: "#F15A22" }}>15:00</span>
            </Typography>
            <Typography
              component="p"
              style={{ color: '#f1f1f1' }}>
              Diversas Instituições de Ensino precisaram migrar ano passado para o EAD, antes mesmo de possuírem um preparo adequado para isso, por conta da realidade que ainda estamos enfrentando. Mas você sabe quais são as melhores estratégias para a sua Instituição migrar com tudo para a transformação digital e manter-se mesmo após a volta do presencial?
            </Typography>
            <Typography
              component="p"
              style={{ color: '#f1f1f1' }}>
              Para conversar sobre esse mercado em potencial convidamos grandes especialistas, Cibele Schuelter, Diretora de Novos Negócios da Alumia e Jeferson Pandolfo, Diretor de Educação Digital da Unicarioca, CRO na InterEDtech e Consultor da Hoper.
            </Typography>
            <Typography
              component="p"
              style={{ color: '#f1f1f1' }}>
              Nosso webinar “Como realizar a transformação digital nas instituições de ensino” acontecerá dia 11/5  às 15h pelo nosso canal no Youtube e você não pode perdê-lo!
            </Typography>

          </div>

          <div className={styles.sectionForms}>
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
                    className={classes.input}
                    style={{
                      fontSize: "30px"
                    }}
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
                  <Button
                    disabled={loading}
                    color="primary"
                    type="submit"
                    variant="contained"
                    fullWidth
                    style={{
                      position: 'relative'
                    }}
                  >
                    ENVIAR
                    {loading &&
                      <CircularProgress
                        size={24}
                        style={{
                          position: 'absolute',
                          left: '50%',
                          color: '#11333D'
                        }}
                      />
                    }
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
              <Close fontSize="inherit" />
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
