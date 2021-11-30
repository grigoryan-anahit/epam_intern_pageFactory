const {Given, Then, When} = require("@wdio/cucumber-framework");
//const SearchingPage = require('../pageobjects/searching.page');
const pageProvider=require('../pageobjects/pageFactory');


Given(/^I click on the Search icon$/,async ()=>{
    await pageProvider('SearchingPage').searchBtn.click();
    await browser.pause(2000);

});
Then (/^Should open search field$/,async ()=>{
    await expect(pageProvider('SearchingPage').searchField).toBeExisting();
});
When (/^I set the searching word and click search icon$/,async ()=>{
    await pageProvider('SearchingPage').searchUl.$$('li')[5].click();
    // await EpamPage.searchUl.searchUlLi[5].click();
    await browser.pause(1000);
    await browser.keys('Enter');

});
Then (/^Should see search results$/,async ()=>{
    await expect(pageProvider('SearchingPage').searchResult).toHaveTextContaining('AUTOMATION')
});
