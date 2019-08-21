import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(1),

  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px 16px',
  },
  cardHeaderRoot: {
    paddingRight: theme.spacing(6),
  },
  cardWrapper: {
    position: 'relative',
    display: 'grid',
  },
  check: {
    position: "absolute",
    zIndex: 5,
    alignSelf: "start",
    justifySelf: "end",
    padding: theme.spacing(1),
  },
  imgs: {
    display: 'flex',
    overflowX: 'hidden'
  },
  imgContainer: {
    margin: theme.spacing(1),
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  img: {
    height: 50,
    position: 'relative',
  },
}))

const Lists = ({ user, history, selectList }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState({});
  const openMenu = (e, id) => setAnchorEl({ ...anchorEl, [id]: e.currentTarget })
  const closeMenu = id => setAnchorEl({ ...anchorEl, [id]: null })

  const [open1, setOpen1] = useState(false)
  const openDialog1 = () => setOpen1(true)
  const closeDialog1 = () => setOpen1(false)

  const [open2, setOpen2] = useState(false)
  const openDialog2 = id => {
    closeMenu(id)
    setOpen2(true)
  }
  const closeDialog2 = () => setOpen2(false)

  const [open3, setOpen3] = useState(false)
  const openDialog3 = id => {
    closeMenu(id)
    setOpen3(true)
  }
  const closeDialog3 = () => setOpen3(false)

  const [listName, setListName] = useState('')
  const handleChange1 = event => setListName(event.target.value)

  const [newListName, setNewListName] = useState('')
  const handleChange2 = event => setNewListName(event.target.value)

  const goToList = list => {
    selectList(list)
    history.push('/list')
  }

  return (
    <>
    {user.loading && <Spinner/>}
    {user.fail && <Fail history={history} />}
    {!user.loading && !user.fail && user.json &&
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6">Списки бажань</Typography>
        <Button onClick={openDialog1}>новий</Button>
      </div>
      <div className={classes.grid}>
        {user.json.lists.map((list, index) => (
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
            <Card key={index} className={classes.list}>
              <CardActionArea onClick={() => goToList(list)}>
                <CardHeader 
                  title={list.name} 
                  subheader={`Кількість товарів ${list.products.length}`}
                  classes={{root: classes.cardHeaderRoot}}
                />
                <CardContent >
                  <div className={classes.imgs}>
                  {list.products.map((product, i) => (
                    i !== 3 ?
                      <div key={i} className={classes.imgContainer}>
                        <img src={`http://localhost:3000/img/${product.img}`} alt={i} className={classes.img}/>
                      </div>
                    : null
                  ))}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>

            <Menu id="menu" anchorEl={anchorEl[index]} open={Boolean(anchorEl[index])} onClose={() => closeMenu(index)}>
              <MenuItem onClick={() => openDialog2(index)}>Редагувати</MenuItem>
              <MenuItem onClick={() => openDialog3(index)}>Видалити</MenuItem>
            </Menu>

            <Dialog
              fullWidth
              open={open1}
              onClose={closeDialog1}
              aria-labelledby="alert-dialog-title1"
              aria-describedby="alert-dialog-description1"
            >
              <DialogTitle id="alert-dialog-title1">{"Напишіть назву"}</DialogTitle>
              <DialogContent>
                <TextField
                  id="list name"
                  label="Назва"
                  value={listName}
                  onChange={handleChange1}
                  margin="normal"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog1} color="primary">Відміна</Button>
                <Button onClick={closeDialog1} color="primary" disabled={listName?false:true}>ок</Button>
              </DialogActions>
            </Dialog> 

            <Dialog
              fullWidth
              open={open2}
              onClose={closeDialog2}
              aria-labelledby="alert-dialog-title2"
              aria-describedby="alert-dialog-description2"
            >
              <DialogTitle id="alert-dialog-title2">{"Напишіть нову назву"}</DialogTitle>
              <DialogContent>
                <TextField
                  id="new list name"
                  label="Нова назва"
                  value={newListName}
                  onChange={handleChange2}
                  margin="normal"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog2} color="primary">Відміна</Button>
                <Button onClick={closeDialog2} color="primary" disabled={newListName?false:true}>ок</Button>
              </DialogActions>
            </Dialog> 

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
        ))}
      </div>
    </div>
    }
    </>
  )
}

Lists.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Lists