import React, { memo } from 'react'

export default memo(
  ({
    color1,
    color2,
    transitionDuration,
    transitionTimingFunction,
    transitionDelay,
    title,
  }) => {
    const transition = {
      transitionDuration,
      transitionTimingFunction,
      transitionDelay,
      transitionProperty: 'stop-color',
    }

    return (
      <svg
        height='100%'
        width='100%'
        preserveAspectRatio='xMidYMid slice'
        id='Laag_1'
        data-name='Laag 1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 100 100'
      >
        <defs>
          <linearGradient
            id='variant6-gradient1'
            x1='110.35'
            y1='74.83'
            x2='-62.99'
            y2='3.51'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' style={transition} stopColor={color2} />
            <stop offset='1' style={transition} stopColor={color1} />
          </linearGradient>
        </defs>
        <title>{title || 'react-surfaces variant 6'}</title>
        <rect
          width='100'
          height='100'
          style={{ fill: 'url(#variant6-gradient1)' }}
        />
        <path
          d='M99.49,0C57.34,77.23,28.6-3.74,0,13.94V0Z'
          style={{ ...transition, transitionProperty: 'fill', fill: color2 }}
        />
        <path
          d='M100,68.72V100H0V72.58C8.32,69,27.38,85.22,39.53,86.71,71.61,90.63,77.42,62.16,100,68.72Z'
          style={{ ...transition, transitionProperty: 'fill', fill: color1 }}
        />
      </svg>
    )
  }
)
