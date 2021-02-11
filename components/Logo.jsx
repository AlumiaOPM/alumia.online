import { makeStyles, Typography } from '@material-ui/core';
import styles from './Logo.module.css';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-26px'
  }
}))

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <img src="/logo.svg" alt="Logo" />
    </div>
  )
}
