const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const HomePage = require('../pages/home');
const driver = require('../suporte/env');
const { By } = require('selenium-webdriver');

const home = new HomePage(driver);

Given('that I have gone to the Google page', async function () {
    await driver.get('http://google.com.br');
  });

  When('I add {string} to the search box and click the Search Button', async function (texto) {
    await home.search(texto);
  });

  
  Then('{string} should be mentioned in the results', async function (texto) {
      var textCapturado = await driver.findElement(By.tagName('h3')).getText();
      console.log(textCapturado + " = "+ texto);
      await assert.equal(textCapturado, texto);
  });