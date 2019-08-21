import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BuyBtn from '../elements/BuyBtn';
import FavoriteBtn from '../elements/FavoriteBtn';
import CompareBtn from '../elements/CompareBtn';
import ReviewsBtn from '../elements/ReviewsBtn';
import Price from '../elements/Price';
import Info from './Info'

const useStyles = makeStyles(theme => ({
  Detail: {

  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  head: { 
    display: "grid",
    gridTemplateColumns: "1fr 130px",
  },
  review: { 
    alignSelf: "center",
    justifySelf: "center",
  },
  btns: {
    paddingLeft: theme.spacing(1),
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(min-content, max-content))",
    gridTemplateRows: "1fr",
    gridGap: '0 8px',
    alignItems: "center",
    justifyItems: "center",
  },
}))

const Detail = (props) => {
  const classes = useStyles()

  const { id, name, price} = props
  
  return (
    <div className={classes.Detail}>
      <Paper square className={classes.paper} elevation={2}>
        
        <div className={classes.head}>
          <Typography variant="h5">{name}</Typography>
          <div className={classes.reviews}><ReviewsBtn id={id}/></div>
        </div>
        <div className={classes.btns}>

          <div>
            <Price price={price} />
          </div>
          <div>
            <BuyBtn id={id} variant="contained" />
          </div>
          <div>
            <FavoriteBtn id={id} icon/>
          </div>
          <div>
            <CompareBtn id={id} icon/>
          </div>

        </div>

        <Info />
      </Paper>
    </div>
  )
}

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Detail