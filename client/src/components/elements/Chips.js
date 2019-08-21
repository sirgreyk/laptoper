import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  newChip: {
    background: "#43a047",
    color: "#fff",
  },
  topChip: {
    background: "#ff9800",
    color: "#fff",
  },
  superChip: {
    background: "#e91e63",
    color: "#fff",
  },
  exclusiveChip: {
    background: "#673ab7",
    color: "#fff",
  },
  actionChip: {
    background: "#f44336",
    color: "#fff",
  },
})
const Chips = (props) => {
  const classes = useStyles()

  const { type } = props

  return (
    type ?
      <Chip 
        label={
          type === 'new' ? 'Новинка'
          : type === 'top sales' ? 'Топ продажів'
          : type === 'super price' ? 'Супер ціна'
          : type === 'exclusive' ? 'Ексклюзив'
          : type === 'action' ? 'Акція'
          : null
        }
        className={
          type === 'new' ? classes.newChip
          : type === 'top sales' ? classes.topChip
          : type === 'super price' ? classes.superChip
          : type === 'exclusive' ? classes.exclusiveChip
          : type === 'action' ? classes.actionChip
          : null
        }
      />
    : null
  )
}

Chips.propTypes = {
  type: PropTypes.string,
}

export default Chips