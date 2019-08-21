import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    paddingBottom: theme.spacing(6),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  image: {
    width: 260,
  },
}))

const Main = (props) => {
  const classes = useStyles()
  const base64String = buffer => {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }

  const [ serverImg, setServerImg ] = useState(null)
  const [ serverLargeImg, setServerLargeImg ] = useState(null)
  const [ serverUrl, setServerUrl ] = useState("")

  const [ img, setImg ] = useState({ src: null, file: null})
  const addImg = e => setImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]})
  const [ largeImg, setLargeImg ] = useState({ src: null, file: null})
  const addLargeImg = e => setLargeImg({ src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]})
  const [ url, setUrl ] = useState("")
  const addUrl = e => setUrl(e.target.value)

  const clear = () => {
    setImg({ src: null, file: null})
    setLargeImg({ src: null, file: null})
    setUrl(null)
  }

  const upload = () => {
    const formData = new FormData()
    formData.append('img', img.file)
    formData.append('largeImg', largeImg.file)
    formData.append('url', url)
    fetch('http://localhost:5000/api/laptoper/main_carousel_push', {
        method: 'POST',
        body: formData
      })
      .then(data => data.json())
      .then(json => {
        console.log(json)
        setServerImg(base64String(json.mainCarousel[0].img.data))
        setServerLargeImg(base64String(json.mainCarousel[0].largeImg.data))
        setServerUrl(json.mainCarousel[0].url)
      })
      .catch(err => console.log(err)) 
  }

  return (
    <div className={classes.root}>
      <h2>Main</h2>
      <h4>Add to main carousel item</h4>

      {img.src ? 
        <>
          <p>You take:</p>
          <img className={classes.image} src={img.src} />
        </>
        :
        <p>Choose picture</p>
      }
      <input
        type="file"
        accept="image/*"
        className={classes.input}
        id="img"
        onChange={addImg}
      />
      <label htmlFor="img">
        <Button 
          size="small"
          component="span" 
          variant="outlined"
          aria-haspopup="true"
        >
          add picture
        </Button>
      </label>

      {largeImg.src ? 
        <>
          <p>You take large image:</p>
          <img className={classes.image} src={largeImg.src} />
        </>
        :
        <p>Choose large picture</p>
      }
      <input
        type="file"
        accept="image/*"
        className={classes.input}
        id="largeImg"
        onChange={addLargeImg}
      />
      <label htmlFor="largeImg">
        <Button 
          size="small"
          component="span" 
          variant="outlined"
          aria-haspopup="true"
        >
          add large picture
        </Button>
      </label>

      {url ? 
        <>
          <p>{`url is: ${url}`}</p>
        </>
        :
        <p>none url</p>
      }
      <input
        type="text"
        value={url}
        id="url"
        placeholder="type url here"
        onChange={addUrl}
      />
      
      <p>
        <Button 
          size="small"
          component="span" 
          variant="outlined"
          aria-haspopup="true"
          onClick={clear}
        >
          clear
        </Button>
        <Button 
          size="small"
          component="span" 
          variant="outlined"
          aria-haspopup="true"
          onClick={upload}
        >
          upload
        </Button>
      </p>

      <h3>Data from server:</h3>

      {serverImg ? 
        <>
          <p>Image from server side</p>
          <img className={classes.image} src={serverImg} />
        </>
        :
        <p>none image</p>
      }
      {serverLargeImg ? 
        <>
          <p>Large image from server side</p>
          <img className={classes.image} src={serverLargeImg} />
        </>
        :
        <p>none large image</p>
      }
      {serverUrl ? 
        <>
          <p>{`serverUrl is: ${serverUrl}`}</p>
        </>
        :
        <p>none serverUrl</p>
      }
    </div>

  )
}

Main.propTypes = {

};

export default Main