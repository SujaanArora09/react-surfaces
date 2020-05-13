import React, { useEffect, useState } from 'react'

import { ExampleComponent } from 'react-surfaces'
import 'react-surfaces/dist/index.css'

const App = () => {
  const [color1, setColor1] = useState('red')
  const [color2, setColor2] = useState('green')

  useEffect(() => {
    setTimeout(() => {
      setColor1('green')
      setColor2('red')
    }, 2000);
  }, [])

  return <>
    <h2>1</h2>
    <ExampleComponent variant={1} color1={color1} color2={color2} />
    <h2>2</h2>
    <ExampleComponent variant={2} color1={color1} color2={color2} />
    <h2>3</h2>
    <ExampleComponent variant={3} color1={color1} color2={color2} />
    <h2>4</h2>
    <ExampleComponent variant={4} color1={color1} color2={color2} />
    <h2>5</h2>
    <ExampleComponent variant={5} color1={color1} color2={color2} />
    <h2>6</h2>
    <ExampleComponent variant={6} color1={color1} color2={color2} />
  </> 
}

export default App
