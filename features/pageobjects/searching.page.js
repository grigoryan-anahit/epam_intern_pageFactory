

const Page = require('./page');

class SearchingPage extends Page {

    get searchBtn() {
        return $('.//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/button ')
    };

    get searchField() {
        return $('#new_form_search')
    };

    get searchUl() {
        return $('.frequent-searches__items')
    };

    get searchUlLi() {
        return $$('.frequent-searches__item')
    }

    get searchResult() {
        return $('[class="search-results__counter"]')
    }

    // open() {
    //     return super.open('login');
    // }
}

module.exports = new SearchingPage();
