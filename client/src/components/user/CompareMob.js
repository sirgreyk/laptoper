import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Price from '../elements/Price';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 300,
  },
  table: {
    height: 800,
    overflowX: 'auto',
    overflowY: 'auto',
  },
  head: {
    position: "sticky",
    top: 0,
    background: '#fff',
    zIndex: 1,
  },
  stickyRow: {
    position: "sticky",
    left: 0,
    
  },
  row: {
    whiteSpace: 'pre-line',
    width: 140,
    padding: theme.spacing(0.5),
  },
  cell: {
    whiteSpace: 'pre-line',
    width: 140,
    padding: theme.spacing(0.5),
  },
  headCell: {
    whiteSpace: 'pre-line',
    width: 140,
    padding: 4,
    background: '#fff',
    zIndex: theme.spacing(0.5),
  },

  media: {
    display: "grid",
    justifyItems: "center",
    alignItems: "start",
    width: "100%",
    height: 50,
  },
  img: {
    height: "100%",
    maxWidth: "100%",
  },
}))

let rows = []
let rows2 = []
const generate = (specs, products) => {
  rows = []
  rows2 = []
  specs.map(spec => {
    rows.push(spec.name)

    let row = []
    products.map(product => {
      return product.specs.map(specProd => {
        return specProd.type === spec.type ? row.push(specProd.spec) : null
      })
    })
    rows.push(row)

    function check(e, index, arr) {
      return e === arr[1]
    }

    return row.every(check) ? null : rows2.push(spec.name) && rows2.push(row)

  })
}

function Compare({ compare }) {
  const classes = useStyles()

  generate(compare.specs, compare.products)
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => setValue(newValue)
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Все" />
        <Tab label="Відміності" />
      </Tabs>
      <div className={classes.table}>
        <TableHead component="div">
          <TableRow component="div">
            {compare.products.map((product, i) => (
              <TableCell padding="checkbox" component="div" key={i} >
                <div className={classes.headCell}>
                  <div className={classes.media}>
                    <img className={classes.img} src={`http://localhost:3000/img/${product.img}`} alt={i}/>
                  </div>
                  <Price price={product.price}/>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <div className={classes.head}>
          <TableHead component="div">
            <TableRow component="div">
              {compare.products.map((product, i) => (
                <TableCell padding="checkbox" component="div" key={i} >
                  <div className={classes.headCell}>{product.name}</div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </div>

        {value === 0 &&
          rows.map((row, i) => (
            i % 2 === 0 ?
              <div className={classes.stickyRow} key={i}>
                <TableRow hover component="div">
                  <TableCell variant="head" component="div">
                    <div className={classes.row}>{row}</div>
                  </TableCell>
                </TableRow>
              </div>
              :
              <TableRow key={i} hover component="div">
                {row.map((str, i) => (
                  <TableCell key={i} variant="body" component="div" padding="checkbox"  >
                    <div className={classes.cell}>{str}</div>
                  </TableCell>
                ))}
              </TableRow>
          ))
        }
        {value === 1 &&
          rows2.map((row, i) => (
            i % 2 === 0 ?
              <div className={classes.stickyRow} key={i}>
                <TableRow hover component="div">
                  <TableCell variant="head" component="div" >
                    <div className={classes.row}>{row}</div>
                  </TableCell>
                </TableRow>
              </div>
              :
              <TableRow key={i} hover component="div">
                {row.map((str, i) => (
                  <TableCell key={i} variant="body" component="div" padding="checkbox" >
                    <div className={classes.cell}>{str}</div>
                  </TableCell>
                ))}
              </TableRow>
          ))
        }
    </div>

   </div>
  );
}

Compare.propTypes = {
  compare: PropTypes.object.isRequired,
};

export default Compare