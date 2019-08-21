import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import BuyBtn from '../elements/BuyBtn';
import FavoriteBtn from '../elements/FavoriteBtn';
import CompareBtn from '../elements/CompareBtn';

//import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  productBar: {
    top: "auto",
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '@media (min-width: 600px)': {
    productBar: {
      display: "none",
    },
  },
})

const ProductBar = () => {
  const classes = useStyles()

  return (
      <AppBar position="fixed" color="default" className={classes.productBar}>
        <Toolbar className={classes.toolbar}>
          <BuyBtn id={'666'}/>
          <FavoriteBtn icon id={'666'}/>
          <CompareBtn icon id={'666'}/>
          <IconButton aria-label="Show detail">
            <ExpandLess />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}

export default ProductBar