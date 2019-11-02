const basePage = require('../pages/base');
const { By,Key } = require('selenium-webdriver');

class HomePage extends basePage {
    constructor(driver) {
        super(driver);
    }

    async search(texto) {
        await this.driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    }    
}

module.exports = HomePage;