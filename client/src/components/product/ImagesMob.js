import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import Chips from '../elements/Chips';

import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'

const useStyles = makeStyles(theme => ({
  root: {
   //zIndex: 10000,
  },
  slideSwipe: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
  },
  imagesSwipe: {
    display: "grid",
  },
  media: {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
  },
  img: {
    height: "100%",
    maxWidth: "100%",
  },
  tabs: {
    display: "flex",
    justifyContent: 'center',
  },
  tab: {
    background: '#dbdbdb',
    borderRadius: '50%',
    margin: theme.spacing(1),
    height: theme.spacing(1),
    width: theme.spacing(1),
    cursor: "pointer",
  },
  tabActive: {
    background: '#673ab7',
    borderRadius: '50%',
    margin: theme.spacing(1),
    height: theme.spacing(1),
    width: theme.spacing(1),
    cursor: "pointer",
  },

  chips: {
    paddingLeft: theme.spacing(0.5),
    position: "absolute",
    zIndex: 2,
    alignSelf: "start",
    justifySelf: "start",
  },
  '@media (min-width: 768px)': {
    media: {
      height: 300,
    },
  },
}))

const ImagesMob = ({ imgs, chipType}) => {
  const classes = useStyles()
  const theme = useTheme()
  const maxSteps = imgs.length

  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)
  const handleStepChange = step => setActiveStep(step)

  const [ open, setOpen ] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <div className={classes.root}>
        <div className={classes.imagesSwipe}>
          <div className={classes.chips}>
            <Chips type={chipType}/>
          </div>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imgs.map((img, index) => (
              <div key={index} className={classes.media} onClick={() => handleOpen()}>
                <img className={classes.img} src={img.smallImage} alt={img.title}/>
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                далі
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                назад
              </Button>
            }
          />
      </div>

      {open && (
          <Lightbox
            mainSrc={imgs[activeStep].largeImage}
            prevSrc={imgs[(activeStep + imgs.length - 1) % imgs.length].largeImage}
            nextSrc={imgs[(activeStep + 1) % imgs.length].largeImage}
            onCloseRequest={() => handleOpen()}
            onMovePrevRequest={() => handleStepChange((activeStep + imgs.length - 1) % imgs.length)}
            onMoveNextRequest={() => handleStepChange((activeStep + 1) % imgs.length)}
          />
        )}
    </div>
  )
}

ImagesMob.propTypes = {
  imgs: PropTypes.array.isRequired,
  chipType: PropTypes.string.isRequired,
};

export default ImagesMob
