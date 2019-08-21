
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Main from './Main'
import Promo from './Promo'
import Product from './Product'
import Department from './Department';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },

}))

const Admin = (props) => {
  const classes = useStyles()

  return (
    <Router>
      <div className={classes.root}>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin/main">Main</Link>
            </li>
            <li>
              <Link to="/admin/promo">Promo</Link>
            </li>
            <li>
              <Link to="/admin/department">Department</Link>
            </li>
            <li>
              <Link to="/admin/product">Product</Link>
            </li>
            <li>
              <Link to="/admin">To be</Link>
            </li>
          </ul>
        </nav>

        <Route path="/admin/main" component={Main} />
        <Route path="/admin/Promo" component={Promo} />
        <Route path="/admin/department" component={Department} />
        <Route path="/admin/Product" component={Product} />
      </div>
    </Router>

  )
}

Admin.propTypes = {

};

export default Admin