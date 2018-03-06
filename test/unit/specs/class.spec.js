import ClassUtil from '@/class.js'

describe('ClassUtil', () => {
  let elem

  beforeEach(() => {
    elem = document.createElement('div')
  })

  describe('hasClass', () => {
    beforeEach(() => {
      elem.className = 'class1 class2 class3 class1-1 class2__text'
    })

    it('should return true if DOM contains the class', () => {
      expect(ClassUtil.hasClass(elem, 'class1')).to.equal(true)
      expect(ClassUtil.hasClass(elem, 'class2')).to.equal(true)
      expect(ClassUtil.hasClass(elem, 'class3')).to.equal(true)
    })

    it('should return false if DOM doe not contain the class', () => {
      expect(ClassUtil.hasClass(elem, 'class')).to.equal(false)
    })
  })

  describe('addClass', () => {
    beforeEach(() => {
    })

    it('should add a class if DOM does not contain the class', () => {
      elem.className = ''
      ClassUtil.addClass(elem, 'class')
      expect(elem.className).to.equal('class')
    })

    it('should not add a class if DOM already contains the class', () => {
      elem.className = 'class'
      ClassUtil.addClass(elem, 'class')
      expect(elem.className).to.equal('class')
    })
  })

  describe('removeClass', () => {
    it('should remove the class if the class exists', () => {
      elem.className = 'class'
      ClassUtil.removeClass(elem, 'class')
      expect(elem.className).to.equal('')
    })

    it('should do nothing if the class does not exist', () => {
      elem.className = ''
      ClassUtil.removeClass(elem, 'class')
      expect(elem.className).to.equal('')
    })

    it('should remove all classes if not passing in second param', () => {
      elem.className = 'class1, class2'
      ClassUtil.removeClass(elem)
      expect(elem.className).to.equal('')
    })
  })

  describe('toggleClass', () => {
    it('should toggle the class', () => {
      elem.className = 'class1 class2'
      ClassUtil.toggleClass(elem, 'class1 class2 class')
      expect(elem.className).to.equal('class')
    })

    it('should do nothing if not classes passed in', () => {
      elem.className = 'class'
      ClassUtil.toggleClass(elem)
      expect(elem.className).to.equal('class')
    })
  })
})
