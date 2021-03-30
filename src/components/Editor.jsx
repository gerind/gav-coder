import React, { useEffect, useRef } from 'react'
import { DEBOUNCE, DEFAULT_HTML } from '../core/constants'
import { emitter } from '../core/emitter'
import { debounce } from '../core/utils'

function Editor() {

  const rootRef = useRef(null)

  const editorRef = useRef(null)

  useEffect(() => {
    editorRef.current = CodeMirror(rootRef.current, {
      value: DEFAULT_HTML,
      mode:  'htmlmixed',
      theme: 'monokai',
      tabSize: 2,
      indentWithTabs: true,
      extraKeys: {
        Tab: (cm) => {
          cm.replaceSelection('  ')
        }
      },
      lineWrapping: true,
      lineNumbers: true
    })

    editorRef.current.setSize('100%', '100%')

    editorRef.current.on('update', debounce(() => {
      emitter.emit('update', editorRef.current.getValue())
    }, DEBOUNCE))
  }, [])

  return (
    <div className="editor grid-item" ref={rootRef}>

    </div>
  )
}

export default React.memo(Editor)
