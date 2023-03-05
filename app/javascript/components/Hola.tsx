import React from 'react'
import {createRoot} from 'react-dom/client'

const Hola = ({name = '名無し'}) => (
  <div>こんにちは {name} さん！</div>
)

// Hello.defaultProps = {
//   name: '名無し'
// }

export default Hola
