import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

//import ProductDesktop from './ProductDesktop'
import ProductMob from './ProductMob'

import CReviewAdd from '../../conteiners/product/CReviewAdd'

const useStyles = makeStyles({
  // mob:{
  //   display: "block"
  // },
  // desk:{
  //   display: "none"
  // },
  // '@media (min-width: 1025px)': {
  //   mob:{
  //     display: "none"
  //   },
  //   desk:{
  //     display: "block"
  //   },
  // },
})

const Product = ({ product, comments, handleReview}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.mob}> <ProductMob product={product} comments={comments} handleReview={handleReview}/> </div>
      <CReviewAdd />
    </>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  comments: PropTypes.object.isRequired,
  handleReview: PropTypes.func.isRequired,
};

export default Product