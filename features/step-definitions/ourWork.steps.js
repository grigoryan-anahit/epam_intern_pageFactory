const {Given,When,Then} = require("@wdio/cucumber-framework");
//const OurWorkPage = require("../pageobjects/ourWork.page");
const pageProvider=require('../pageobjects/pageFactory');


Given(/^I go to 'Our Work' page$/, async ()=>{
    await pageProvider('OurWorkPage').menuItemOurWork.click();
    await browser.pause(5000);
});
    Then (/^Page title should be 'Explore our Work | EPAM Customer Stories, Brochures & Accelerators'$/,async ()=>{
    await expect(await browser).toHaveTitle('Explore our Work | EPAM Customer Stories, Brochures & Accelerators')
});
When (/^I fill 'Filter By' fields$/, async ()=>{
     await  pageProvider('OurWorkPage').filterByDiv.scrollIntoView();
    await browser.pause(5000)
    await pageProvider('OurWorkPage').filterIndustries.click();
    await browser.pause(5000)
    await pageProvider('OurWorkPage').ffContent(2)
     await pageProvider('OurWorkPage').filterIndustries.click();

     await  pageProvider('OurWorkPage').filterContentTypes.click();
     await browser.pause(5000)
    await pageProvider('OurWorkPage').ff(2);
    await  pageProvider('OurWorkPage').filterContentTypes.click();
    await browser.pause(5000);

});
Then(/^Should see filters$/,async ()=>{
    await  expect(await pageProvider('OurWorkPage').filterDisplayFirst).toHaveText("BUSINESS INFORMATION SERVICES");
    await  expect(await pageProvider('OurWorkPage').filterDisplaySecond).toHaveText("BROCHURES");
    await browser.pause(5000)
})
