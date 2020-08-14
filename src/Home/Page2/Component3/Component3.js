import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  root: {
    minWidth: 185,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const Component3 =() =>{

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return(

   <Link href="#">
    <Card className={classes.root}>
    <CardContent>
      <CardMedia className={classes.media} style={{height: "50px"}} image="https://specials-images.forbesimg.com/imageserve/5e33ab078b6cf300071d7cd7/960x0.jpg?fit=scale" />
        
      
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </Link>

  );
};
export default Component3;