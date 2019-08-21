import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import CompareMob from './ComapareMob'

const styles = theme => ({
  root: {
    //width: '100%',
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
  table: {
    minWidth: 500,
  },
  cell: {
    whiteSpace: 'pre-line',
    width: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  tabs: {
    width: 320,
  },
});

let rows = []
let rows2 = []
const generate = (specs, products) => {
  rows = []
  rows2 = []
  specs.map(spec => {
    let row = []
    row.push(spec.name)

    products.map(product => {
      return product.specs.map(specProd => {
        return specProd.type === spec.type ? row.push(specProd.spec) : null
      })
    })

    rows.push(row)

    function check(e, i, arr) {
      if(e === arr[0]) {
        return true
      }
      return e === arr[1]
    }
    return row.every(check) ? null : rows2.push(row)
  })
}

function Compare({classes, compare}) {
  generate(compare.specs, compare.products)
  // const [ value, setValue ] = React.useState(0)
  // const handleChange = (event, newValue) => setValue(newValue)

  return (
    <Paper className={classes.root}>
      <CompareMob compare={compare}/>
    </Paper>
  );
}

Compare.propTypes = {
  classes: PropTypes.object.isRequired,
  compare: PropTypes.object.isRequired,
};

export default withStyles(styles)(Compare);

