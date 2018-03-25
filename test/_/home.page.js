
import Page from './page'

export default class Home extends Page {

	open() {
		super.open('/')
	}

	closeEmailSubmissionModal() {
		if (browser.isExisting('.email-submission-modal')) {
			$('.email-submission-modal .close').click()
		}
	}

}