import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StyleRoot } from 'radium';

const styles = {
  card: {
     maxWidth: 500,
     height: 200,
  
  },
  media: {
    '@media (max-width: 100px)': {
      width: '300px',
      height: '200px'
    },

    '@media (min-width: 2000px)': {
      width: '960px',
      height: '600px'
    }
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <StyleRoot>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image of Diamond"
          className={classes.media}
           height="100"
          image='http://www.mining.com/wp-content/uploads/2018/08/unnamed.jpg'
          title="Diamond"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="h3">
            Diamond
          </Typography>
          <Typography component="p" style={{overflowX : 'auto',fontSize: '10px'}}>
             
           Diamonds are so expenshive.Pathak wears diamond.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </StyleRoot>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(ImgMediaCard);