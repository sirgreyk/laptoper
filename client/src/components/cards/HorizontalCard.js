
import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import BuyBtn from '../elements/BuyBtn';
import FavoriteBtn from '../elements/FavoriteBtn';
import CompareBtn from '../elements/CompareBtn';
import Price from '../elements/Price';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    // display: "grid",
    // maxWidth: 290,
  },

  card: {
    padding: theme.spacing(1),
    paddingBottom: 0,
    display: "flex",
  },
  cardHeader: {
    padding: theme.spacing(1),
    paddingBottom: 0,
    paddingTop: 0,
  },

  media: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    maxWidth: 100,
    maxHeight: 100,
  },
  cardActions: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
const HorizontalCard = (props) => {
  const classes = useStyles()
  const { product, history, promo } = props


  return (
      <Card className={classes.cardRoot} >
        <CardActionArea onClick={() => history.push('/product')}>
          <CardContent className={classes.card}>
            <div className={classes.media}>
              <img src={`http://localhost:3000/img/${product.img}`} className={classes.img} alt="nemo"/>
            </div>
            <CardHeader
              className={classes.cardHeader}
              title={<Typography variant="subtitle2">{product.name}</Typography>} 
              subheader={<Price price={product.price}/>}
            />
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          {promo ?
            <>
              <Button color="secondary">SFG3GS6F3SA</Button>
              <div>
                <BuyBtn id={product.id} icon/>
                <FavoriteBtn id={product.id} icon/>
                <CompareBtn id={product.id} icon/>
              </div>
            </>
            :
            <>
              <div><BuyBtn id={product.id}/></div> 
              <div>
                <FavoriteBtn id={product.id} icon/>
                <CompareBtn id={product.id} icon/>
              </div>
            </>
          }
        </CardActions>
      </Card> 
  )
}

HorizontalCard.propTypes = {
  promo: PropTypes.bool,
  history: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

export default HorizontalCard