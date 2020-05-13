import React from 'react'
import propTypes from 'prop-types'
import variant1 from './variant1'
import variant2 from './variant2'
import variant3 from './variant3'
import variant4 from './variant4'
import variant5 from './variant5'
import variant6 from './variant6'

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
        <variant2
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
        <variant3
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
        <variant4
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
        <variant5
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
        <variant6
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
        <variant1
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
