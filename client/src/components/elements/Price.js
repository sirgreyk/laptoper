import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {

  }
})

const Price = (props) => {
  const classes = useStyles()

  const { price } = props

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" >₴ {price.toLocaleString()}</Typography>
    </div>
  )
}

Price.propTypes = {
  price: PropTypes.number,
}

export default Price