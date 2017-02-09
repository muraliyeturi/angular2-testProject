import { browser, element, by } from 'protractor';

export class MyProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getProductTitle() {
    return element(by.className('productTitle')).getText();
  }
  getAddToCart() {
    return element(by.className('addToCart')).getText()
  }

  getPUIS() {
    return element(by.className('pickUpInStore')).getText();
  }
}
