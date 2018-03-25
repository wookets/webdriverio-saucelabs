
import HomePage from './_/home.page'
import Header from './_/header'

describe('search', () => {

	const header = new Header()

	before( () => {
		const homePage = new HomePage()
		homePage.open()
		homePage.closeEmailSubmissionModal()
	})

	it('should allow a user to search the site using the search bar', () => {
		header.searchInput.setValue('Samsung TV')
		header.searchButton.click()
		browser.pause(500)
		expect(browser.getTitle().toLowerCase()).to.equal('samsung tv - best buy')
	})

})