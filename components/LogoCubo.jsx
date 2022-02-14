import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logoCubo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-50px',
    paddingBottom:'20px'
    
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
