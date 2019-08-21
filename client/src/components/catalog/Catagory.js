import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    minHeidht: 300,
  },
  grid: {
    paddingBottom: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '12px 12px'
  },
  head: {
    paddingBottom: theme.spacing(1.5),
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    height: '100%',
  },
  cardActionArea: {
    // height: '100%',
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  media: {
    height: 140,
  },
  brandMedia: {
    height: 50,
  },
}))

const Catagory = ({ catalog, history, getDepartments }) => {
  const classes = useStyles()

  useEffect(() => {
    if(!catalog.load && !catalog.json) {
      getDepartments() 
    }
  }, [getDepartments])

  const [ department, setDepartment ] = useState(null) 
  useEffect(() => {
    if(catalog.json) {
      setDepartment(catalog.json.find(e => {
        let length = history.location.pathname.slice(10, 11)
        return e.name === history.location.pathname.slice(11, 11 + +length)
      }))
    }
  }, [catalog.json])

  const [ catagory, setCatagory ] = useState(null) 
  useEffect(() => {
    if(catalog.json && department) {
      setCatagory(department.catagorys.find(e => {
        let length = history.location.pathname.slice(10, 11)
        return e.name === history.location.pathname.slice(11 + 1 + +length)
      }))
    }
  }, [catalog.json, department])

  return (
    <>
    {catalog.loading && <Spinner/>}
    {catalog.fail && <Fail loadFunc={getDepartments} />}
    {!catalog.loading && !catalog.fail && catalog.json && department && catagory &&
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant='h6'>{catagory.name}</Typography>
        <Button onClick={() => history.push('/products')}>Усі лептопи<KeyboardArrowRight color='action'/></Button>
      </div>
      <div className={classes.grid}>
        {catagory.designed.map((des, index) => (
          <Card className={classes.card} key={index} onClick={() => history.push('/products')}>
            <CardActionArea className={classes.cardActionArea}>
              <CardMedia
                className={classes.media}
                image={des.img}
                title="Department image"
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="subtitle2">
                  {des.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <div className={classes.head}>
        <Typography variant='h6'>Бренди</Typography>
        <Button onClick={() => history.push('/products')}>Усі бренди<KeyboardArrowRight color='action'/></Button>
      </div>
      <div className={classes.grid}>
        {catagory.brands.map((brand, index) => (
          <Card className={classes.card} key={index} onClick={() => history.push('/products')}>
            <CardActionArea>
              <CardMedia
                className={classes.brandMedia}
                image={brand.img}
                title="Department image"
              />
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
    }
    </>
  );
}

Catagory.propTypes = {
  history: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};

export default Catagory
