
import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    // maxWidth: 290,
  },
  CardActionArea: {
    display: "flex",
    borderRadius: "4px 4px 0 0",
    padding: theme.spacing(1),
  },

  CardActionAreaPadding: {
    display: "flex",
    borderRadius: "4px 4px 0 0",
    padding: theme.spacing(1),
    paddingRight: theme.spacing(5),
  },


  media: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    maxWidth: 90,
    maxHeight: 90,
  },
  cardHeader: {
    padding: theme.spacing(1),
    paddingBottom: 0,
    paddingTop: 0,
  },
}))
const ShortCard = (props) => {
  const classes = useStyles()
  const { product, history, rightPadding } = props

  return (
      <Card className={classes.cardRoot} >
        <CardActionArea className={rightPadding ? classes.CardActionAreaPadding : classes.CardActionArea} onClick={() => history.push('/product')}>
            <div className={classes.media}>
              <img src={`http://localhost:3000/img/${product.img}`} className={classes.img} alt="nemo"/>
            </div>
            <CardHeader
              className={classes.cardHeader}
              title={<Typography variant="subtitle2">{product.name}</Typography>} 
              subheader={<Typography variant="caption" >Код товару: 647167</Typography>}
            />
            {/* <div>
              <Typography varinat="subtitle2">{product.name}</Typography>
              <Typography varinat="caption" >Код товару: 647167</Typography>
            </div> */}
        </CardActionArea>
      </Card> 
  )
}

ShortCard.propTypes = {
  rightPadding: PropTypes.bool,
  history: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

export default ShortCard