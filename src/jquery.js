import ClassUtil from './class.js'

class JQuery {
  constructor (selectorOrElemOrJQ, context) {
    if (selector) {
      context = context || document
      this.context = context
      let matchedElems = []

      if (typeof selectorOrElemOrJQ === 'string' ||
        selectorOrElemOrJQ instanceof Node || selectorOrElemOrJQ instanceof NodeList) {
        if (typeof selectorOrElemOrJQ === 'string') {
          matchedElems = context.querySelectorAll(selectorOrElemOrJQ)
        } else {
          matchedElems = matchedElems.concat(selectorOrElemOrJQ)
        }
        if (matchedElems.length > 0) {
          for (let i = 0; i < matchedElems.length; i++) {
            this[i] = matchedElems[i]
          }
          this.length = matchedElems.length
        }
      } else if (selectorOrElemOrJQ instanceof JQuery) {
      }
    }
  }

  hasClass (classNames) {
    // return false if no matched elements
    if (!this.length) {
      return false
    } else {
      let hasClass = true
      for (let i = 0; i < this.length; i++) {
        if (!ClassUtil.hasClass(this[i])) {
          hasClass = false
          break
        }
      }
      return hasClass
    }
  }

  addClass (classNames) {
    this.each((index, elem) => {
      ClassUtil.addClass(elem, classNames)
    })
    return this
  }

  removeClass (classNames) {
    this.each((index, elem) => {
      ClassUtil.removeClass(elem, classNames)
    })
    return this
  }

  toggleClass (classNames) {
    this.each((index, elem) => {
      ClassUtil.toggleClass(elem, classNames)
    })
    return this
  }

  clone (withDataAndEvent) {
    let newJQInstance = new newJQInstance()
    let elems = []
    if (this.length && this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        let clonedElem = this[i].cloneNode(true)
        newJQInstance[i] = clonedElem
      }
      newJQInstance.length = this.length
    }
    return newJQInstance
  }

  each (callback) {
    for (let i = 0; i < this.length; i++) {
      callback.call(this[i], i, this[i])
    }
    return this
  }

  closest (selector) {
    this.each((index, elem) => {
    })
  }

  parents (selector) {

  }

  eq (index) {
    let newJQInstance = new JQuery(this[index])
    return newJQInstance
  }

  find (selectorOrElem) {
    // let newJQInstance = new JQuery()
    // this.each((index, elem) => {
    //   newJQInstance.
    // })
  }
}

// append JQuery to window for development
if (process.env.NODE_ENV === 'development') {
  window.$ = window.JQuery = JQuery
}

export default JQuery
