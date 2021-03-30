import React, { useEffect, useState } from 'react'
import { DEFAULT_HTML } from '../core/constants'
import { emitter } from '../core/emitter'

function Browser() {

  const [src, setSrc] = useState('#empty')

  useEffect(() => {
    const blob = new Blob([DEFAULT_HTML], { type: 'text/html' })
    setSrc(URL.createObjectURL(blob))
  }, [])
  
  useEffect(() => {
    emitter.on('update', (data) => {
      console.clear()
      const blob = new Blob([data], { type: 'text/html' })
      setSrc(URL.createObjectURL(blob))
    })
  }, [])

  return (
    <div className="browser grid-item">
      <iframe className="frame" src={src} frameBorder="0">
        Ваш браузер не поддерживает фреймы
      </iframe>
    </div>
  )
}

export default React.memo(Browser)
