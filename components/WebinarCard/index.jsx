import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import store from '../../src/store';

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
    <Card
      className={classes.root}
      variant="elevation"
      onClick={e => store.dispatch({
        type: "open",
        data: data,
      })}
    >
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
        <Button
          size="small"
          color="primary"
          onClick={e => store.dispatch({
            type: "open",
            data: data,
          })}
        >
          Assistir agora
        </Button>
      </CardActions>
    </Card>
  );
}
