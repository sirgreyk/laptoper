import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'

import Close from '@material-ui/icons/Close';
import HorizontalScroll from '../elements/HorizontalScroll';
import ShortCard from '../cards/ShortCard';

const useStyles = makeStyles(theme => ({
  upload: {
    paddingTop: theme.spacing(1),
  },
  imgContainer: {
    margin: theme.spacing(1),
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    height: 80,
    position: 'relative',
  },
  leftIcon: {
    marginRight: theme.spacing(0.5),
  },

  cartTitle: {
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  commentField: {
    width: '100%',
    display: "grid",
    gridTemplateRows: "repeat(2, minmax(min-content, max-content))",
    justifyItems: 'end',
  },
  commentButtons: {
    display: "grid",
    gridGap: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    gridTemplateColumns: "repeat(2, minmax(min-content, max-content))",
    justifyItems: 'end',
  },
  input: {
    display: 'none',
  },
  button: {
    justifySelf: 'start',
  },
}))

const ReviewsAdd = ({ open, handleReview, history, product }) => {
  const classes = useStyles()

  const [ imgs, setImgs ] = useState([])
  const addImg = e => {
    let newImgs = []
    Object.keys(e.target.files).map(key => newImgs.push(URL.createObjectURL(e.target.files[key])) )
    setImgs([ ...newImgs, ...imgs])
  }
  const removeImg = imgSrc => {
    const updateImgs = imgs.filter(img => imgSrc !== img )
    setImgs(updateImgs)
  }

  const [ text, setText ] = useState('')
  const handleText = e => setText(e.target.value)

  const [ advantages, setAdvantages ] = useState('')
  const handleAdvantages = e => setAdvantages(e.target.value)

  const [ disadvantages, aetDisadvantages ] = useState('')
  const handleDisadvantages = e => aetDisadvantages(e.target.value)

  const [ name, setName ] = useState('Відвідувач')
  const handleName = e => setName(e.target.value)

  const [ email, setEmail ] = useState('')
  const handleEmail = e => setEmail(e.target.value)

  const [ notifications , setNotifications ] = useState(true)
  const handleNotifications = () => setNotifications(!notifications)

  return (
    <Dialog
      fullScreen={window.innerWidth > 1024 ? false : true}
      fullWidth
      maxWidth="md"
      scroll="paper"
      open={open}
      onClose={() => handleReview(false)}
      aria-labelledby="cart"
      aria-describedby="cart-description"
    >
    <DialogTitle className={classes.cartTitle} disableTypography>

      <Typography variant="h6">Відгук</Typography>

      <IconButton aria-label="Close" className={classes.closeButton} onClick={() => handleReview(false)}>
        <Close />
      </IconButton>

    </DialogTitle>


    <DialogContent >
    <ShortCard product={product} history={history}/>
         <Divider />
        <div className={classes.commentField}>
          <TextField
            fullWidth
            multiline
            label="Відгук*"
            id="addComment"
            rows="1"
            rowsMax="32"
            value={text}
            onChange={(e) => handleText(e)}
            margin="normal"
          />
          <TextField
            fullWidth
            id="addAdvent"
            label="Переваги"
            value={advantages}
            onChange={(e) => handleAdvantages(e)}
            margin="normal"
          />
          <TextField
            fullWidth
            id="addDisadvent"
            label="Недоліки"
            value={disadvantages}
            onChange={(e) => handleDisadvantages(e)}
            margin="normal"
          />
          </div>

          <div className={classes.upload}>
            <input
              type="file"
              accept="image/*"
              className={classes.input}
              id="file"
              multiple
              onChange={addImg}
            />
            <label htmlFor="file" className={classes.button}>
              <Button component="span" variant="outlined">
                <AddPhotoAlternate color="action" className={classes.leftIcon} />
                Додати зображення
              </Button>
            </label>
            <HorizontalScroll>
              {imgs.map((img, i) => (
                <div key={i} className={classes.imgContainer}>
                  <IconButton aria-label="Close" onClick={() => removeImg(img)}>
                    <Close />
                  </IconButton>
                  <img src={img} alt={i} className={classes.img}/>
                </div>
              ))}
            </HorizontalScroll>
          </div>

          <div className={classes.commentField}>
            <TextField
              fullWidth
              id="addDisadvent"
              label="Ім'я та прізвище"
              value={name}
              onChange={(e) => handleName(e)}
              margin="normal"
            />
            <TextField
              fullWidth
              id="addDisadvent"
              label="Ел. пошта"
              value={email}
              onChange={(e) => handleEmail(e)}
              margin="normal"
            />
          </div>


        <FormControlLabel
          control={
            <Checkbox 
              checked={notifications}
              onChange={handleNotifications}
            />
          }
          label="Повідомляти про відповіді"
        />

    </DialogContent>
    <DialogActions className={classes.actions}>
      <div className={classes.commentButtons}>
          <div><Button size='small'>скасувати</Button></div>
          <div><Button variant='contained' color='primary' size='small'>коментувати</Button></div>
        </div>
    </DialogActions>
    </Dialog>
  )
}

ReviewsAdd.propTypes = {
  handleReview: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,

};

export default ReviewsAdd