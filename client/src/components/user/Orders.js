import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import ShortCard from '../cards/ShortCard';
import Price from '../elements/Price';

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '8px 8px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: "1fr",
    gridGap: "8px",
    padding: theme.spacing(2, 0),
  },
  cardWrapper: {
    display: 'grid',
  },
  heading: {
    flexBasis: '50%',
    flexShrink: 0,
  },
  products: {
    display: 'grid',
    gridTemplateColumns: "1fr",
    gridGap: "8px",
  },
  price: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  productsHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  history: {
    padding: theme.spacing(1),
  },
  line: {
    padding: theme.spacing(1),
  },
}))

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
}
const options2 = {
  minute: 'numeric',
  hour: 'numeric',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
}

const Orders = ({ user, userOrders, getUserOrders, history }) => {
  const classes = useStyles()
  
  useEffect(() => getUserOrders(), [getUserOrders])

  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => setExpanded(!expanded)

  return (
    <>
    {userOrders.loading && <Spinner/>}
    {userOrders.fail && <Fail loadFunc={() => getUserOrders()} />}
    {!userOrders.loading && !userOrders.fail && userOrders.json &&
    <div className={classes.root}>
      <div className={classes.list}>
        <div>Мої замовлення</div>
        <div className={classes.cardGrid}>
          {userOrders.json.map((order, i) => (
            <div className={classes.cardWrapper} key={i}>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2" className={classes.heading}>{'№ ' + order.number}</Typography>
                    <Typography variant="caption" >{order.date.toLocaleString("ua", options)}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.products}>
                  <div className={classes.productsHeading}>
                    <Typography variant="subtitle2">{order.history[0].status}</Typography>
                    <Button onClick={handleExpandClick}>історія</Button>
                  </div>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div className={classes.history}>
                      {order.history.map((obj, i) => (
                        <div key={i} className={classes.line}>
                          <Typography variant="subtitle2">{obj.status}</Typography>
                          <Typography variant="caption" >{obj.date.toLocaleString("ua", options2)}</Typography>
                        </div>
                      ))}
                    </div>
                  </Collapse>
                    {order.products.map((product, i) => (
                      <div key={i} className={classes.product}>
                        <ShortCard product={product} history={history} />
                        <div className={classes.price}>
                          <Price price={product.price} type="smallNoBg" />
                          <Typography>{product.quantity} шт.</Typography>
                          <Price price={Number(product.price)*Number(product.quantity)} type="smallNoBg" />
                        </div>
                      </div>
                    ))}
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          ))}
        </div>
      </div>
    </div>
    }
    </>
  )
}

Orders.propTypes = {
  history: PropTypes.object.isRequired,
  userOrders: PropTypes.object.isRequired,
};

export default Orders