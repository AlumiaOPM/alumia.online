import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import store from '../../src/store';

import styles from './index.module.css';

export default function WebinarModal() {
  const [open, setOpen] = React.useState(store.getState().webinar);
  const [fields, setFields] = React.useState({});
  const [data, setData] = React.useState([]);

  store.subscribe(() => {
    setOpen(!open);
    setData(store.getState().webinar.data);
  });

  const handleClose = () => {
    store.dispatch({
      type: "close"
    })
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value })
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email } = fields;
    const payload = {
      "submittedAt": Date.now(),
      "fields": [
        {
          "name": "email",
          "value": email,
        },
      ]
    };

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/6331207/575c7b59-2ab2-4155-a157-34324efcb693", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        event.target.reset();
        window.open(data && data.link, "_blakn").focus();

        return store.dispatch({ type: "close" })
      } else {
        console.log(response);
        return store.dispatch({ type: "close" })
      }
    } catch (error) {
      console.log(error);
      return store.dispatch({ type: "close" })
    }
  };

  return (
    <div className={styles.webinarModal}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={styles.dialogTitle}>
          {data && data.nome}
        </DialogTitle>

        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <p>Inscreva-se e tenha acesso ao nosso webinar:</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  type="text"
                  label="E-mail"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Button color="primary" type="submit" variant="text">ENVIAR
                </Button>
              </Grid>

            </Grid>

          </form>
        </div>
      </Dialog>
    </div>
  );
};
