import CssClassUtil from '@/css-class.util.js'

describe('CssClassUtil', () => {
  let elem

  beforeEach(() => {
    elem = document.createElement('div')
  })

  describe('hasClass', () => {
    beforeEach(() => {
      elem.className = 'class1 class2 class3 class1-1 class2__text'
    })

    it('should return true if DOM contains the class', () => {
      expect(CssClassUtil.hasClass(elem, 'class1')).to.equal(true)
      expect(CssClassUtil.hasClass(elem, 'class2')).to.equal(true)
      expect(CssClassUtil.hasClass(elem, 'class3')).to.equal(true)
    })

    it('should return false if DOM doe not contain the class', () => {
      expect(CssClassUtil.hasClass(elem, 'class')).to.equal(false)
    })
  })

  describe('addClass', () => {
    beforeEach(() => {
    })

    it('should add a class if DOM does not contain the class', () => {
      elem.className = ''
      CssClassUtil.addClass(elem, 'class')
      expect(elem.className).to.equal('class')
    })

    it('should not add a class if DOM already contains the class', () => {
      elem.className = 'class'
      CssClassUtil.addClass(elem, 'class')
      expect(elem.className).to.equal('class')
    })
  })

  describe('removeClass', () => {
    it('should remove the class if the class exists', () => {
      elem.className = 'class'
      CssClassUtil.removeClass(elem, 'class')
      expect(elem.className).to.equal(' ')
    })

    it('should do nothing if the class does not exist', () => {
      elem.className = ''
      CssClassUtil.removeClass(elem, 'class')
      expect(elem.className).to.equal('')
    })
  })
})
