import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  products: {
    display: 'flex',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    "-webkit-overflow-scrolling": "touch",
  },
})

const HorizontalScroll = (props) => {
  const classes = useStyles()

  const {  children } = props

  return (
    <div className={classes.products}>
      {children}
    </div>
  )
}

HorizontalScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalScroll