import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';

import ShoppingCart from '@material-ui/icons/ShoppingCart'


const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(0.5),
  },
}))

const BuyBtn = (props) => {
  const classes = useStyles()

  const { variant, id, fullWidth, icon } = props
  const buy = id => alert('You add to cart product with id : ' + id)
  return (
    icon ? 
    <IconButton>
      <ShoppingCart onClick={() => buy(id)}/>
    </IconButton>
    :
    <Button color="primary" onClick={() => buy(id)} variant={variant} fullWidth={fullWidth}>
      <ShoppingCart className={classes.leftIcon} />
      Купити
    </Button>
  )
}

BuyBtn.propTypes = {
  id: PropTypes.string.isRequired,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  icon: PropTypes.bool,
}

export default BuyBtn