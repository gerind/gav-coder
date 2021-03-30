
const listeners = Object.create(null)

export const emitter = {
  on(event, callback) {
    if (!(event in listeners)) {
      listeners[event] = []
    }
    listeners[event].push(callback)
  },
  off(event, callback) {
    if (!(event in listeners)) {
      return
    }
    if (typeof callback === 'function') {
      listeners[event] = listeners[event]
        .filter(fn => fn !== callback)
      if (listeners[event].length === 0) {
        delete listeners[event]
      }
    }
    else {
      delete listeners[event]
    }
  },
  emit(event, ...args) {
    if (event in listeners) {
      listeners[event].forEach(callback => callback.apply(null, args))
    }
  }
}