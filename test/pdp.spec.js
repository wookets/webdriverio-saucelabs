
describe('www.bestbuy.com/pdp', () => {

	it('should load the page', async () => {
		const page = browser.url('https://www.bestbuy.com/site/samsung-65-class-64-5-diag--led-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range/5773800.p?skuId=5773800');
		//console.log('page', page)
	});
	
	// it('should confirm that an add to cart button exists and can be clicked', () => {
	// 	browser.url('https://www.bestbuy.com/site/samsung-65-class-64-5-diag--led-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range/5773800.p?skuId=5773800');
	// 	browser.getText('button=Add to Cart').should.exist;
    //     browser.click('#pdp-add-to-cart-button .btn');
    // });

});