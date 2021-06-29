import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "40px 0px",
    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
    "& h2": {
      lineHeight: "28px",
      fontWeight: 600
    }
  },
  media: {
    height: 180,
    transition: "all 0.4s ease",
    "&:hover": {
      transform: "scale(1.05)"
    }
  },
});

export default function WebinarCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="elevation">
      <a href={data.link} target="_blank" style={{color: '#333', textDecoration: "none"}}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.image}
            title={data.nome}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
              {data.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.data}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <a href={data.link} target="_blank" style={{color: "#F15A22",textDecoration: "none"}}>
            Assistir agora
          </a>
          </Button>
        </CardActions>
      </a>
    </Card>
  );
}
