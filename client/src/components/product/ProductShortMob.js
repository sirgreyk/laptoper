import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BuyBtn from '../elements/BuyBtn';
import FavoriteBtn from '../elements/FavoriteBtn';
import CompareBtn from '../elements/CompareBtn';
import ReviewsBtn from '../elements/ReviewsBtn';
import Price from '../elements/Price';

const useStyles = makeStyles(theme => ({
  paper: {
    maxWidth: 200,
    padding: theme.spacing(1),
    paddingTop: 0,
  },
  media: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
  },
  main: {
    padding: '0 8px',
  },
  img: {
    padding: theme.spacing(1),
    height: 100,
  },
  price: {
    padding: '12px 0'
  },
  btns: {
    display: "flex",
  },
}))

const ProductShortMob = (props) => {
  const classes = useStyles()

  const { img, name, id, price, rate, reviews, handleReview } = props
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
      <Paper square className={classes.paper} elevation={2}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="ваш твоар" />
        </Tabs>
        <div className={classes.media} >
          <img className={classes.img } src={`./img/${img}`} alt={"nemo"}/> 
        </div>
        <div className={classes.main}>
          <Typography  variant="subtitle2">
            {name}
          </Typography>
          <ReviewsBtn id={id} handleReview={handleReview} rate={rate} reviews={reviews}/>
          <div className={classes.price}>
            <Price price={price} type="small"/>
          </div>
        </div>
        <div className={classes.btns}>
          <BuyBtn id={id} />
          <FavoriteBtn id={id} icon/>
          <CompareBtn id={id} icon/>
        </div>

      </Paper>
  )
}

ProductShortMob.propTypes = {
  rate: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleReview: PropTypes.func.isRequired,
};

export default ProductShortMob