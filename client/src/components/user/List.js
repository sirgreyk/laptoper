import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';

import GoodsCard from '../cards/GoodsCard';

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '8px 16px',
    margin: '0 auto',
    padding: `0 ${theme.spacing(1)}px `,
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: "1fr",
    gridGap: "16px",
  },
  cardWrapper: {
    width: 288,
    position: 'relative',
    display: 'grid',
  },
  check: {
    position: "absolute",
    zIndex: 5,
    alignSelf: "start",
    justifySelf: "end",
  },
  formControl: {
    width: 176,
  },
}))

const List = ({ userList, user, history, handleReview, getUserList }) => {
  const classes = useStyles()

  useEffect(() => getUserList(userList.selectedList.products), [getUserList])

  const [anchorEl, setAnchorEl] = useState({});
  const openMenu = (e, id) => setAnchorEl({ ...anchorEl, [id]: e.currentTarget })
  const closeMenu = id => setAnchorEl({ ...anchorEl, [id]: null })

  const [open1, setOpen1] = useState({})
  const openDialog1 = id => {
    closeMenu(id)
    setOpen1({ ...open1, [id]: true })
  }
  const closeDialog1 = id => setOpen1({ ...open1, [id]: false })

  const [open2, setOpen2] = useState({})
  const openDialog2 = id => {
    closeMenu(id)
    setOpen2({ ...open2, [id]: true })
  }
  const closeDialog2 = id => setOpen2({ ...open2, [id]: false })

  const [open3, setOpen3] = useState(false)
  const openDialog3 = () => setOpen3(true)
  const closeDialog3 = () => setOpen3(false)


  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const [select, setSelect] = useState(userList.id)
  const handleChange = event => setSelect(event.target.value)



  return (
      <>
      {userList.loading && <Spinner/>}
      {userList.fail && <Fail loadFunc={() => getUserList(userList.selectedList.products)} />}
      {!userList.loading && !userList.fail && userList.json &&
      <div className={classes.list}>
        <div className={classes.header}>
          <Typography variant="h6">{userList.name}</Typography>
          <IconButton onClick={openDialog3}><DeleteIcon /></IconButton>
          <Dialog
            fullWidth
            open={open3}
            onClose={closeDialog3}
            aria-labelledby="alert-dialog-title3"
            aria-describedby="alert-dialog-description3"
          >
            <DialogTitle id="alert-dialog-title3">{"Видалити список?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description3">Видалені списки відновити неможливо!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog3} color="primary">Відміна</Button>
              <Button onClick={closeDialog3} color="primary">ок</Button>
            </DialogActions>
          </Dialog> 
        </div>
        <div className={classes.cardGrid}>
          {userList.json.products.map((product, index) => (
            <div className={classes.cardWrapper} key={index}>
              <div className={classes.check}>
                <IconButton
                  aria-owns={anchorEl[index] ? 'menu' : undefined}
                  aria-haspopup="true"
                  onClick={(e) => openMenu(e, index)}
                >
                  <MoreVertIcon />
                </IconButton> 
              </div>
              <GoodsCard product={product} history={history} handleReview={handleReview}/>

              <Menu id="menu" anchorEl={anchorEl[index]} open={Boolean(anchorEl[index])} onClose={() => closeMenu(index)}>
                <MenuItem onClick={() => openDialog1(index)}>Перемістити</MenuItem>
                <MenuItem onClick={() => openDialog2(index)}>Видалити</MenuItem>
              </Menu>

              <Dialog
                fullWidth
                open={open1[index]}
                onClose={() => closeDialog1(index)}
                aria-labelledby="alert-dialog-title1"
                aria-describedby="alert-dialog-description1"
              >
                <DialogTitle id="alert-dialog-title1">{"Виберіть список"}</DialogTitle>
                <DialogContent>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">Список</InputLabel>
                    <Select
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={select}
                      onChange={handleChange}
                      inputProps={{
                        name: 'selcet',
                        id: 'demo-controlled-open-select',
                      }}
                    >
                      {user.json.lists.map((list, i) => (
                        <MenuItem key={i} value={list.id}>{list.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => closeDialog1(index)} color="primary">Відміна</Button>
                  <Button onClick={() => closeDialog1(index)} color="primary">ок</Button>
                </DialogActions>
              </Dialog> 

              <Dialog
                fullWidth
                open={open2[index]}
                onClose={() => closeDialog2(index)}
                aria-labelledby="alert-dialog-title2"
                aria-describedby="alert-dialog-description2"
              >
                <DialogTitle id="alert-dialog-title2">{"Видалити товар зі списку?"}</DialogTitle>
                <DialogActions>
                  <Button onClick={() => closeDialog2(index)} color="primary">відміна</Button>
                  <Button onClick={() => closeDialog2(index)} color="primary">ок</Button>
                </DialogActions>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
      }
      </>
  )
}

List.propTypes = {
  handleReview: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default List