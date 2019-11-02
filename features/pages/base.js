const { By } = require('selenium-webdriver');

class basePage {
    constructor(driver) {
        this.driver = driver;
    }
}


module.exports = basePage;