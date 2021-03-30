import React from 'react'
import Browser from './Browser'
import Editor from './Editor'

function Main() {
  return (
    <div className="main-content">
      <div className="wrapper">
        <div className="grid">
          <Editor />
          <Browser />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Main)
