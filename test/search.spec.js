
import HomePage from './_/home.page'
import Header from './_/header'

describe('search', () => {

	before( () => {
		const homePage = new HomePage()
		homePage.open()
		homePage.closeEmailSubmissionModal()
	})

	it('should allow a user to search the site using the search bar', () => {
		const header = new Header()
		header.search('Samsung TV')
		browser.pause(500)
		expect(browser.getTitle().toLowerCase()).to.equal('samsung tv - best buy')
	})

})