import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import StepperCarousel from './StepperCarousel'
import ProdCarousel from './ProdCarousel'
import SmallProdGrid from './SmallProdGrid'
import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  center: {
    maxWidth: 1920,
    margin: "0 auto",
    padding: theme.spacing(1),
  },
}))

const Main = ({ getLaptoper, history , laptoper, popular, latest, recomend}) => {
  const classes = useStyles()

  useEffect(() => getLaptoper(), [getLaptoper])

  return (
    <>
    {laptoper.loading && <Spinner/>}
    {laptoper.fail && <Fail loadFunc={getLaptoper} />}
    {!laptoper.loading && !laptoper.fail &&
      <div className={classes.center}>
          <StepperCarousel carousel={laptoper.mainCarousel} history={history} />
          <ProdCarousel products={latest} history={history} title={'Остані переглянуті'}/>
          <ProdCarousel products={recomend} history={history} title={'Рекомендовані'}/>
          <SmallProdGrid products={popular} history={history} title={'Популярні'} />
      </div>
    }
    </>
  )
}

Main.propTypes = {
  history: PropTypes.object.isRequired,
  laptoper: PropTypes.object.isRequired,
  popular: PropTypes.array.isRequired,
  latest: PropTypes.array.isRequired,
  recomend: PropTypes.array.isRequired,
  getLaptoper: PropTypes.func.isRequired,
};

export default Main
