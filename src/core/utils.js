import { useEffect } from 'react'

export function preventDefault(e) {
  e.preventDefault()
}

export function usePreventSelectStart(element) {
  useEffect(() => {
    element.addEventListener('selectstart', preventDefault)
    return element.removeEventListener.bind(element, 'selectstart', preventDefault)
  }, [])
}

export function usePreventDragStart(element) {
  useEffect(() => {
    element.addEventListener('dragstart', preventDefault)
    return element.removeEventListener.bind(element, 'drag', preventDefault)
  }, [])
}

export function debounce(fn, ms) {
  let timeout = null
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(fn, ms, ...args)
  }
}
