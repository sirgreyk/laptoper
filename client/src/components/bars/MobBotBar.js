import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';

import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import CompareOutlined from '@material-ui/icons/CompareOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles(theme => ({
  mobBotBar: {
    position: 'fixed',
    top: "auto",
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))
const MobBotBar = ({ history, user, handleCart }) => {
  const classes = useStyles()

  return (
      <AppBar position="fixed" color="default" className={classes.mobBotBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton color="inherit" onClick={()=>history.push('/compare')}>
                <Badge badgeContent={user.json ? user.json.compare.length : null} color="default">
                  <CompareOutlined />
                </Badge>
            </IconButton>
          </div>
          <div>
            <IconButton color="inherit" onClick={()=>history.push('/lists')}>
              <Badge badgeContent={user.json ? user.json.lists.length : null} color="default">
                <FavoriteBorder />
              </Badge>
            </IconButton>
          </div>
          <div>
            <IconButton color="inherit" onClick={()=>handleCart(true)}>
              <Badge badgeContent={user.json ? user.json.cart.length : null} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </div>
          <div><IconButton color="inherit" onClick={()=>history.push('/profile')}><AccountCircleOutlined /></IconButton></div>
        </Toolbar>
      </AppBar>
  )
}

MobBotBar.propTypes = {
  history: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};

export default MobBotBar