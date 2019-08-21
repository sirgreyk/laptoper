import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import SmallCard from '../cards/SmallCard'

const useStyles = makeStyles(theme => ({
  title: {
    padding: theme.spacing(1),
    fontWeight: 500,
  },
  // products: {
  //   display: 'flex',
  //   overflowX: 'auto',
  //   '&::-webkit-scrollbar': {
  //     display: 'none',
  //   },
  //   "-webkit-overflow-scrolling": "touch",
  // },
  // card: {
  //   width: 148,
  //   margin: theme.spacing(0.5),
  // },
  div1: {
    overflowX: 'hidden',
  },
  div2: {
    display: 'flex',
    flexDirection: 'row',
    direction: 'ltr',
    transition: 'all 0s ease 0s',
    willChange: 'transform',
    transform: 'translate(0%, 0px)',
  },
  div3: {
    width: '100%',
    flexShrink: 0,
    overflow: 'auto',
    direction: 'ltr',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  products: {
    display: 'flex',
  },
  card: {
    width: 140,
    margin: theme.spacing(0.5),
  },
}))

const ProdCarousel = (props) => {
  const classes = useStyles()

  const { products, title, history } = props

  return (
    <>
      <Typography variant="h6" className={classes.title}>{title}</Typography>
      <div className={classes.div1}>
        <div className={classes.div2}>
          <div className={classes.div3}>
          <div className={classes.products}>
            {products.map((product, index) => (
              <div className={classes.card} key={index}>
                <SmallCard product={product} history={history}/>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

ProdCarousel.propTypes = {
  history: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProdCarousel