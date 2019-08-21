import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import CProductsGrid from '../../conteiners/products/CProductsGrid';

const useStyles = makeStyles(theme => ({
  center: {
    maxWidth: 1920,
    margin: "0 auto",
    display: 'grid',
    justifyItems: 'center',
  },
  main: {
    padding: theme.spacing(0),
    //padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit/2}px`,
    display: "grid",
  },
  product: {
    gridArea: "product"
  },
  menu: {
    margin: "0 8px 0 0",
    display: "none",
    gridArea: "menu",
    justifyItems: "end",

    width: 300,
    height: 500,
    boxShadow: "inset 0px 0px 0px 3px red",
  },
  subMain: {
    gridArea: "submain"
  },
  block: {
    margin: "0 0 8px",
    display: "none",
    width: 300,
    height: 600,
    boxShadow: "inset 0px 0px 0px 3px green",
  },
  '@media (min-width: 1280px)': {
    main: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr",
      gridTemplateAreas: '"menu submain"',
    },
    menu: {
      display: "block",
    },
  },
  '@media (min-width: 1580px)': {
    main: {
      display: "grid",
      gridTemplateColumns: "1fr 4fr",
      gridTemplateAreas: '"menu submain"',
    },
    menu: {
      display: "block",
    },
  },
  '@media (min-width: 1900px)': {
    main: {
      display: "grid",
      gridTemplateColumns: "1fr 5fr",
      gridTemplateAreas: '"menu submain"',
    },
    menu: {
      display: "block",
    },
    block: {
      display: "block",
      gridColumnStart: 5,
      gridColumnEnd: 7,
    },
  },
}))

const Products = () => {
  const classes = useStyles()

  return (
    <div className={classes.center}>
      <div className={classes.main}>
        <div className={classes.menu}>
          ФІЛЬТРИ
        </div>
        <div className={classes.subMain}>
          <CProductsGrid />
        </div>
        <div className={classes.block}>
            ШЕ ШОСЬ 
        </div>

      </div>
    </div>
  )
}

export default Products

