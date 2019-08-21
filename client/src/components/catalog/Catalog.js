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

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '12px 12px'
  },

  media: {
    height: 140,
  },
  cardContent: {
    padding: theme.spacing(),
  },
  head: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const Catalog = ({ catalog, history, getDepartments }) => {
  const classes = useStyles()

  useEffect(() => {
    if(!catalog.load && !catalog.json) {
      getDepartments() 
    }
  }, [getDepartments])
  
  return (
    <>
    {catalog.loading && <Spinner/>}
    {catalog.fail && <Fail loadFunc={getDepartments} />}
    {!catalog.loading && !catalog.fail && catalog.json &&
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant='h6'>Каталог</Typography>
      </div>
      <div className={classes.grid}>
        {catalog.json.map((department, index) => (
          <Card className={classes.card} key={index} onClick={() => history.push(`/department/${department.name}`)}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={department.img}
                title="Department image"
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="subtitle2">
                  {department.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
    }
    </>
  );
}

Catalog.propTypes = {
  history: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};

export default Catalog
