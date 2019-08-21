import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {base64} from '../../utils/base64'
import MobileStepper from '@material-ui/core/MobileStepper'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
  },
  img: {
    display: 'block',
    maxWidth: 1200,
    overflow: 'hidden',
    width: '100%',
  },
})

const SwipeableTextMobileStepper = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const { carousel, history } = props
  const maxSteps = carousel.length

  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1)
  const handleStepChange = step => setActiveStep(step)

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {carousel.map((item, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={item.img} alt={'no alt'} onClick={() => history.push(`/${item.url}`)} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
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
  )
}

SwipeableTextMobileStepper.propTypes = {
  carousel: PropTypes.array.isRequired,
}

export default SwipeableTextMobileStepper
