
const mochaTimeout = process.env.DEBUG ? 99999999 : 60000;

exports.config = {
	baseUrl: 'https://www.bestbuy.com/',
    // ...
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
	//sauceConnect: true,
	// ...
	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
		timeout: mochaTimeout
	},
	reporters: ['spec'],
	specs: [
		'./test/**/*.spec.js'
	],
	exclude: [
		'./test/**/*.page.js'
	],
	logLevel: 'silent',
	coloredLogs: true,
	bail: 1,
	screenshotPath: './errorShots/',
	// ...
	maxInstances: 10,
	capabilities: [
		{
			maxInstances: 5,
			browserName: "firefox",
			locationContextEnabled: true,
		},
		{
			maxInstances: 5,
			browserName: 'internet explorer',
			platform: 'Windows 10',
			version: '11.1003',
		},
		// {
		// 	maxInstances: 5,
		// 	appiumVersion: "1.7.2",
		// 	deviceName: "iPhone Simulator",
		// 	deviceOrientation: "portrait",
		// 	platformVersion: "11.2",
		// 	platformName: "iOS",
		// 	browserName: "Safari",
		// }
	],

	/**
	 * Gets executed before test execution begins. At this point you can access to all global
	 * variables like `browser`. It is the perfect place to define custom commands.
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 */
	before: function (capabilities, specs) {
		var chai = require('chai');
		var chaiWebdriver = require('chai-webdriverio').default;
		chai.use(chaiWebdriver(browser));
		global.expect = chai.expect;
		chai.should();

		require('babel-register')
	}
};