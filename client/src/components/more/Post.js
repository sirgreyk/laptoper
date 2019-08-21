import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  grid: {
    display: 'grid',
    gridGap: '16px 16px'
  },
  media: {
    height: 220,
  },
}))

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}

const Post = ({ post, history, getPost }) => {
  const classes = useStyles()

  useEffect(() => getPost(history.location.pathname.slice(6)), [getPost])

  return (
    <>
    {post.loading && <Spinner/>}
    {post.fail && <Fail loadFunc={() => getPost(history.location.pathname.slice(6))} />}
    {!post.loading && !post.fail && post.json &&
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant='h6'>post.json.name</Typography>
      </div>
      <div className={classes.grid}>
        <Typography variant="subtitle1" >post.json.post</Typography>
      </div>
    </div>
    }
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Post
