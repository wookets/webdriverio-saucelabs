
export default class Page {

	constructor() {
		
	}

	open(path) {
		return browser.url(path);
	}

	get title () {
		return browser.getTitle()
	}

}