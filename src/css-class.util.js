/*
 * @author Chockie Zhu
 * @desc Util class for manipulating CSS class
 */

function createClassReg (className, flags) {
  return new RegExp('(^|\\s+)' + className + '(\\s+|$)', flags)
}

function preProcessClasses (classNames) {
  let resultSet = new Set()
  for (let className of classNames.split(/\s+/)) {
    resultSet.add(className)
  }
  return Array.from(resultSet)
}

function hasClassName (classNames, className) {
  let classReg = createClassReg(className)
  return classReg.test(classNames)
}

class CssClassUtil {
  static hasClass (DOM, className) {
    return hasClassName(DOM.className, className)
  }

  static addClass (DOM, classNames) {
    classNames = classNames || ''
    let resultClasses = ''
    for (let className of preProcessClasses(classNames)) {
      if (!hasClassName(DOM.className, className)) {
        resultClasses = resultClasses + (resultClasses === '' ? '' : ' ') + className
      }
    }
    if (resultClasses !== '') {
      DOM.className = DOM.className + (DOM.className === '' ? '' : ' ') + resultClasses
    }
  }

  static removeClass (DOM, classNames) {
    if (classNames === undefined) {
      DOM.className = ''
    } else {
      let resultClasses = DOM.className
      for (let className of preProcessClasses(classNames)) {
        if (hasClassName(resultClasses, className)) {
          resultClasses = resultClasses.replace(createClassReg(className, 'g'), ' ')
        }
      }
      if (resultClasses !== DOM.className) {
        DOM.className = resultClasses
      }
    }
  }

  static toggleClass (DOM, classNames) {
    classNames = classNames || ''
    let resultClasses = DOM.className
    for (let className of preProcessClasses(classNames)) {
      if (hasClassName(resultClasses, className)) {
        resultClasses = resultClasses.replace(createClassReg(className, 'g'), ' ')
      } else {
        resultClasses = resultClasses + ' ' + className
      }
    }
    if (resultClasses !== DOM.className) {
      DOM.className = resultClasses
    }
  }
}

export default CssClassUtil
