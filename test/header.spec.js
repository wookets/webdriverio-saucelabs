
import Header from './_/header'

describe('header', () => {

	before( () => {
		browser.url('/')
	})

	it('should show the bby logo', () => {
		const header = new Header()
		expect(header.isLogoVisible()).to.be.true
	})

	it('should show the cart icon', () => {
		expect(header.isCartVisible()).to.be.true
	})

})