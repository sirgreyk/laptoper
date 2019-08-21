import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'
import Close from '@material-ui/icons/Close';
import Check from '@material-ui/icons/Check';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(0.5),
  },
  input: {
    display: 'none',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
  },
  titleRoot: {
    padding: theme.spacing(0.5),
  },
  closeButton: {
    marginLeft: 'auto',
  },

  uploadAvatar: {
    display: 'grid',
    justifyItems: 'center',
    gridGap: `16px 16px`,
    paddingTop: theme.spacing(1),
  },
  avatar: {
    width: 70,
    height: 70,
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },

  formControl: {
    paddingTop: theme.spacing(1),
  },
  fields: {
    width: '100%',
    display: "grid",
    gridTemplateRows: "repeat(2, minmax(min-content, max-content))",
    paddingBottom: theme.spacing(2),
  },

}))

const Edit = ({ open, handleEdit, user }) => {
  const classes = useStyles()

  const [ img, setImg ] = useState(user.json.img || null)
  const addImg = e => setImg(URL.createObjectURL(e.target.files[0]))
  const removeImg = () => {
    setImg(null)
    handleClose()
  }

  const [ firstName, setFirstName ] = useState(user.json.firstName)
  const handleFirstName = e => setFirstName(e.target.value)

  const [ lastName, setLastName ] = useState(user.json.lastName)
  const handleLastName = e => setLastName(e.target.value)

  const [ email, setEmail ] = useState(user.json.email)
  const handleEmail = e => setEmail(e.target.value)

  const [ gender, setGender ] = useState(user.json.about.gender);
  const handleGender = e => setGender(e.target.value)

  const [ child, setChild ] = useState(user.json.about.children);
  const handleChild = bool => setChild(bool)

  const [ car, setCar ] = useState(user.json.about.car);
  const handleCar = bool => setCar(bool)

  const [ hobby, setHobby ] = useState(user.json.about.hobby);
  const handleHobby = hobbyType => setHobby({ ...hobby, [hobbyType]: !hobby[hobbyType]})

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Dialog
      fullScreen={window.innerWidth > 1024 ? false : true}
      fullWidth
      maxWidth="md"
      scroll="paper"
      open={open}
      onClose={() => handleEdit(false)}
      aria-labelledby="cart"
      aria-describedby="cart-description"
    >
    <DialogTitle className={classes.title} disableTypography classes={{root: classes.titleRoot}}>
      <IconButton aria-label="Close" onClick={() => handleEdit(false)}>
        <Close />
      </IconButton>

      <Typography variant="subtitle1">Редагувати профіль</Typography>

      <IconButton aria-label="Confirm" color='secondary' className={classes.closeButton} onClick={() => handleEdit(false)}>
        <Check />
      </IconButton>

    </DialogTitle>

    <DialogContent >
      <div className={classes.uploadAvatar}>
        {img ? 
          <Avatar src={img} className={classes.avatar}/>
          :
          <Avatar className={classes.avatar}>
            {`${user.json.firstName.charAt(0).toUpperCase()}${user.json.secondName.charAt(0).toUpperCase()}`}
          </Avatar>
        }
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          id="file"
          multiple
          onChange={addImg}
        />
          <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-owns={anchorEl ? 'menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            Змінити зображення
          </Button>
          <Menu id="menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <label htmlFor="file">
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AddPhotoAlternate />
                </ListItemIcon>
                <ListItemText primary="Нове зображення" />
              </MenuItem>
            </label>
            <MenuItem onClick={removeImg}>
              <ListItemIcon>
                <Delete />
              </ListItemIcon>
              <ListItemText primary="Видалити" />
            </MenuItem>
          </Menu>
      </div>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Ім'я"
          id="changeFirstName"
          value={firstName}
          onChange={(e) => handleFirstName(e)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Прізвище"
          id="changeFirstName"
          value={lastName}
          onChange={(e) => handleLastName(e)}
          margin="normal"
        />
        </div>

        <Typography variant="subtitle2" gutterBottom>Про себе</Typography>
        <div className={classes.fields}>
          <FormControl className={classes.formControl}>
            <FormLabel>Стать</FormLabel>
            <RadioGroup
              aria-label="Стать"
              name="gender"
              value={gender}
              onChange={handleGender}
            >
              <FormControlLabel value="female" control={<Radio />} label="Жінка" />
              <FormControlLabel value="male" control={<Radio />} label="Чоловік" />
              <FormControlLabel value="other" control={<Radio />} label="Невказано" />
            </RadioGroup>
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel component="legend">Діти</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={child}
                  onChange={() => handleChild(!child)}
                />
              }
              label="Є"
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <FormLabel component="legend">Автомобіль</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={car}
                  onChange={() => handleCar(!car)}
                />
              }
              label="Є"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <FormLabel component="legend">Захоплення</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={hobby.run} onChange={() => handleHobby('run')} />}
                label="Біг"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.bike} onChange={() => handleHobby('bike')} />}
                label="Велосипед"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={hobby.handMade} onChange={() => handleHobby('handMade')} />
                }
                label="Ручна робота"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.music} onChange={() => handleHobby('music')} />}
                label="Музика"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.turism} onChange={() => handleHobby('turism')} />}
                label="Туризм"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.cyberSports} onChange={() => handleHobby('cyberSports')} />}
                label="Кібер спорт"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.fishing} onChange={() => handleHobby('fishing')} />}
                label="Рибалка"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.hunting} onChange={() => handleHobby('hunting')} />}
                label="Полювання"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.gardening} onChange={() => handleHobby('gardening')} />}
                label="Садівництво"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.fitnes} onChange={() => handleHobby('fitnes')} />}
                label="Фітнес"
              />
              <FormControlLabel
                control={<Checkbox checked={hobby.yoga} onChange={() => handleHobby('yoga')} />}
                label="Йога"
              />
            </FormGroup>
          </FormControl>
        </div>
        

        <Typography variant="subtitle2" gutterBottom>Контакти</Typography>
        <div className={classes.fields}>
          <TextField
            fullWidth
            label="Електрона пошта"
            id="changeEmail"
            value={email}
            onChange={(e) => handleEmail(e)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Телефони"
            id="changeFirstName"
            value={lastName}
            onChange={(e) => handleLastName(e)}
            margin="normal"
        />
        </div>

    </DialogContent>
    </Dialog>
  )
}

Edit.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,

};

export default Edit