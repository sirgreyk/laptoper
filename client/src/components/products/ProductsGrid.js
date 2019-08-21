import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import HorizontalCard from '../cards/HorizontalCard'
import GoodsCard from '../cards/GoodsCard'
import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

import CProductsHead from '../../conteiners/products/CProductsHead';

const useStyles = makeStyles(theme => ({
  Products: {
    display: "grid",
    justifyItems: "center",
    padding: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: 16,
    display: 'grid',
    gridTemplateColumns: "1fr",
    gridGap: "16px 16px",
  },
  sortLine: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
  },
  title: {
    alignSelf: "end",
  },
  actions:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  switch: {
    display: "none",
    alignSelf: "end",
    justifySelf: "end"
  },
  selectSort: {
    margin: 5,
    width: 160,
  },
}))

const ProductsGrid = ({ view, products, getProducts, history, handleReview}) => {
  const classes = useStyles()

  useEffect(() => getProducts(), [getProducts])

  return (
    <div className={classes.Products}>
      <CProductsHead />
      <div className={classes.cardGrid}>
        {view ? 
          <>
            {products.loading && <Spinner/>}
            {products.fail && <Fail loadFunc={() => getProducts()} />}
            {!products.loading && !products.fail && products.json && products.json.map((product, i) => (
              <GoodsCard key={i} product={product} history={history} handleReview={handleReview}/>
            ))
          }
          </>
          :
          <>
            {products.loading && <Spinner/>}
            {products.fail && <Fail loadFunc={() => getProducts()} />}
            {!products.loading && !products.fail && products.json && products.json.map((product, i) => (
              <HorizontalCard key={i} product={product} history={history} handleReview={handleReview}/>
            ))
          }
          </>
        }
      </div>
    </div>

  )
}

ProductsGrid.propTypes = {
  view: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  handleReview: PropTypes.func.isRequired,
};

export default ProductsGrid