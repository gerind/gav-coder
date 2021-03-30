import React, { useEffect, useMemo, useRef, useState } from 'react'

const outerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}

function NiceBackground({dx = 24, dy = 24, size = 3000}) {

  const [state, setState] = useState([0, 0])

  const {current: mouse} = useRef({x: 0, y: 0})

  useEffect(() => {
    function onMouseMove(e) {
      mouse.x = Math.floor(e.clientX / 3)
      mouse.y = Math.floor(e.clientY / 3)
    }
    document.addEventListener('mousemove', onMouseMove)
    return document.removeEventListener.bind(document, 'mousemove', onMouseMove)
  }, [])

  useEffect(() => {
    const int = setInterval(() => {
      setState(state => ([
        Math.floor(state[0] + (mouse.x - state[0]) / 20),
        Math.floor(state[1] + (mouse.y - state[1]) / 20)
      ]))
    }, 25)
    return clearInterval.bind(window, int)
  }, [])

  const horLines = useMemo(() => {
    return new Array(Math.floor(size / dy))
      .fill(0)
      .map((_, index) => (
        <line x1="0" y1={dy * index} x2={size} y2={dy * index} stroke="rgb(222,222,222)" strokeWidth="1" key={`h${index}`} />
      ))
  }, [])

  const verLines = useMemo(() => {
    return new Array(Math.floor(size / dx))
      .fill(0)
      .map((_, index) => (
        <line x1={dx * index} y1="0" x2={dx * index} y2={size} stroke="rgb(222,222,222)" strokeWidth="1" key={`v${index}`} />
      ))
  }, [])

  return (
    <div style={outerStyle}>
      <svg width={size} height={size} style={{
        transform: `translate(${-state[0]}px, ${-state[1]}px)`
      }} >
        {horLines}
        {verLines}
      </svg>
    </div>
  )
}

export default React.memo(NiceBackground)
