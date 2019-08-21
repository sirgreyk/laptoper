
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';

import Typography from '@material-ui/core/Typography';

import Price from '../elements/Price';
import Chips from '../elements/Chips';

import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    display: "grid",
    width: 140,
    height: 260,
  },
  media: {
    paddingTop: theme.spacing(1),
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    height: 80,
  },
  img: {
    height: 80,
  },
  chips: {
    padding: theme.spacing(0.5),
    position: "absolute",
    zIndex: 2,
    alignSelf: "start",
    justifySelf: "start",
  },

  cardActions: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignSelf: "end",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  menu: {
    zIndex: 98,
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

const SmallCard = (props) => {
  const classes = useStyles()
  const { product, history } = props
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
      <Card key={product.id} className={classes.cardRoot} >
        <div className={classes.chips}>
          <Chips type={product.chipType}/>
        </div>
        <CardActionArea onClick={() => history.push('/product')}>
          <div className={classes.media} >
            <img className={classes.img } src={`http://localhost:3000/img/${product.img}`} alt={"nemo"}/> 
          </div>
          <CardHeader title={<Typography variant="caption">{product.name}</Typography>} />
        </CardActionArea>

        <div className={classes.cardActions}>
          <div  className={classes.price}>
            <Price price={product.price} type="small" />
          </div>
          <IconButton
            aria-owns={anchorEl ? 'menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
            <MoreVert fontSize="small" />
          </IconButton>
          <Menu id="menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>У Кошик</MenuItem>
            <MenuItem onClick={handleClose}>До Вподобань</MenuItem>
            <MenuItem onClick={handleClose}>Поріняти</MenuItem>
          </Menu>
        </div>
      </Card> 
  )
}

SmallCard.propTypes = {
  history: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
}

export default SmallCard