
import Header from './_/header'

describe('header', () => {

	before( () => {
		browser.url('/')
	})

	it('should show the bby logo', () => {
		expect(browser.isVisibleWithinViewport('.logo')).to.be.true
	})

	it('should show the cart icon', () => {
		expect(browser.isVisibleWithinViewport('.cart')).to.be.true
	})

})