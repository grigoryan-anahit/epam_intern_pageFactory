

const Page = require('./page');

class OurWorkPage extends Page {

    get menuItemOurWork() {
        return $('.//a[contains(@class,"top-navigation__item-link") and normalize-space()="Our Work"]');
    }

    get topNavigationUl() {
        return $('.top-navigation__row')
    };

    get filterByDiv() {
        return $('.detail-pages-filter__top-panel-holder')
    };

    get filterIndustries() {
        return $('[class="detail-pages-filter__select-wrapper"]:first-of-type')
    };

    get filterIndustriesUl() {
        return $('.//div[@class="multi-select-dropdown"]/ul[@class="multi-select-column"]')
    };

    get filterContentTypes() {
        return $('[class="detail-pages-filter__select-wrapper"]:last-of-type')
    };

    get filterContentTypeUl() {
        return $('.//div[@class="multi-select-dropdown"]/ul[@class="multi-select-column"]')
    };

    get filterContentTypeUlll() {
        return $('//span[contains(text(), \'Accelerators\')]')
    };

    get filterDisplayFirst() {
        return $('.//ul[@class="selected-items"]/li[@class="filter-tag"][1]')
    };

    get filterDisplaySecond() {
        return $('.//ul[@class="selected-items"]/li[@class="filter-tag"][2]')
    };

    get navbar() {
        return $('.header-ui')
    }

    async ffContent(index) {
        return await this.filterIndustriesUl.$$('li')[index].click();
    };

    async ff(index) {
        return await this.filterContentTypeUl.$$(`span`)[index].click();
    };
}
module.exports = new OurWorkPage();
