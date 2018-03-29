
const CART = '.cart'
const LOGO = '.logo'
const SEARCH_INPUT = '#gh-search-input'
const SEARCH_BUTTON = '.header-search-button'

export default class Header {

	isCartVisible () {
		return $(CART).isVisibleWithinViewport()
	}

	isLogoVisible () {
		return $(LOGO).isVisibleWithinViewport()
	}

	search (input) {
		$(SEARCH_INPUT).setValue(input)
		$(SEARCH_BUTTON).click()
	}
}