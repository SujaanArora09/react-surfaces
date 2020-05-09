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
        id='Laag_1'
        preserveAspectRatio='xMidYMid slice'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 100 100'
      >
        <defs>
          <linearGradient
            id='varient2-gradient1'
            x1='110.35'
            y1='74.83'
            x2='-62.99'
            y2='3.51'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' style={transition} stopColor={color1} />
            <stop offset='1' style={transition} stopColor={color2} />
          </linearGradient>
          <linearGradient
            id='varient2-gradient2'
            y1='6.43'
            x2='51.3'
            y2='6.43'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0' style={transition} stopColor={color2} />
            <stop
              offset='1'
              style={transition}
              stopColor={color2}
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='varient2-gradient3'
            y1='83.41'
            x2='100'
            y2='83.41'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              offset='0'
              style={transition}
              stopColor={color1}
              stopOpacity='0'
            />
            <stop offset='1' style={transition} stopColor={color1} />
          </linearGradient>
        </defs>
        <title>{title || 'react-surfaces varient 2'}</title>
        <rect
          width='100'
          height='100'
          style={{ fill: 'url(#varient2-gradient1)' }}
        />
        <path
          d='M51.3,0C42.19,19.77,11,11.79,0,8.27V0Z'
          style={{ fill: 'url(#varient2-gradient2)' }}
        />
        <path
          d='M100,99.9v.1H0V72.58C8.32,69,23.78,63.8,34.81,69.09,49,75.91,63.42,90.9,100,99.9Z'
          style={{ fill: 'url(#varient2-gradient3)' }}
        />
      </svg>
    )
  }
)
