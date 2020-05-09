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
            id='varient4-gradient3'
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
            id='varient4-gradient2'
            y1='6.97'
            x2='99.49'
            y2='6.97'
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
            id='varient4-gradient1'
            y1='79.95'
            x2='100'
            y2='79.95'
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
        <title>{title || 'react-surfaces varient 4'}</title>
        <rect
          width='100'
          height='100'
          style={{ fill: 'url(#varient4-gradient3)' }}
        />
        <path
          d='M99.49,0C90.38,19.77,28.6-3.74,0,13.94V0Z'
          style={{ fill: 'url(#varient4-gradient2)' }}
        />
        <path
          d='M100,99.9v.1H0V72.58c8.32-3.61,12.29-14,24.43-12.53C56.52,64,44.89,77,100,99.9Z'
          style={{ fill: 'url(#varient4-gradient1)' }}
        />
      </svg>
    )
  }
)
