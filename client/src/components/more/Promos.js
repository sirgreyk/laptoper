import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';
import { dateDiffInDays } from './../../utils/dateDiffInDays';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  grid: {
    display: 'grid',
    gridGap: `${theme.spacing(2)}px ${theme.spacing(2)}px`
  },

  media: {
    height: 220,
  },
  cardContent: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  head: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },

  day: {
    height: 80,
    display: 'grid',
    justifyItems: 'center', 
    paddingRight: theme.spacing(1),
  },
  name: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(1),
  },
}))

const options = {
  day: 'numeric',
}
const options2 = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

const Promos = ({ promos, history, getPromos }) => {
  const classes = useStyles()

  useEffect(() => getPromos(), [getPromos])
  
  const goToPromo = id => history.push(`/promo/${id}`)

  return (
    <>
    {promos.loading && <Spinner/>}
  {promos.fail && <Fail loadFunc={getPromos} />}
    {!promos.loading && !promos.fail &&
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant='h6'>Промо</Typography>
      </div>
      <div className={classes.grid}>
        {promos.json.map((promo, index) => (
          <Card className={classes.card} key={index} onClick={() => goToPromo(promo._id)}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={promo.img}
                title="Department image"
              />
              <CardContent className={classes.cardContent}>
                <div className={classes.day}>
                  <Typography variant="subtitle2">
                    залишилось
                  </Typography>
                  <Typography variant="h6">                  
                    {dateDiffInDays(promo.start, promo.end)}
                  </Typography>
                  <Typography variant="subtitle2">
                    днів
                  </Typography>
                </div>
                <div className={classes.name}>
                  <Typography variant="subtitle2" >
                    {promo.name}
                  </Typography>
                  <Typography variant="caption">
                     {`з ${promo.start.toLocaleString("ua", options2)} по ${promo.end.toLocaleString("ua", options2)}`}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  }
  </>
  )
}

Promos.propTypes = {
  promos: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Promos
