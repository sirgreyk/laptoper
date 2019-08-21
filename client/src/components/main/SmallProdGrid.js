import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import SmallCard from '../cards/SmallCard'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1200,
    display: "grid",
  },
  title: {
    padding: theme.spacing(1),
    fontWeight: 500,
  },
  products: {
    display: "grid",
    gridGap: "8px 8px",
    gridTemplateColumns: "1fr 1fr",
  },
}))

const SmallProdGrid = (props) => {
  const classes = useStyles()

  const { products, title, history } = props

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
      <div className={classes.products}>
        {products.map((product, index) => (
          <SmallCard product={product} key={index} history={history}/>
        ))}
      </div>
    </div>
  )
}

SmallProdGrid.propTypes = {
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default SmallProdGrid