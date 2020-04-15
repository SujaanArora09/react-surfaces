import React from 'react'
import propTypes from 'prop-types'
import Varient1 from './Varient1'
import Varient2 from './Varient2'
import Varient3 from './Varient3'
import Varient4 from './Varient4'
import Varient5 from './Varient5'
import Varient6 from './Varient6'

export const ExampleComponent = ({
  varient,
  color1,
  color2,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
}) => {
  switch (+varient) {
    case 2: {
      return (
        <Varient2
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
        <Varient3
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
        <Varient4
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
        <Varient5
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
        <Varient6
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
        <Varient1
          color1={color1}
          color2={color2}
          transitionDuration={transitionDuration}
          transitionTimingFunction={transitionTimingFunction}
          transitionDelay={transitionDelay}
        />
      )
  }
}

ExampleComponent.propTypes = {
  varient: propTypes.number.isRequired,
  color1: propTypes.string.isRequired,
  color2: propTypes.string.isRequired,
  transitionDelay: propTypes.string.isRequired,
  transitionTimingFunction: propTypes.string.isRequired,
  transitionDuration: propTypes.string.isRequired,
}

ExampleComponent.defaultProps = {
  varient: 1,
  color1: '#e52421',
  color2: '#2a4b9b',
  transitionDelay: '0s',
  transitionTimingFunction: 'ease',
  transitionDuration: '2s',
}
