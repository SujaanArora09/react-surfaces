# react-surfaces

> A collection of animated background gradients

[![NPM](https://img.shields.io/npm/v/react-surfaces.svg)](https://www.npmjs.com/package/react-surfaces) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-surfaces
```

## Usage

```jsx
import React, { Component } from 'react'

import Surface from 'react-surfaces'

class Example extends Component {
  render() {
    return <Surface 
      variant={2} // defaults to 1, possible values: (1-6)
      color1={'#ff0000'} // defaults to #e52421
      color2={'#0000ff'} // defaults to #0000ff
      transitionDuration={'2s'} // optional
      transitionDelay={'0s'} // optional
      transitionTimingFunction={'ease'} // optional
    />
  }
}
```

## License

MIT © [sempostma](https://github.com/sempostma)
