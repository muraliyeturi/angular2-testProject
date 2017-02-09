import { browser, element, by } from 'protractor';

export class MyProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getProductTitle() {
    return element(by.className('productTitle')).getText();
  }
}
