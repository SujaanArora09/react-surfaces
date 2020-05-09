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
            id='varient5-gradient1'
            x1='110.35'
            y1='74.83'
            x2='-62.99'
            y2='3.51'
            gradientUnits='userSpaceOnUse'
          >
            <stop style={transition} offset='0' stopColor={color2} />
            <stop style={transition} offset='1' stopColor={color1} />
          </linearGradient>
          <linearGradient
            id='varient5-gradient2'
            y1='17.01'
            x2='99.49'
            y2='17.01'
            gradientUnits='userSpaceOnUse'
          >
            <stop style={transition} offset='0' stopColor={color2} />
            <stop
              style={transition}
              offset='1'
              stopColor={color2}
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='varient5-gradient3'
            y1='83.87'
            x2='100'
            y2='83.87'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              style={transition}
              offset='0'
              stopColor={color1}
              stopOpacity='0'
            />
            <stop style={transition} offset='1' stopColor={color1} />
          </linearGradient>
        </defs>
        <title>{title || 'react-surfaces varient 5'}</title>
        <rect
          width='100'
          height='100'
          style={{ fill: 'url(#varient5-gradient1)' }}
        />
        <path
          d='M99.49,0C57.34,77.23,28.6-3.74,0,13.94V0Z'
          style={{ fill: 'url(#varient5-gradient2)' }}
        />
        <path
          d='M100,68.72V100H0V72.58C8.32,69,27.38,85.22,39.53,86.71,71.61,90.63,77.42,62.16,100,68.72Z'
          style={{ fill: 'url(#varient5-gradient3)' }}
        />
      </svg>
    )
  }
)
