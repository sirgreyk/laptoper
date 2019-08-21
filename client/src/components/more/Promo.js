import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import FilterList from '@material-ui/icons/FilterList'

import HorizontalCard from '../cards/HorizontalCard'
import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

import { dateDiffInDays } from './../../utils/dateDiffInDays';

const useStyles = makeStyles(theme =>({
  root: {
    padding: 16,
  },
  grid: {
    display: 'grid',
    gridGap: '16px 16px'
  },

  media: {
    height: 220,
  },
  cardContent: {
    display: 'flex',
    padding: 8,
  },
  head: {
    paddingBottom: 16,
    paddingTop: 16,
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
  text: {
    padding: theme.spacing(1)
  },
  whiteSpace: {
    whiteSpace: "pre-line",
  },
  filter: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(0.5),
  },

  types: {
    display: 'flex',
    flexWrap: "wrap"
  },
  type: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

const options2 = {
  day: 'numeric',
  month: 'long',
}

const Promo = ({ promo, history, getPromo }) => {
  const classes = useStyles()

  useEffect(() => getPromo(history.location.pathname.slice(7)), [getPromo])

  return (
    <>
    {promo.loading && <Spinner/>}
    {promo.fail && <Fail loadFunc={() => getPromo(history.location.pathname.slice(7))} />}
    {!promo.loading && !promo.fail && promo.json &&
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={promo.json.img}
            title="Department image"
          />
          <CardContent className={classes.cardContent}>
            <div className={classes.day}>
              <Typography variant="subtitle2">
                залишилось
              </Typography>
              <Typography variant="h6">
                {dateDiffInDays(promo.json.start, promo.json.end)}
              </Typography>
              <Typography variant="subtitle2">
                днів
              </Typography>
            </div>
            <div className={classes.name}>
              <Typography variant="subtitle2" >
                {promo.json.name}
              </Typography>
              <Typography variant="caption">
                {`з ${promo.json.start.toLocaleString("ua", options2)} по ${promo.json.end.toLocaleString("ua", options2)}`}
              </Typography>
            </div>
          </CardContent>
        </Card>
        <div className={classes.text}>
          <div className={classes.types}>
              {Object.keys(promo.json.types).map((key, index) => (
                promo.json.types[key] ? 
                <Chip
                  className={classes.type}
                  key={index}
                  label={key}
                  color="secondary"
                />
                : null
              ))}
          </div>
          <Typography variant="body1" gutterBottom>
            {promo.json.condition}
          </Typography>
          <Typography variant="body2" gutterBottom className={classes.whiteSpace}>
            {promo.json.description}
          </Typography>
        </div>
        <div className={classes.filter}>
          <Button><FilterList className={classes.leftIcon}/>фільтер</Button>
        </div>
        {/* <div className={classes.grid}>
          {json.goods.map((product, i) => (
            <HorizontalCard key={i} product={product} history={history}/>
          ))}
        </div> */}
      </div>
    }
    </>
  )
}

Promo.propTypes = {
  promo: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Promo
