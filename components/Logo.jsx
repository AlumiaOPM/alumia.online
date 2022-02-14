import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
