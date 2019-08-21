import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';

import ControlPoint from '@material-ui/icons/ControlPoint';
import Payment from '@material-ui/icons/Payment';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import LocalShipping from '@material-ui/icons/LocalShipping';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '20%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const Contacts = (props) => {
  const classes = useStyles()

  const { info=["Доставка"] } = props

  return (
    <div className={classes.root}>
        <List>
            <ListItem>
              <ListItemIcon>
                <LocalShipping />
              </ListItemIcon>
              <ListItemText
                primary={info[0]}
                secondary='Самовивіз з Нової Пошти 60 грн Буде передано до служби доставки завтра'
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                  <InsertDriveFile />
              </ListItemIcon>
              <ListItemText
                primary="Гарантія"
                secondary='12 місяців, обмін/повернення товару впродовж 14 днів'
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                  <Payment />
              </ListItemIcon>
              <ListItemText
                primary="Оплата"
                secondary='Готівкою, Visa/MasterCard, Приват24, Кредит, Оплата частинами, Миттєва розстрочка, Безготівковим розрахунком'
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                  <ControlPoint />
              </ListItemIcon>
              <ListItemText
                primary="Бонуси"
                secondary='Зараз використання бонусів на цей товар недоступне'
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
        </List>
    </div>
  )
}

Contacts.propTypes = {
  info: PropTypes.array,
}

export default Contacts