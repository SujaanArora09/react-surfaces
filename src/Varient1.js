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
        viewBox='0 0 100 199.93'
      >
        <defs>
          <linearGradient
            id='varient1-gradient1'
            x1='127.93'
            y1='132'
            x2='-95.89'
            y2='39.91'
            gradientUnits='userSpaceOnUse'
          >
            <stop style={transition} offset='0' stopColor={color1} />
            <stop style={transition} offset='1' stopColor={color2} />
          </linearGradient>
          <linearGradient
            id='varient1-gradient2'
            y1='17.07'
            x2='99.49'
            y2='17.07'
            gradientUnits='userSpaceOnUse'
          >
            <stop style={transition} offset='0' stopColor={color1} />
            <stop
              style={transition}
              offset='1'
              stopColor={color1}
              stopOpacity='0'
            />
          </linearGradient>
          <linearGradient
            id='varient1-gradient3'
            y1='183.87'
            x2='100'
            y2='183.87'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              style={transition}
              offset='0'
              stopColor={color2}
              stopOpacity='0'
            />
            <stop style={transition} offset='1' stopColor={color1} />
          </linearGradient>
        </defs>
        <title>{title || 'react-surfaces varient 1'}</title>
        <rect
          width='100'
          height='199.87'
          style={{ fill: 'url(#varient1-gradient1)' }}
        />
        <path
          d='M99.49.07C57.34,77.3,28.6-3.67,0,14V.07Z'
          transform='translate(0 -0.07)'
          style={{ fill: 'url(#varient1-gradient2)' }}
        />
        <path
          d='M100,168.72V200H0V172.58c8.32-3.61,27.38,12.64,39.53,14.13C71.61,190.63,77.42,162.16,100,168.72Z'
          transform='translate(0 -0.07)'
          style={{ fill: 'url(#varient1-gradient3)' }}
        />
      </svg>
    )
  }
)
