import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Spinner from '../elements/Spinner';
import Fail from '../elements/Fail';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  profile: {
  },
  head: {
    display: 'grid',
    justifyItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    width: 70,
    height: 70,
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
  },
  stats: {
    display: 'flex',
  },
  stat: {
    padding: theme.spacing(1),
    display: 'grid',
    justifyItems: 'center',
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  line: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridGap: '12px',
    paddingBottom: theme.spacing(1),
  },


}))

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timezone: 'UTC',
}
const Profile = ({ user, handleEdit, history }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const computeHobby = () => `${user.json.about.hobby.run ? 'Біг' : ''}${user.json.about.hobby.bike ? ', ' : ''}${user.json.about.hobby.bike ? 'Велосипед' : ''}${user.json.about.hobby.handMade ? ', ' : ''}${user.json.about.hobby.handMade ? 'Hand mad' : ''}${user.json.about.hobby.music ? ', ' : ''}${user.json.about.hobby.music ? 'Музика' : ''}${user.json.about.hobby.turism ? ', ' : ''}${user.json.about.hobby.turism ? 'Туризм' : ''}${user.json.about.hobby.cyberSports ? ', ' : ''}${user.json.about.hobby.cyberSports ? 'Кібер спорт' : ''}${user.json.about.hobby.fishing ? ', ' : ''}${user.json.about.hobby.fishing ?'Рибальство' : ''}${user.json.about.hobby.hunting ? ', ' : ''}${user.json.about.hobby.hunting ? 'Полювання' : ''}${user.json.about.hobby.gardening ? ', ' : ''}${user.json.about.hobby.gardening ? 'Садівництво' : ''}${user.json.about.hobby.fitnes ? ', ' : ''}${user.json.about.hobby.fitnes ? 'Фітнес' : ''}${user.json.about.hobby.yoga ? ', ' : ''}${user.json.about.hobby.yoga ? 'Йога.' : ''}${user.json.about.hobby.yoga ? '' : '.'}`

  return (
    <>
    {user.loading && <Spinner/>}
    {user.fail && <Fail history={history} />}
    {!user.loading && !user.fail && user.json &&
    <div className={classes.root}>
      <div className={classes.head}>
        <Avatar className={classes.avatar}>
          {`${user.json.firstName.charAt(0).toUpperCase()}${user.json.secondName.charAt(0).toUpperCase()}`}
        </Avatar> 
        <Typography variant="h6">{`${user.json.firstName} ${user.json.secondName}`}</Typography>
        <Typography variant="body2">{user.json.email}</Typography>
        <div className={classes.stats}>
          <div className={classes.stat}>
            <Typography variant="subtitle2">7</Typography>
            <Typography variant="caption">Замовлень</Typography>
          </div>
          <div className={classes.stat}>
            <Typography variant="subtitle2">0</Typography>
            <Typography variant="caption">Відгуків</Typography>
          </div>
          <div className={classes.stat}>
            <Typography variant="subtitle2">4</Typography>
            <Typography variant="caption">Очікуються</Typography>
          </div>
        </div>
        <div><Button size="small" variant="outlined" onClick={() => handleEdit(true)}>редагувати профіль</Button></div>
      </div>
      <div className={classes.profile}>

        <Card className={classes.card}>
          <CardHeader title="Про себе" />
            <CardContent>
              <div className={classes.line}>
                <Typography variant="body2">Народження</Typography>
                <Typography variant="body2">{(user.json.about.bornDate && user.json.about.bornDate.toLocaleString("ua", options))  || 'Невказано'}</Typography>
              </div>
              <div className={classes.line}>
                <Typography variant="body2">Стать</Typography>
                <Typography variant="body2">
                  {user.json.about.sex === 'man' ? 'Чоловіча' : user.json.about.sex === 'woman' ? 'Жіноча' : 'невказано'}
                </Typography>
              </div>
              <div className={classes.line}>
                <Typography variant="body2">Діти</Typography>
                <Typography variant="body2">{user.json.about.children ? 'Є' : 'Немає'}</Typography>
              </div>
              <div className={classes.line}>
                <Typography variant="body2">Автомобіль</Typography>
                <Typography variant="body2">{user.json.about.car ? 'Є' : 'Немає'}</Typography>
              </div>
              <div className={classes.line}>
                <Typography variant="body2">Захоплення</Typography>
                <div>
                  <Typography display="inline" variant="body2">
                    {user.json.about.hobby ? computeHobby() : 'Невказано'}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card> 
          <Card className={classes.card}>
            <CardHeader title="Контактна інформація" />
            <CardContent>
              <div className={classes.line}>
                <div><Typography variant="body2">Електрона пошта</Typography></div>
                <div><Typography variant="body2">{user.json.email}</Typography></div>
              </div>
              <div className={classes.line}>
                <div><Typography variant="body2">Телефони</Typography></div>
                <div>
                  {user.json.phoneNumbers ? user.json.phoneNumbers.map((num, i) => <Typography variant="body2" key={i}>{num}</Typography>) : <Typography variant="body2">Невказано</Typography>}
                </div>
              </div>
              <div className={classes.line}>
                <div><Typography variant="body2">Адреса доставки</Typography></div>
                <div>
                  <Typography variant="body2">
                    {(user.json.adress && `${user.json.adress.Region} обл., ${user.json.adress.Area} район, ${user.json.adress.SettlementTypeCode} ${user.json.adress.MainDescription}, Віділення Нової Пошти №${user.json.adress.Warehouses}.`) || 'Невказано'}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
      <div className={classes.head}>
        <div><Button size="small" variant="outlined" onClick={handleClickOpen}>вихід</Button></div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Вихід"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Вийти з цього акаунту?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              повернутися
            </Button>
            <Button onClick={handleClose}>
              вихід
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
    }
    </>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
export default Profile