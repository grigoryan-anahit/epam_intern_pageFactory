const { Given, When, Then } = require('@wdio/cucumber-framework');

//const HomePage = require('../pageobjects/home.page');
const pageProvider=require('../pageobjects/pageFactory');

Given(/^I open epam.com$/, async () => {
    await browser.pause(5000);
    await browser.maximizeWindow();
    await pageProvider('HomePage').open();

});

When(/^Page title should be 'EPAM | Enterprise Software Development, Design & Consulting'$/,  async () => {
    await browser.pause(3000);
   await expect(browser).toHaveTitle('EPAM | Enterprise Software Development, Design & Consulting')
});

Then(/^I wait 1 seconds$/, async () => {
    await browser.pause(1000);
});
////////////
Given(/^I move mouse to navigation menu "([^"]*)" items$/,async (number)=>{
     await pageProvider('HomePage').menuItem(number);
});

Then(/^Each menu item "([^"]*)" should change color to "([^"]*)"$/, async (number,color)=>{
    await pageProvider('HomePage').menuItem(number);
    await browser.pause(3000);

    await expect(await pageProvider('HomePage').menuItemHover(number)).toEqual(color);
});

