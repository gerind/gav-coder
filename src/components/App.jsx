import React from 'react'
import NiceBackground from '../addon/NiceBackground'
import { usePreventDragStart, usePreventSelectStart } from '../core/utils'
import Main from './Main'

function App() {
  usePreventSelectStart(document)
  usePreventDragStart(document)

  if (location.hash === '#empty') {
    return (
      <React.Fragment />
    )
  }

  return (
    <>
      <NiceBackground />
      <Main />
    </>
  )
}

export default App
