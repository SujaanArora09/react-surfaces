import React from 'react'
import propTypes from 'prop-types'
import Variant1 from './Variant1'
import Variant2 from './Variant2'
import Variant3 from './Variant3'
import Variant4 from './Variant4'
import Variant5 from './Variant5'
import Variant6 from './Variant6'

const DefaultComponent = ({
  variant,
  color1,
  color2,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
}) => {
  switch (+variant) {
    case 2: {
      return (
        <Variant2
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
    }
    case 3: {
      return (
        <Variant3
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
    }
    case 4: {
      return (
        <Variant4
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
    }
    case 5: {
      return (
        <Variant5
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
    }
    case 6: {
      return (
        <Variant6
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
    }
    default:
      return (
        <Variant1
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
  }
}

DefaultComponent.propTypes = {
  variant: propTypes.number.isRequired,
  color1: propTypes.string.isRequired,
  color2: propTypes.string.isRequired,
  transitionDelay: propTypes.string.isRequired,
  transitionTimingFunction: propTypes.string.isRequired,
  transitionDuration: propTypes.string.isRequired,
}

DefaultComponent.defaultProps = {
  variant: 1,
  color1: '#e52421',
  color2: '#2a4b9b',
  transitionDelay: '0s',
  transitionTimingFunction: 'ease',
  transitionDuration: '2s',
}

export default DefaultComponent
