import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme =>({
  root: {
    padding: theme.spacing(3),
    display: 'grid',
  },
  err: {
    minHeight: 28,
  },
  btns: {
    paddingTop: theme.spacing(3),
    justifySelf: 'end'
  },
  btn: {
    marginLeft: theme.spacing(1),
  }
}))

const Signup = ({ signupState, signup, history }) => {
  const classes = useStyles()
  useEffect(() => {
    if(signupState.done) {history.push('/login')}
  }, [signupState.done])

  const [ email, setEmail ] = useState('')
  const changeEmail = e => setEmail(e.target.value)
  
  const [ firstName, setFirstName ] = useState('')
  const changeFirstName = e => setFirstName(e.target.value)

  const [ secondName, setSecondName ] = useState('')
  const changeSecondName = e => setSecondName(e.target.value)

  const [ phoneNumber, setPhoneNumber ] = useState('')
  const changePhoneNumber = e => setPhoneNumber(e.target.value)

  const [ password, setPassword ] = useState('')
  const changePassword = e => setPassword(e.target.value)

  const sign = () => signup(firstName, secondName, phoneNumber, email, password)
  const back = () =>  history.goBack()

  return (      
    <div className={classes.root}>
      <Typography variant="h5">
        Новий користувач
      </Typography>
      <Typography variant="subtitle1" color="error" className={classes.err}>
        {signupState.fail ? 'Щось пішло не так...' : ' '}
      </Typography>
      <TextField
        disabled={signupState.load}
        id="firstName"
        label="Ім'я"
        value={firstName}
        onChange={changeFirstName}
        margin="normal"
        required
      />
      <TextField
        disabled={signupState.load}
        id="secondName"
        label="Прізвище"
        value={secondName}
        onChange={changeSecondName}
        margin="normal"
        required
      />
      <TextField
        disabled={signupState.load}
        id="phoneNumber"
        label="Телефон"
        value={phoneNumber}
        onChange={changePhoneNumber}
        margin="normal"
        required
      />

      <TextField
        disabled={signupState.load}
        id="email"
        label="Епошта"
        value={email}
        onChange={changeEmail}
        margin="normal"
        required
      />

      <TextField
        disabled={signupState.load}
        id="password"
        label="Пароль"
        value={password}
        onChange={changePassword}
        margin="normal"
        required
      />
      <div className={classes.btns}>
        <Button disabled={signupState.load} onClick={back}>Назад</Button>
        <Button 
          disabled={signupState.load || (firstName && secondName && phoneNumber && email && password) ? false : true} 
          onClick={sign}
          className={classes.btn}
          variant="contained" 
          color="primary"
        >
          Створити
          </Button>
      </div>
      
    </div>
  )
}
export default Signup