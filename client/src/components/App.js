import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
//import ScrollToTop from "./ScrollToTop"
import ProductBar from "./bars/ProductBar"

//import Footer from "./Footer"
import CMain from "../conteiners/main/CMain"
import Products from "./products/Products"
import CBar from "../conteiners/bars/CBar"
import CMobBotBar from "../conteiners/bars/CMobBotBar"
import CCart from "../conteiners/user/CCart"
import CProduct from "../conteiners/product/CProduct"
import CCatalog from "../conteiners/catalog/CCatalog"
import CDeaprtmnet from "../conteiners/catalog/CDepartment"
import CCatagory from "../conteiners/catalog/CCatagory"
import CPromo from "../conteiners/more/CPromo"
import CPromos from "../conteiners/more/CPromos"
import CBlog from "../conteiners/more/CBlog"
import CPost from "../conteiners/more/CPost"

import CList from "../conteiners/user/CList"
import CCompareMob from "../conteiners/user/CCompare"
import CProfileEdit from "../conteiners/user/CProfileEdit"
import CHistory from "../conteiners/user/CHistory"
import COrders from "../conteiners/user/COrders"
import CLists from "../conteiners/user/CLists"
import CProfile from "../conteiners/user/CProfile"

import Info from "./product/Info"
import Contacts from "./Contacts"
import CLogin from "../conteiners/CLogin"
import CSignup from "../conteiners/CSignup"

import { getCookie } from './../utils/getCookie';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import "./App.css"
//experementall
import Admin from "./admin/Admin";
//experementall
const theme = createMuiTheme({
  palette: {
    primary: {
      light:"rgba(74, 101, 114, 1)",
      main:"rgba(52, 73, 85, 1)",
      dark:"rgba(35, 47, 52, 1)",
      contrastText:"#fff"
    },
    secondary: {
      light:"rgba(255, 220, 101, 1)",
      main:"rgba(249, 170, 51, 1)",
      dark:"rgba(193, 123, 0, 1)",
      contrastText:"rgba(0, 0, 0, 1)"
    },
  },
  typography: {
    useNextVariants: true,
  },
})
const useStyles = makeStyles(theme =>({
  root: {
    paddingBottom: theme.spacing(10),
  },
}))

const App = ({ user, getUser }) => {

  useEffect(() => getCookie("token") ? getUser() : null, [getUser, getCookie])

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          user.json || user.loading ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  
  const classes = useStyles()

  return (      
    <Router>
      <MuiThemeProvider theme={theme}> 
      <div className={classes.root}>
        <CBar/>
        <CMobBotBar />
        <CCart />

        {user.json && <CProfileEdit />}

        <Switch>

            <Route path="/admin" component={Admin} />

          <Route exact path="/" component={CMain} />
          <Route path="/catalog" component={CCatalog} />
          <Route path="/department/*" component={CDeaprtmnet} />
          <Route path="/catagory/*" component={CCatagory} />
          
          <Route path="/promos" component={CPromos} />
          <Route path="/promo/*" component={CPromo} />
          <Route path="/blog" component={CBlog} />
          <Route path="/post" component={CPost} />

          <Route path="/products" component={Products} />
          <Route path="/product" component={CProduct} />
          <Route path="/product" component={ProductBar} />

          <Route path="/contacts" component={Contacts} />
          <Route path="/info" component={Info} />

          <Route path="/login" component={CLogin} />
          <Route path="/signup" component={CSignup} />

          <PrivateRoute path="/profile" component={CProfile} />
          <PrivateRoute path="/lists" component={CLists} />
          <PrivateRoute path="/list" component={CList} />
          <PrivateRoute path="/compare" component={CCompareMob} />
          <PrivateRoute path="/history" component={CHistory} />
          <PrivateRoute path="/orders" component={COrders} />

        </Switch>

      </div>
      </MuiThemeProvider>
    </Router>
  )
}

export default App