import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Price from '../elements/Price'

import Close from '@material-ui/icons/Close';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import Divider from '@material-ui/core/Divider';

import ShortCard from '../cards/ShortCard';

const useStyles = makeStyles(theme => ({
  cartTitle: {
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  cartCard: {
    display: "grid",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    position: 'relative',
    display: 'grid',
  },
  check: {
    position: "absolute",
    zIndex: 5,
    alignSelf: "start",
    justifySelf: "end",
  },
  price: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  c: {
    //zIndex: 2000,
    paddingTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  counter: {
    fontSize: 20,
    fontWeight: 400,
    display: "flex",
  },
  count: {
    justifySelf: "center",
    alignSelf: "center",
    width: 24,
    height: 24,
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },

  actions: {
    display: "grid",
    justifyContent: 'unset'
  },
  actionsTotal: {
    paddingLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionsButton:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  '@media (min-width: 500px)': {

  },
})) 

const Cart = ({ open, handleCart, cart, history }) => {
  const classes = useStyles()
  const what = () => {
    let n = {}
    cart.map(product =>
      n = {
        ...n,
        [product.id]: 1
      }
    )
    return n
  }
  const [num, setNum] = useState(  what())

  // useEffect(() => {
  //   let n = num
  //   cart.map(product =>
  //     n = {
  //       ...n,
  //       [product.id]: 1
  //     }
  //   )
  //   setNum(n)
  // }, [])

  const [total, setTotal] = useState(0)
  useEffect(() => {
    let t = 0
    cart.map(product => t = t + (product.price * num[product.id] || 0) )
    setTotal(t)
  }, [num, cart])

  const plus = id => {
    setNum({
        ...num,
        [id]: num[id] + 1
      })
  }
  const minus = id => {
    if(num[id] !== 1) {
      setNum({
        ...num,
        [id]:  num[id] - 1
      })
    }
  }

  return (
        <Dialog
          fullScreen={window.innerWidth > 1024 ? false : true}
          fullWidth
          maxWidth="md"
          scroll="paper"
          open={open}
          onClose={() => handleCart(false)}
          aria-labelledby="cart"
          aria-describedby="cart-description"
        >
        <DialogTitle className={classes.cartTitle} disableTypography>
          <Typography variant="h6">Кошик</Typography>
          <IconButton aria-label="Close" className={classes.closeButton} onClick={() => handleCart(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Divider />
            {cart.map((product, i) => (
              <div key={i}>
              <div className={classes.cartCard}>
                <div className={classes.cardWrapper}>
                  <ShortCard product={product} history={history} rightPadding/>
                  <div className={classes.check}>
                    <IconButton>
                      <Close />
                    </IconButton>
                  </div>
                </div>

                <div className={classes.price}>
                  <span>Ціна:</span>
                  <Price price={product.price} />
                </div>

                <div className={classes.c}>
                  <span>Кількість:</span>
                  <div className={classes.counter}>
                    <div><IconButton color="primary" onClick={() => minus(product.id)}><Remove /></IconButton></div>
                    <div className={classes.count}>{num[product.id]}</div>
                    <div><IconButton color="primary" onClick={() => plus(product.id)}><Add /></IconButton></div>
                  </div>
                </div>

                <div className={classes.price}>
                  <span>Сума:</span>
                  <Price price={product.price * num[product.id]}/>
                </div>
              </div>
              <Divider />
              </div>
            ))}
          </DialogContent>

          <DialogActions classes={{root: classes.actions}}>
            <div className={classes.actionsTotal}>
              <Typography variant="h6">Разом</Typography>
              <Price price={total}/>
            </div>
            <div className={classes.actionsButton}>
              <Button onClick={() => handleCart(false)} color="primary">Продовжити</Button>
              <Button onClick={() => handleCart(false)} color="primary" variant="contained">Замовити</Button>
            </div>
          </DialogActions>
        </Dialog>
  )
}

Cart.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default Cart
