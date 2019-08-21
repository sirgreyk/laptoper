import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    //overflowX: 'auto',
  },
  textBlock: {
    padding: theme.spacing(1)
  },
  title: {
    padding: theme.spacing(2)
  },
  cell: {
    whiteSpace: 'pre-line',
  },
}))

const TechSpec = (props) => {
  const classes = useStyles()

  const { techSpec, name} = props
  
  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h6">
          Характеристики {name}
        </Typography>
      </div>
      <Table>
        <TableBody>
          {techSpec.map((tech, index) => (
            <TableRow key={index}>
              <TableCell component="th" variant="head" className={classes.cell}>
                {tech.name}
              </TableCell>
              <TableCell className={classes.cell} >{tech.spec}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

TechSpec.propTypes = {
  techSpec: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechSpec