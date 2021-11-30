

const Page = require('./page');

class HomePage extends Page {
    get topNavigationUl() {
        return $('.top-navigation__row')
    };
    async menuItem (index) {
        const el=await this.topNavigationUl.$$('.top-navigation__item-link')[index];
        return  await el.moveTo();
    }
    async menuItemHover (num) {
        const el=await this.topNavigationUl.$$('.top-navigation__item-link')[num];
        return (await el.getCSSProperty('color')).value;
    }

    // open() {
    //     return super.open('login');
    // }
}

module.exports = new HomePage();
