import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

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
  addVar: {
    display: 'grid',
    gridGap: '8px 8px',
  },
  variants: {
    display: 'flex',
    flexWrap: "wrap"
  },
  variant: {
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}))

const Department = (props) => {
  const classes = useStyles()

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
//department
  const [ DepartmentImg, setDepartmentImg ] = useState({ src: null, file: null})
  const addDepartmentImg = e => e.target.files[0] ? setDepartmentImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]}) : null

  const [ DepartmentName, setDepartmentName ] = useState("")
  const addDepartmentName = e => setDepartmentName(e.target.value)
  
  const uploadDepartment = () => {
    const formData = new FormData()
    formData.append('img', DepartmentImg.file)
    formData.append('name', DepartmentName)
    fetch('http://localhost:3000/api/laptoper/department_add', {
        method: 'POST',
        body: formData
      })
      .then(data => data.json())
      .then(json => console.log(json))
      .catch(err => console.log(err)) 
  }
//catagory
  const [ CatagoryImg, setCatagoryImg ] = useState({ src: null, file: null})
  const addCatagoryImg = e => e.target.files[0] ? setCatagoryImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]}) : null

  const [ CatagoryName, setCatagoryName ] = useState("")
  const addCatagoryName = e => setCatagoryName(e.target.value)

  const [ CatagoryDepartment, setCatagoryDepartment ] = useState("")
  const chooseCatagoryDepartment = e => setCatagoryDepartment(e.target.value)
  
  const uploadCatagory = () => {
    const formData = new FormData()
    formData.append('img', CatagoryImg.file)
    formData.append('name', CatagoryName)
    formData.append('departmentName', CatagoryDepartment)
    fetch('http://localhost:3000/api/laptoper/catagory_add', {
        method: 'POST',
        body: formData
      })
      .then(data => data.json())
      .then(json => console.log(json))
      .catch(err => console.log(err)) 
  }
//designed
  const [ DesignedName, setDesignedName ] = useState("")
  const addDesignedName = e => setDesignedName(e.target.value)

  const [ DesignedImg, setDesignedImg ] = useState({ src: null, file: null})
  const addDesignedImg = e => e.target.files[0] ? setDesignedImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]}) : null
  
  const [ DesignedDepartment, setDesignedDepartment ] = useState("")
  const chooseDesignedDepartment = e => setDesignedDepartment(e.target.value)
  const [ DesignedCatagory, setDesignedCatagory ] = useState("")
  const chooseDesignedCatagory = e => setDesignedCatagory(e.target.value)

  const [ DepartmentForDesigned, setDepartmentForDesigned ] = useState(null) 
  useEffect(() => {
    if(ExistDepartment && DesignedDepartment) {
      setDepartmentForDesigned(ExistDepartment.find(e => e.name === DesignedDepartment))
      console.log(DepartmentForDesigned, ExistDepartment ,DesignedDepartment)
    }
  }, [ExistDepartment, DesignedDepartment])

  const uploadDesigned = () => {
    const formData = new FormData()
    formData.append('departmentName', DesignedDepartment)
    formData.append('catagoryId', DesignedCatagory)
    formData.append('img', DesignedImg.file)
    formData.append('name', DesignedName)
    fetch('http://localhost:3000/api/laptoper/catagory_designed_add', {
      method: 'POST',
      body: formData
    })
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)) 
  }
//brands
  const [ BrandName, setBrandName ] = useState("")
  const addBrandName = e => setBrandName(e.target.value)

  const [ BrandImg, setBrandImg ] = useState({ src: null, file: null})
  const addBrandImg = e => e.target.files[0] ? setBrandImg( { src: URL.createObjectURL(e.target.files[0]), file: e.target.files[0]}) : null
  
  const [BrandDepartment, setBrandDepartment ] = useState("")
  const chooseBrandDepartment = e => setBrandDepartment(e.target.value)
  const [ BrandCatagory, setBrandCatagory ] = useState("")
  const chooseBrandCatagory = e => setBrandCatagory(e.target.value)

  const [ DepartmentForBrand, setDepartmentForBrand ] = useState(null) 
  useEffect(() => {
    if(ExistDepartment && BrandDepartment) {
      setDepartmentForBrand(ExistDepartment.find(e => e.name === BrandDepartment))
    }
  }, [ExistDepartment, BrandDepartment])

  const uploadBrand = () => {
    const formData = new FormData()
    formData.append('departmentName', BrandDepartment)
    formData.append('catagoryId', BrandCatagory)
    formData.append('img', BrandImg.file)
    formData.append('name', BrandName)
    fetch('http://localhost:3000/api/laptoper/catagory_brands_add', {
      method: 'POST',
      body: formData
    })
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)) 
  }
  //SPECS
  const [SpecsDepartment, setSpecsDepartment ] = useState("")
  const chooseSpecsDepartment = e => setSpecsDepartment(e.target.value)
  const [ SpecsCatagory, setSpecsCatagory ] = useState("")
  const chooseSpecsCatagory = e => setSpecsCatagory(e.target.value)

  const [ DepartmentForSpecs, setDepartmentForSpecs ] = useState(null) 
  useEffect(() => {
    if(ExistDepartment && SpecsDepartment) {
      setDepartmentForSpecs(ExistDepartment.find(e => e.name === SpecsDepartment))
    }
  }, [ExistDepartment, SpecsDepartment])

  const uploadSpecs = () => {
    fetch('http://localhost:3000/api/laptoper/specs_add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({
        catagory: SpecsCatagory,
      })
    })
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)) 
  }
  //SPEC
  const [ ExistSpecs, setExistSpecs ] = useState([])
  const downloadSpecs = () => {
    fetch('http://localhost:3000/api/laptoper/specs_get_all', {
      method: 'POST',
    })
    .then(data => data.json())
    .then(json => setExistSpecs(json))
    .catch(err => console.log(err)) 
  }
  useEffect(() => downloadSpecs(), [])

  const [ SpecCatagoryName, setSpecCatagoryName ] = useState("")
  const chooseSpecCatagoryName = e => setSpecCatagoryName(e.target.value)
  const [ ChoosedSpecs, setChoosedSpecs ] = useState(null) 
  useEffect(() => {
    if(ExistSpecs && SpecCatagoryName) {
      console.log(ExistSpecs)
      setChoosedSpecs(ExistSpecs.find(e => e.catagory === SpecCatagoryName))
    }
  }, [ExistSpecs, SpecCatagoryName])

  const [SpecType, setSpecType ] = useState("")
  const addSpecType = e => setSpecType(e.target.value)
  const [ SpecName, setSpecName ] = useState("")
  const addSpecName = e => setSpecName(e.target.value)


  const [ SpecVariant, setSpecVariant] = useState('')
  const handleSpecVariant = e => setSpecVariant(e.target.value)

  const [ SpecVariants, setSpecVariants] = useState([])
  const addSpecVariant = variant => {
    setSpecVariants([...SpecVariants, variant])
    setSpecVariant('')
  }
  const delSpecVariant = varForDel => setSpecVariants(SpecVariants.filter(variant => variant !== varForDel))

  const uploadSpec = () => {
    fetch('http://localhost:3000/api/laptoper/spec_add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        catagory: SpecCatagoryName,
        specType: SpecType,
        name: SpecName,
        variants: SpecVariants
      })
    })
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(err => console.log(err)) 
  }

  return (
    <div className={classes.root}>
      <h1>Add Department / Catagory / Subcatagory </h1>
      <Paper className={classes.paper}>
        <h1>Department</h1>
        {DepartmentImg.src ? 
          <>
            <p>Department Image:</p>
            <img className={classes.image} src={DepartmentImg.src} />
          </>
          :
          <p>Choose Department image</p>
        }
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          id="depimg"
          onChange={addDepartmentImg}
        />
        <label htmlFor="depimg">
          <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
          >
            add Department image
          </Button>
        </label>

        <TextField
          label="Department Name"
          value={DepartmentName}
          placeholder="Type Department name here"
          onChange={addDepartmentName}
        />

        <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
            onClick={uploadDepartment}
          >
            add Department
          </Button>
      </Paper>


      <Paper className={classes.paper}>
        <h1>Catagory</h1>
        <FormControl >
          <InputLabel htmlFor="catagory-department">catagory-department</InputLabel>
          <Select
            value={CatagoryDepartment}
            onChange={chooseCatagoryDepartment}
            inputProps={{
              name: 'catagory-department',
              id: 'catagory-department',
            }}
          >
            {ExistDepartment.map((dep, key) => (
              <MenuItem key={key} value={dep.name} >{dep.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {CatagoryImg.src ? 
          <>
            <p>Catagory Image:</p>
            <img className={classes.image} src={CatagoryImg.src} />
          </>
          :
          <p>Choose Catagory image</p>
        }
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          id="catimg"
          onChange={addCatagoryImg}
        />
        <label htmlFor="catimg">
          <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
          >
            add Catagory image
          </Button>
        </label>

        <TextField
          label="Catagory Name"
          value={CatagoryName}
          placeholder="Type Catagory name here"
          onChange={addCatagoryName}
        />

        <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
            onClick={uploadCatagory}
          >
            add Catagory
          </Button>
      </Paper>


      <Paper className={classes.paper}>
        <h1>Designed</h1>
        <FormControl >
          <InputLabel htmlFor="department-for-designed">department-for-designed</InputLabel>
          <Select
            value={DesignedDepartment}
            onChange={chooseDesignedDepartment}
            inputProps={{
              name: 'department-for-designed',
              id: 'department-for-designed',
            }}
          >
            {ExistDepartment.map((dep, key) => (
              <MenuItem key={key} value={dep.name} >{dep.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl >
          <InputLabel htmlFor="DesignedCatagory">DesignedCatagory</InputLabel>
          <Select
            value={DesignedCatagory}
            onChange={chooseDesignedCatagory}
            inputProps={{
              name: 'DesignedCatagory',
              id: 'DesignedCatagory',
            }}
          >
            {DepartmentForDesigned &&  DepartmentForDesigned.catagorys.map((cat, key) => (
              <MenuItem key={key} value={cat._id} >{cat.name + 'ID'}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {DesignedImg.src ? 
          <>
            <p>Designed Image:</p>
            <img className={classes.image} src={DesignedImg.src} />
          </>
          :
          <p>Choose Designed image</p>
        }
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          id="Designedimg"
          onChange={addDesignedImg}
        />
        <label htmlFor="Designedimg">
          <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
          >
            add Designed image
          </Button>
        </label>

        <TextField
          label="Designed Name"
          value={DesignedName}
          placeholder="Type Designed name here"
          onChange={addDesignedName}
        />

        <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
            onClick={uploadDesigned}
          >
            add Designed
          </Button>
      </Paper>

      <Paper className={classes.paper}>
        <h1>Brand</h1>
        <FormControl >
          <InputLabel htmlFor="department-for-Brand">department-for-Brand</InputLabel>
          <Select
            value={BrandDepartment}
            onChange={chooseBrandDepartment}
            inputProps={{
              name: 'department-for-Brand',
              id: 'department-for-Brand',
            }}
          >
            {ExistDepartment.map((dep, key) => (
              <MenuItem key={key} value={dep.name} >{dep.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl >
          <InputLabel htmlFor="BrandCatagory">BrandCatagory</InputLabel>
          <Select
            value={BrandCatagory}
            onChange={chooseBrandCatagory}
            inputProps={{
              name: 'BrandCatagory',
              id: 'BrandCatagory',
            }}
          >
            {DepartmentForBrand &&  DepartmentForBrand.catagorys.map((cat, key) => (
              <MenuItem key={key} value={cat._id} >{cat.name + 'ID'}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {BrandImg.src ? 
          <>
            <p>Brand Image:</p>
            <img className={classes.image} src={BrandImg.src} />
          </>
          :
          <p>Choose Brand image</p>
        }
        <input
          type="file"
          accept="image/*"
          className={classes.input}
          id="Brandimg"
          onChange={addBrandImg}
        />
        <label htmlFor="Brandimg">
          <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
          >
            addBrand image
          </Button>
        </label>

        <TextField
          label="Brand Name"
          value={BrandName}
          placeholder="Type Brand name here"
          onChange={addBrandName}
        />

        <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
            onClick={uploadBrand}
          >
            add Brand
          </Button>
      </Paper>

      <Paper className={classes.paper}>
        <h1>SPECS</h1>
        <FormControl >
          <InputLabel htmlFor="department-for-Specs">department-for-Specs</InputLabel>
          <Select
            value={SpecsDepartment}
            onChange={chooseSpecsDepartment}
            inputProps={{
              name: 'department-for-Specs',
              id: 'department-for-Specs',
            }}
          >
            {ExistDepartment.map((dep, key) => (
              <MenuItem key={key} value={dep.name} >{dep.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl >
          <InputLabel htmlFor="SpecsCatagory">SpecsCatagory</InputLabel>
          <Select
            value={SpecsCatagory}
            onChange={chooseSpecsCatagory}
            inputProps={{
              name: 'SpecsCatagory',
              id: 'SpecsCatagory',
            }}
          >
            {DepartmentForSpecs &&  DepartmentForSpecs.catagorys.map((cat, key) => (
              <MenuItem key={key} value={cat.name} >{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button 
            size="small"
            component="span" 
            variant="outlined"
            aria-haspopup="true"
            onClick={uploadSpecs}
          >
            add SPECS
          </Button>
      </Paper>

      <Paper className={classes.paper}>
        <h1>add speC</h1>
        <FormControl >
          <InputLabel htmlFor="SpecCatagoryName">chosose spce catagory</InputLabel>
          <Select
            value={SpecCatagoryName}
            onChange={chooseSpecCatagoryName}
            inputProps={{
              name: 'SpecCatagoryName',
              id: 'SpecCatagoryName',
            }}
          >
            {ExistSpecs && ExistSpecs.map((specs, key) => (
              <MenuItem key={key} value={specs.catagory} >{specs.catagory}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <h4>Choosed Specs - </h4>
        {ChoosedSpecs && 
          <div>
            <h6>Catagory : {ChoosedSpecs.catagory}</h6>
            <h6>specs : </h6>
            {ChoosedSpecs.specs.map((spec, i) => (
              <div key={i}>
                <p>specType: {spec.specType}</p>
                <p>name: {spec.name}</p>
                <p>variants: 
                  {<div className={classes.variants}>
                    {spec.variants.map((variant, i) => (
                       <Chip
                          className={classes.variant}
                          key={i}
                          label={variant}
                        />
                    ))}
                  </div>}
                </p>
              </div>
            ))}
          </div>
        }

        <h4>Create new SpeC : </h4>
        <TextField
          label="SpecType"
          value={SpecType}
          placeholder="Type SpecType here"
          onChange={addSpecType}
        />
        <TextField
          label="SpecName"
          value={SpecName}
          placeholder="Type SpecName here"
          onChange={addSpecName}
        />

        <div className={classes.addVar}>
          <h4>new spec variants</h4>
          <TextField
            label="SpecVariant"
            value={SpecVariant}
            placeholder="Type SpecVariant here"
            onChange={handleSpecVariant}
          />
          <Button 
            size="small"
            component="span" 
            aria-haspopup="true"
            onClick={() => addSpecVariant(SpecVariant)}
          >
            add VARIANT
          </Button>
        </div>
        <div className={classes.variants}>
          {SpecVariants.map((variant, index) => (
            <Chip
              className={classes.variant}
              key={index}
              label={variant}
              onClick={() => delSpecVariant(variant)}
            />
          ))}
        </div>


        <Button 
          size="small"
          component="span" 
          variant="outlined"
          aria-haspopup="true"
          onClick={uploadSpec}
        >
          add SPECS
        </Button>
      </Paper>
    </div>

    
  )
}

Department.propTypes = {

};

export default Department