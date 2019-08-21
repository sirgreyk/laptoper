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

const Blog = ({ blog, history, getBlog }) => {
  const classes = useStyles()

  useEffect(() => getBlog(), [getBlog])

  const goToPost = id => history.push(`/post/${id}`)

  return (
    <>
    {blog.loading && <Spinner/>}
    {blog.fail && <Fail loadFunc={getBlog} />}
    {!blog.loading && !blog.fail && blog.json &&
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant='h6'>Блоґ</Typography>
      </div>
      <div className={classes.grid}>
        {blog.json.map((post, index) => (
          <Card className={classes.card} key={index} onClick={() => goToPost(post._id)}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={post.img}
                title="Department image"
              />
              <CardHeader 
                title={
                  <Typography variant="subtitle1" >
                    {post.name}
                  </Typography>
                }
                subheader={
                  <Typography variant="caption" color="textSecondary">
                    {`
                      ${
                        post.type === 'news' ? 'Новина' :
                        post.type === 'article' ? 'Стаття' :
                        post.type === 'review' ? 'Огляд' :
                        post.type === 'advice' ? 'Порада' : null
                      }, 
                      ${post.date.toLocaleString("ua", options)}
                      `
                    }
                  </Typography>
                }
              />
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
    }
    </>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Blog
