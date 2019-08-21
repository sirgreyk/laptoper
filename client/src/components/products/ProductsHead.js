import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  sortLine: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
  },
  title: {
    alignSelf: "end",
  },
  actions:{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  switch: {
    alignSelf: "end",
    justifySelf: "end"
  },
  selectSort: {
    margin: theme.spacing(1),
    width: 160,
  },
}))

const ProductsHead = ({ view, setView}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState('rate')

  const closeDialog = () => {
    setOpen(false)
  }
  const openDialog = () => {
      setOpen(true)
  }
  const handleChange = event => {
    setSelect(event.target.value)
  }
  return (
      <div className={classes.sortLine}>
        <Typography className={classes.title} variant="h3">
          Лептопи
        </Typography>

        <div className={classes.actions}>
          <FormControl className={classes.selectSort}>
            <InputLabel htmlFor="select">Сортування</InputLabel>
            <Select
              open={open}
              onClose={closeDialog}
              onOpen={openDialog}
              value={select}
              onChange={handleChange}
              inputProps={{
                name: 'sort',
                id: 'select',
              }}
            >
              <MenuItem value="rate">за рейтингом</MenuItem>
              <MenuItem value="chip">від дешевих</MenuItem>
              <MenuItem value="expensive">від дорогих</MenuItem>
              <MenuItem value="popular">за популярністью</MenuItem>
              <MenuItem value="new">за новизною</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            className={classes.switch}
            control={
              <Switch checked={view} onChange={() => setView(!view)} />
            }
            label="Вид"
          />
        </div>
        <Divider />
      </div>
  )
}

ProductsHead.propTypes = {
  view: PropTypes.bool.isRequired,
  setView: PropTypes.func.isRequired,
};

export default ProductsHead