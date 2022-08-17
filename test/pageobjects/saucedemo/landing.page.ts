import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get usernameInputField () {
        return $('#user-name');
    }

    public get passwordInputField () {
        return $('#password');
    }

    public get loginBtn () {
        return $('#login-button');
    }

    public get addToCartBtn () {
        return $('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    public get cartBadge (){
        return $('.shopping_cart_badge')
    }

    public get inventoryItemNameLabel (){
        return $('.inventory_item_name')
    }

    public get checkoutBtn (){
        return $('[data-test="checkout"]')
    }

    public get firstNameInputField (){
        return $('[data-test="firstName"]')
    }

    public get lastNameInputField (){
        return $('[data-test="lastName"]')
    }

    public get zipCodeInputField (){
        return $('[data-test="postalCode"]')
    }

    public get continueBtn (){
        return $('[data-test="continue"]')
    }

    public get totalLabel (){
        return $('.summary_total_label')
    }

    public get finishBtn (){
        return $('[data-test="finish"]')
    }

    public get completeHeaderLabel (){
        return $('.complete-header')
    }

    public get completeTextLabel (){
        return $('.complete-text')
    }

    public async login(username: string, password: string){
        await this.usernameInputField.setValue(username);
        await this.passwordInputField.setValue(password);
        await this.loginBtn.click();
    }

    public async addToCart() {
        await this.addToCartBtn.click();
    }

    public async goToCart() {
        await this.cartBadge.click();
    }

    public async checkout(firstName: string, lastName: string, zipCode: string) {
        await this.checkoutBtn.click();
        await this.firstNameInputField.setValue(firstName);
        await this.lastNameInputField.setValue(lastName);
        await this.zipCodeInputField.setValue(zipCode);
    }

    public async continue() {
        await this.continueBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('/');
    }
}

export default new LandingPage();
