import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import LoyaltyIcon from '@material-ui/icons/LoyaltyOutlined';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CategoryIcon from '@material-ui/icons/CategoryOutlined';
import ReorderIcon from '@material-ui/icons/ReorderOutlined';
import HistoryIcon from '@material-ui/icons/HistoryOutlined';
import CompareIcon from '@material-ui/icons/CompareOutlined';
import InfoIcon  from '@material-ui/icons/InfoOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CallIcon from '@material-ui/icons/ContactMailOutlined';
import Laptop from '@material-ui/icons/Laptop';
import Edit from '@material-ui/icons/Edit';

// import FavoriteBtn from '../elements/FavoriteBtn';
// import CompareBtn from '../elements/CompareBtn';

const useStyles = makeStyles(theme => ({
  appBar: {
    display: 'grid',
    justifyItems: 'center',
    zIndex: theme.zIndex.drawer + 1,
  },
  bar: {
    padding: `0 ${theme.spacing(0.5)}px`,
    display: 'grid',
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: '"menuBrand search"',
    //width: "100%",
  },
  menuBrand: {
    display: 'flex',
    alignItems: "center",
    gridArea: "menuBrand",
  },
  brand: {
    gridArea: "brand",
    justifySelf: "start",
    cursor: 'pointer',
    padding: `0 ${theme.spacing(0.5)}px`,
  },
  search: {
    justifySelf: "end",
    gridArea: "search",
    // padding: '2px 4px',
    // display: 'flex',
    // alignItems: 'center',
    // minWidth: 144,
  },
  // input: {
  //   marginLeft: theme.spacing(2),
  //   flex: 1,
  // },
  // iconButton: {
  //   padding: theme.spacing(0.5),
  // },
  // btns: {
  //   gridArea: "btns",
  //   display: "none",
  //   gridTemplateColumns: "1fr 1fr 1fr 1fr",
  //   justifySelf: "end",
  // },
  // '@media (min-width: 750px)': {
  //   bar: {
  //     gridTemplateColumns: "1fr 1fr 1fr",
  //     gridTemplateAreas: '"brand search btns"',
  //   },
  //   btns: {
  //     display: "grid",
  //   },
  // },
  // '@media (min-width: 1250px)': {
  //   bar: {
  //     width: 1230,
  //     gridTemplateColumns: "1fr 1fr 1fr",
  //     gridTemplateAreas: '"brand search btns"',
  //   },
  //   btns: {
  //     display: "grid",
  //   },
  //   search: {
  //     justifySelf: "center",
  //   },
  // },
  drawerPaper: {
    width: 264,
  },
  toolbar: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: "center",
    justifyItems: 'center',
  },
  toolbarIcon: {
    paddingLeft: theme.spacing(2),
  },
  toolbarBrand: {
    paddingLeft: theme.spacing(2),
  },
}))

const Bar = ({ history, user, handleCart }) => {
  const classes = useStyles()
  const [ open, setOpen ] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const closeAndPushHistory = str => {
    handleClose()
    history.push(str)
  }
  
  return (
    <>
      <SwipeableDrawer
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} >
          <Laptop className={classes.toolbarBrand} color="inherit"/>
          <Typography className={classes.toolbarBrand} variant="h6" color="inherit" onClick={()=>history.push('/')}>
            LAPTOPER_v_0.1
          </Typography>
        </div>
      <Divider />
        <List>
          <ListItem button onClick={() => closeAndPushHistory('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Головна'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/catalog')}>
            <ListItemIcon><CategoryIcon /></ListItemIcon>
            <ListItemText primary='Каталог'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/promos')}>
            <ListItemIcon><LoyaltyIcon /></ListItemIcon>
            <ListItemText primary='Акції, Знижки'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/blog')}>
            <ListItemIcon><Edit /></ListItemIcon>
            <ListItemText primary='Блог'/>
          </ListItem>
        <Divider />
          {/* <ListItem button onClick={()=>handleCart(true)}>
            <ListItemIcon><ShoppingCart /></ListItemIcon>
            <ListItemText primary='Кошик'/>
          </ListItem> */}
          <ListItem button onClick={() => closeAndPushHistory('/lists')}>
            <ListItemIcon><FavoriteBorder /></ListItemIcon>
            <ListItemText primary='Списки бажань'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/compare')}>
            <ListItemIcon><CompareIcon /></ListItemIcon>
            <ListItemText primary='Порівняння'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/orders')}>
            <ListItemIcon><ReorderIcon /></ListItemIcon>
            <ListItemText primary='Мої замовлення'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/history')}>
            <ListItemIcon><HistoryIcon /></ListItemIcon>
            <ListItemText primary='Переглянуті'/>
          </ListItem>
        <Divider />
          <ListItem button onClick={() => closeAndPushHistory('/profile')}>
            <ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
            <ListItemText primary='Особистий кабінет'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/contacts')}>
            <ListItemIcon><CallIcon /></ListItemIcon>
            <ListItemText primary='Зворотній звязок'/>
          </ListItem>
          <ListItem button onClick={() => closeAndPushHistory('/info')}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary='Інформація'/>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.bar}>
          <div className={classes.menuBrand}>
            <IconButton className={classes.menuBtn} color="inherit" onClick={handleOpen}><MenuIcon /></IconButton>
            <Typography variant="h6" color="inherit" className={classes.brand} onClick={()=>history.push('/')}>
              LAPTOPER
            </Typography>
          </div>
          <div className={classes.search}><IconButton color="inherit"><SearchIcon /></IconButton></div>
          {/* <Paper className={classes.search} elevation={1}>
            <InputBase className={classes.input} placeholder="Search product" />
            <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </Paper> */}
          {/* <div className={classes.btns}>
            <div><IconButton color="inherit" onClick={()=>history.push('/compare')}><CompareIcon /></IconButton></div>
            <div><IconButton color="inherit" onClick={()=>history.push('/favorite')}><FavoriteBorder /></IconButton></div>
            <div><IconButton color="inherit" onClick={()=>handleCart(true)}><ShoppingCart /></IconButton></div>
            <div><IconButton color="inherit" onClick={() => history.push('')}><AccountCircleOutlined /></IconButton></div>
          </div> */}
      </Toolbar>
    </AppBar>
  </>
  )
}

Bar.propTypes = {
  history: PropTypes.object.isRequired,
  handleCart: PropTypes.func.isRequired,
};
export default Bar
