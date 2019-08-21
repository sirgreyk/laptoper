import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import BuyBtn from '../elements/BuyBtn';
import FavoriteBtn from '../elements/FavoriteBtn';
import CompareBtn from '../elements/CompareBtn';
import ReviewsBtn from '../elements/ReviewsBtn';
import Price from '../elements/Price';
import Chips from '../elements/Chips';

const useStyles = makeStyles(theme =>({
  card: {
    maxWidth: 300,
  },
  imgRoot: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    marginTop: theme.spacing(0.5),
    height: 150,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  price: {
    padding: `${theme.spacing(1.5)}px 0`,
  },
  chips: {
    padding: theme.spacing(0.5),
    position: "absolute",
    zIndex: 2,
    alignSelf: "start",
    justifySelf: "start",
  },
}))

const GoodsCard = (props) => {
  const { product, history, handleReview } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.chips}>
        <Chips type={product.chipType}/>
      </div>
      <CardActionArea onClick={() => history.push('/product')}>
        <div className={classes.imgRoot} >
          <img className={classes.img } src={`http://localhost:3000/img/${product.img}`}  alt={"nemo"}/>
        </div>
          <CardContent>
            <Typography  variant="h6">
              {product.name}
            </Typography>
            <ReviewsBtn id={product.id} handleReview={handleReview} history={history} rate={product.rate} reviews={product.reviews}/>
            <div className={classes.price}>
              <Price price={product.pricing.price}/>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <div><BuyBtn id={product.id}/></div> 
        <div>
          <FavoriteBtn id={product.id} icon/>
          <CompareBtn id={product.id} icon/>
        </div>
      </CardActions>
    </Card>
  );
}

GoodsCard.propTypes = {
  product: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleReview: PropTypes.func.isRequired,
}
export default GoodsCard;
