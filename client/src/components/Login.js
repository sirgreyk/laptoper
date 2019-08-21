import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
  root: {
    display: 'grid',
    padding: 8,
  },
}))

const Login = ({ login, history }) => {
  const classes = useStyles()

  const [ email, setEmail ] = useState('')
  const changeEmail = e => setEmail(e.target.value)

  const [ password, setPassword ] = useState('')
  const changePassword = e => setPassword(e.target.value)
  const log = () => {
    login(email, password)
    history.push('/')
  }

  return (      
    <div className={classes.root}>
       <TextField
        id="email"
        label="Email"
        value={email}
        onChange={changeEmail}
        margin="normal"
      />

      <TextField
        id="password"
        label="Password"
        value={password}
        onChange={changePassword}
        margin="normal"
      />
      <Button onClick={log} >LOGIN</Button>
    </div>
  )
}
export default Login


