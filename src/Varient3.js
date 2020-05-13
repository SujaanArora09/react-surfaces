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
            id='variant3-gradient1'
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
            id='variant3-gradient2'
            y1='12.1'
            x2='99.49'
            y2='12.1'
            gradientUnits='userSpaceOnUse'
          >
            <stop style={transition} offset='0' stopColor={color2} />
            <stop
              style={transition}
              offset='1'
              stopColor={color1}
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='variant3-gradient3'
            y1='74.35'
            x2='100'
            y2='74.35'
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
        <title>{title || 'react-surfaces variant 3'}</title>
        <rect
          width='100'
          height='100'
          style={{ fill: 'url(#variant3-gradient1)' }}
        />
        <path
          d='M99.49,0C90.38,19.77,101.11,35.28,0,13.94V0Z'
          style={{ fill: 'url(#variant3-gradient2)' }}
        />
        <path
          d='M100,99.9v.1H0V72.58C8.32,69,39,44.15,50,49.44,64.2,56.26,63.42,90.9,100,99.9Z'
          style={{ fill: 'url(#variant3-gradient3)' }}
        />
      </svg>
    )
  }
)
