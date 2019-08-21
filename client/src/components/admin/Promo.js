import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';

import DateFnsUtils from "@date-io/date-fns"
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

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
  types: {
    display: 'flex',
    flexWrap: "wrap"
  },
  type: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

const Promo = (props) => {
  const classes = useStyles()

  const base64String = buffer => {
    let binary = '';
    let bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }


  const [ types, setTypes ] = useState({
    share: false,
    discount: false,
    gift: false,
    pre_oreder: false,
  })
  const changeTypes = key => setTypes({
      ...types,
      [key]: !types[key]
  })

  const [ img, setImg ] = useState({ src: null, file: null})
  const addImg = e => e.target.files[0] ? setImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]}) : null

  const [ name, setName ] = useState("")
  const addName = e => setName(e.target.value)

  const [ condition, setCondition ] = useState("")
  const addCondition = e => setCondition(e.target.value)

  const [ description, setDescription] = useState("")
  const addDescription = e => setDescription(e.target.value)

  const [ start, setStart ] = useState(Date.now())
  const addStart = date => {console.log(date.toDateString());setStart(new Date(date))}

  const [ end, setEnd ] = useState(Date.now())
  const addEnd = date => setEnd(new Date(date))

  const [ active, setActive ] = useState(false)
  
  const [ answer, setAnswer ] = useState({
      types: {
        share: false,
        discount: false,
        gift: false,
        pre_oreder: false,
      },
      img: null,
      name: null,
      condition: null,
      description: null,
      start: null,
      end: null,
      active: null
  })

  const clear = () => {
    setImg({ src: null, file: null})
    setName("")
    setCondition("")
    setStart(null)
    setStart(null)
    setActive(null)
  }

  const upload = () => {
    const formData = new FormData()
    formData.append('img', img.file)
    formData.append('share', types.share)
    formData.append('discount', types.discount)
    formData.append('gift', types.gift)
    formData.append('pre_order', types.pre_order)
    formData.append('name', name)
    formData.append('condition', condition)
    formData.append('description', description)
    formData.append('start', start)
    formData.append('end', end)
    formData.append('active', active)
    fetch('http://localhost:5000/api/laptoper/promo_add', {
        method: 'POST',
        body: formData
      })
      .then(data => data.json())
      .then(json => {
        console.log(json)
        setAnswer({
          img: base64String(json.img.data),
          types: {
            ...json.types
          },
          name: json.name,
          condition: json.condition,
          description: json.description,
          start: json.start,
          end: json.end,
          active: json.active,
        })
      })
      .catch(err => console.log(err)) 
  }

  return (
    <div className={classes.root}>
      <h1>Add Promo</h1>

      <div className={classes.types}>
        {Object.keys(types).map((key, index) => (
          <Chip
            className={classes.type}
            key={index}
            label={key}
            onClick={() => changeTypes(key)}
            color={types[key] ? "secondary" : "default"}
          />
        ))}
      </div>

      {img.src ? 
        <>
          <p>Image:</p>
          <img className={classes.image} src={img.src} />
        </>
        :
        <p>Choose image</p>
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
          add image
        </Button>
      </label>

      <TextField
        label="Name"
        value={name}
        placeholder="Type name here"
        onChange={addName}
        multiline
        rows="2"
        rowsMax="4"
      />

      <TextField
        label="Condition"
        value={condition}
        placeholder="Type condition here"
        onChange={addCondition}
        multiline
        rows="2"
        rowsMax="6"
      />

      <TextField
        label="Description"
        value={description}
        placeholder="Type description here"
        onChange={addDescription}
        multiline
        rows="4"
        rowsMax="20"
      />
      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker 
          value={start} 
          onChange={addStart} 
          margin="normal"
          id="start"
          label="Event START at"
        />
        <DateTimePicker 
          value={end} 
          onChange={addEnd} 
          margin="normal"
          id="end"
          label="Event END at"
        />
      </MuiPickersUtilsProvider>

      <FormControlLabel
        control={
          <Switch checked={active} onChange={() => setActive(!active)} />
        }
        label="Activate Event?"
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
      <div>Image:</div>{answer.img ? <img className={classes.image} src={answer.img} /> : <p>---</p>}
      <div>Types:</div>
      {answer.types ? 
        <div className={classes.types}>
          {Object.keys(types).map((key, index) => (
            answer.types[key] ? 
              <Chip
                className={classes.type}
                key={index}
                label={key}
                color={answer.types[key] ? "secondary" : "default"}
              />
            : null
          ))}
        </div>  
      : <p>---</p>}
      <div>Name:</div>{answer.name ? <h4>{answer.name}</h4> : <h4>---</h4>}
      <div>Condition:</div>{answer.condition ? <p>{answer.condition}</p> : <p>---</p>}
      <div>Description:</div>{answer.description ? <p>{answer.description}</p> : <p>---</p>}
      <div>Start:</div>{answer.start ? <p>{answer.start}</p> : <p>---</p>}
      <div>End:</div>{answer.end ? <p>{answer.end}</p> : <p>---</p>}
      <div>Active:</div>{answer.active !== null ? <p>{answer.active === true ? 'true' : 'false'}</p> : <p>---</p>}
    </div>

  )
}

Promo.propTypes = {

};

export default Promo