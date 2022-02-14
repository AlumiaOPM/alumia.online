import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoCubo: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-26px'
    
  }
}))

export default function LogoCubo() {
  const classes = useStyles();

  return (
    <div className={classes.logoCubo}>
      <img src="/cubostartup.png" alt="Logo" />
    </div>
  )
}
