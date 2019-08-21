import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import ShortCard from '../cards/ShortCard';
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
    padding: `${theme.spacing(2)}px 0`,
  },
  cardWrapper: {
    position: 'relative',
    display: 'grid',
  },
  check: {
    position: "absolute",
    zIndex: 5,
    alignSelf: "start",
    justifySelf: "end",
  },

}))

const History = ({ user, getUserHistory, userHistory, history }) => {
  const classes = useStyles()

  useEffect(() => getUserHistory(user.history), [getUserHistory])

  return (
    <>
    {userHistory.loading && <Spinner/>}
    {userHistory.fail && <Fail loadFunc={() => getUserHistory(user.history)} />}
    {!userHistory.loading && !userHistory.fail && userHistory.json &&
    <div className={classes.root}>
      <div className={classes.list}>
        <div>Історія переглядів</div>
        <div className={classes.cardGrid}>
          {userHistory.json.map((product, i) => (
            <div className={classes.cardWrapper} key={i}>
              <ShortCard product={product} history={history} rightPadding/>
              <div className={classes.check}>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    }
    </>
  )
}

History.propTypes = {
  history: PropTypes.object.isRequired,
  userHistory: PropTypes.object.isRequired,
};

export default History