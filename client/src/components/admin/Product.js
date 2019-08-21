import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import GoodsCard from '..//cards/GoodsCard'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridGap: '8px 8px',
    paddingBottom: theme.spacing(6),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  paper: {
    display: 'grid',
    gridGap: '8px 8px',
    padding: theme.spacing(2)
  },
  input: {
    display: 'none',
  },
  image: {
    width: 260,
  },
}))

const Product = props => {
  const classes = useStyles()

  //logger >>>
  useEffect(() => console.log(ProductSpecs), [ProductSpecs])

  const [ ExistDepartment, setExistDepartment ] = useState([])
  const downloadDepartment = () => {
    fetch('http://localhost:3000/api/laptoper/department_get', {
      method: 'POST',
    })
    .then(data => data.json())
    .then(json => setExistDepartment(json))
    .catch(err => console.log(err)) 
  }
  useEffect(() => downloadDepartment(), [])

  const [ Department, setDepartment ] = useState("")
  const handleDepartment = e => setDepartment(e.target.value)

  const [ targetDepartment, setTargetDepartment ] = useState(null) 
  useEffect(() => {
    if(ExistDepartment && Department) {
      const targetDep = ExistDepartment.find(e => e.name === Department)
      setTargetDepartment(targetDep)
    }
  }, [ExistDepartment , Department])

  const [ Catagory, setCatagory ] = useState("")
  const handleCatagory = e => setCatagory(e.target.value)

  const [ Specs, setSpecs ] = useState(null)
  const downloadSpecs = catagory => {
    fetch('http://localhost:3000/api/laptoper/specs_get', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({
        catagory,
      })
    })
    .then(data => data.json())
    .then(json => setSpecs(json))
    .catch(err => console.log(err)) 
  }
  useEffect(() => downloadSpecs(Catagory), [Catagory])

  const [ imgs, setImgs ] = useState({
    src: [],
    files: []
  })
  const handleImgs = e => {
    let newImgsFiles = []
    let newImgsSrc = []
    Object.keys(e.target.files).map(key => {
      newImgsSrc.push(URL.createObjectURL(e.target.files[key]))
      newImgsFiles.push(e.target.files[key])
    })
    console.log(newImgsFiles)
    setImgs({ files: [ ...imgs.files, ...newImgsFiles ], src: [ ...imgs.src, ...newImgsSrc ] })
  }

  // const [ img, setImg ] = useState({ src: null, file: null})
  // const handleImg = e => e.target.files[0] ? setImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]}) : null

  const [ name, setName ] = useState("")
  const handleName = e => setName(e.target.value)

  const [ ShortSpecs, setShortSpecs ] = useState("")
  const handleShortSpecs = e => setShortSpecs(e.target.value)

  const [ Description, setDescription] = useState("")
  const handleDescription = e => setDescription(e.target.value)

  const [ Price, setPrice] = useState("")
  const handlePrice = e => {
    if (/^-?\d*[.,]?\d{0,2}$/.test(e.target.value)) {
      setPrice(e.target.value)
    }
  }


  const [ SpecType, setSpecType ] = useState("")
  const handleSpecType = e => setSpecType(e.target.value)
  useEffect(() => {
    if(SpecType && Specs) {
      const findSpec = Specs.specs.find(e => e.specType === SpecType)
      setSpec(findSpec)
    }
  }, [SpecType , Specs])

  const [ Spec, setSpec ] = useState("")
  const handleSpec = e => setSpec(e.target.value)

  const [ SpecVariant, setSpecVariant ] = useState("")
  const handleSpecVariant = e => setSpecVariant(e.target.value)

  const [ ProductSpecs, setProductSpecs ] = useState([])
  const addProductSpecs = () => {setProductSpecs([...ProductSpecs, {
    specType: Spec.specType,
    name: Spec.name,
    variant: SpecVariant
  }])
  console.log(ProductSpecs)
  }

  const uploadProduct = () => {
    const formData = new FormData()
    for (var i = 0; i < imgs.files.length; i++) {
      formData.append('imgs', imgs.files[i]);
    }
    formData.append('department', Department)
    formData.append('catagory', Catagory)
    formData.append('name', name)
    formData.append('shortSpecs', ShortSpecs)
    formData.append('description', Description)
    formData.append('price', Price)
    //formData.append('specs', ProductSpecs)
    for (var i = 0; i < ProductSpecs.length; i++) {
      formData.append('specs', ProductSpecs[i]);
    }

    fetch('http://localhost:3000/api/product/product_new', {
        method: 'POST',
        body: formData
      })
      .then(data => data.json())
      .then(json => {console.log(json); setAnswerFromAPI(json)})
      .catch(err => console.log(err)) 
  }

  const [ AnswerFromAPI, setAnswerFromAPI] = useState(null)

  return (
    <div className={classes.root}>
      <h1>Product</h1>

      <Paper className={classes.paper}>
        <h1>Department && Catagory</h1>
        <FormControl >
          <InputLabel htmlFor="Department">Department</InputLabel>
          <Select
            value={Department}
            onChange={handleDepartment}
            inputProps={{
              name: 'Department',
              id: 'Department',
            }}
          >
            {ExistDepartment && ExistDepartment.map((dep, key) => (
              <MenuItem key={key} value={dep.name} >{dep.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel htmlFor="Catagory">Catagory</InputLabel>
          <Select
            value={Catagory}
            onChange={handleCatagory}
            inputProps={{
              name: 'Catagory',
              id: 'Catagory',
            }}
          >
            {targetDepartment && targetDepartment.catagorys.map((cat, key) => (
              <MenuItem key={key} value={cat.name} >{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>

      <Paper className={classes.paper}>
        {imgs.src[0] ? 
          <>
            <p>Images:</p>
            {imgs.src.map((src, i) => (
              <div key={i}>
                <img className={classes.image} src={src} />
              </div>
            ))}
          </>
          :
          <p>You need select Main images fo product</p>
        }
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          id="imgs"
          multiple
          onChange={handleImgs}
        />
        <label htmlFor="imgs">
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
          placeholder="Name"
          onChange={handleName}
        />

        <TextField
          label="ShortSpecs"
          value={ShortSpecs}
          placeholder="handleShortSpecs"
          onChange={handleShortSpecs}
          multiline
          rows="2"
          rowsMax="6"
        />

        <TextField
          label="Description"
          value={Description}
          placeholder="handleDescription"
          onChange={handleDescription}
          multiline
          rows="4"
          rowsMax="16"
        />

        <TextField
          label="Price"
          value={Price}
          placeholder="handlePrice"
          onChange={handlePrice}
        />
      </Paper>  
      
      <Paper className={classes.paper}>
        <h3>Specs:</h3>
        <FormControl >
          <InputLabel htmlFor="SpecType">SpecType</InputLabel>
          <Select
            value={SpecType}
            onChange={handleSpecType}
            inputProps={{
              name: 'SpecType',
              id: 'SpecType',
            }}
          >
            {Specs && Specs.specs.map((spec, key) => (
              <MenuItem key={key} value={spec.specType} >{spec.name} / {spec.specType}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl >
          <InputLabel htmlFor="SpecVariant">SpecVariant</InputLabel>
          <Select
            value={SpecVariant}
            onChange={handleSpecVariant}
            inputProps={{
              name: 'SpecVariant',
              id: 'SpecVariant',
            }}
          >
            {Spec && Spec.variants.map((v, i) => (
              <MenuItem key={i} value={v} >{v}</MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Button 
          size="small"
          component="span" 
          variant="outlined"
          aria-haspopup="true"
          onClick={addProductSpecs}
        >
          ADD PRODUCT SPEC
        </Button>  
        
        <h4>product specs:</h4>
        {ProductSpecs && ProductSpecs.map((spec,i) => (
          <div key={i}>{i}) specType: {spec.specType}, name: {spec.name},  variant: {spec.variant}.</div>
        ))}
      </Paper>  

      
      <Button 
        size="small"
        component="span" 
        variant="outlined"
        aria-haspopup="true"
        onClick={uploadProduct}
      >
        UPLOAD PRODUC
      </Button>   

      <h4>AnswerFromAPI</h4>
      { AnswerFromAPI && <GoodsCard product={AnswerFromAPI} /> }
      <h4>product specs:</h4>
        {AnswerFromAPI && AnswerFromAPI.specs.map((spec,i) => (
          <div key={i}>{i}) specType: {spec.specType}, name: {spec.name},  variant: {spec.variant}.</div>
        ))}
    </div>

  )
}

Product.propTypes = {

};

export default Product