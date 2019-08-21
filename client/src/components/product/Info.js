import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const Info = (props) => {
  const classes = useStyles()

  const { info=["Доставка"] } = props
  // const [expanded, setExpanded] = useState(null)

  // const handleChange = panel => (event, isExpanded) => {
  //   setExpanded(isExpanded ? panel : false);
  // }

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

Info.propTypes = {
  info: PropTypes.array,
}

export default Info

/* <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Доставка</Typography>
          <Typography className={classes.secondaryHeading}>
          Самовивіз з Нової Пошти 60 грн Буде передано до служби доставки завтра
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          С помощью доставки «Нова Пошта», Вы можете получить товар даже в самых отдаленных уголках Украины.
В среднем, доставка занимает 1-3 дня, во время заказа наши менеджеры согласуют с Вами дату доставки перед отправкой товара.
Обращаем Ваше внимание на то, что стоимость доставки одной единицы товара может варьироваться в зависимости от веса и габаритов (от 50грн до 4000грн.), точная стоимость доставке расчитана на карточке товара.
Подъем габаритных грузов от 30 до 100 кг оплачивается отдельно. Стоимость подъема: 30–200 грн/этаж в зависимости от веса и габаритов товара, а так же сложности подъема.
О прибытии заказа в отделение вы будете уведомлены SMS-сообщением «Новая Почта» с указанием номера накладной
Ваш заказ будет бесплатно храниться в отделении в течение 3 рабочих дней. Если по истечении данного срока вы не получите заказ, товар вернется продавцу.
Адресная доставка «Нова Пошта», при условии оплаты заказа наличными, на сумму более 50 000 грн не осуществляется.
Отсутствует возможность расчета подарочным сертификатом при адресной доставке.
Адресная доставка «Нова Пошта» алкогольных напитков осуществляется только по предоплате (безналичный, Visa).
Обратите внимание, что при покупке нескольких товаров, стоимость доставки пересчитывается.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Гарантія</Typography>
          <Typography className={classes.secondaryHeading}>
          12 місяців, обмін/повернення товару впродовж 14 днів
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          На всі товари, що реалізуються в нашому магазині, надається гарантія від 2-х тижнів до 120 місяців залежно від сервісної політики виробника. Термін гарантії вказаний в описі кожного товару на нашому сайті. Підтвердженням гарантійних зобов'язань слугує гарантійний талон виробника або гарантійний талон "ROZETKA — online супермаркет передової електроніки".
Перевірка комплектності та відсутність дефектів у виробі здійснюється під час передавання товару покупцеві. Комплектність виробу визначається описом виробу або посібником з його експлуатації.

Обмін і повернення товару впродовж перших 14 днів після купівлі.

Відповідно до «Закону про захист прав споживача» покупці нашого магазину мають право обміняти або повернути куплений у нас товар впродовж перших 14 днів після купівлі.
Будь ласка, зверніть увагу — обмінювати або повертати можна тільки новий товар, який не був у вживанні та не має слідів використання: подряпин, сколів, потертостей, на лічильнику телефону не більш ніж 5 хвилин розмов, програмне забезпечення не було змінене тощо.
А також мають бути збережені:

повний комплект товару;
цілісність і всі компоненти упаковки;
ярлики;
заводське маркування.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Оплата</Typography>
          <Typography className={classes.secondaryHeading}>
          Готівкою, Visa/MasterCard, Приват24, Кредит, Оплата частинами, Миттєва розстрочка, Безготівковим розрахунком
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Готівкова
Оплата готівкою відбувається виключно в національній валюті.

Visa/MasterCard
Оплата карткою Visa або MasterCard

Оплата через Masterpass
Оплата через електронний гаманець Masterpass від Mastercard кредитну або дебетову карту будь-платіжної системи.

Безготівковими
Ми є платниками ПДВ і податку на прибуток на загальних підставах. Рахунок може бути надіслано електронною поштою або факсом
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Бонуси</Typography>
          <Typography className={classes.secondaryHeading}>
          Зараз використання бонусів на цей товар недоступне
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> */