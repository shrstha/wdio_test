import LandingPage from '../../pageobjects/saucedemo/landing.page';
import { TEST_USER } from '../../pageobjects/constants/users';

describe('Sauce Demo', () => {
    it('should open the landing page', async () => {
        await LandingPage.open();
        await expect(LandingPage.usernameInputField).toBeExisting();
        await expect(LandingPage.passwordInputField).toBeExisting();
        await expect(LandingPage.loginBtn).toBeExisting();
    });

    it('should be able to login with standard_user', async () => {
        await LandingPage.login(TEST_USER.USERNAME, TEST_USER.PASSWORD);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });

    it('should be able to add item to cart', async () => {
        await LandingPage.addToCart();
        await expect(LandingPage.cartBadge).toHaveText('1')
    });

    it('should be able go to cart page', async () => {
        await LandingPage.goToCart();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(LandingPage.cartBadge).toHaveText('1')
        await expect(LandingPage.inventoryItemNameLabel).toHaveText('Sauce Labs Backpack')
        await expect(LandingPage.checkoutBtn).toBeExisting();
    });

    it('should be able to checkout', async () => {
        await LandingPage.checkout(TEST_USER.FIRST_NAME, TEST_USER.LAST_NAME, TEST_USER.ZIP_CODE);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    });

    it('should be able to finalize checkout process', async () => {
        await LandingPage.continue();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        await expect(LandingPage.inventoryItemNameLabel).toHaveText('Sauce Labs Backpack')
        await expect(LandingPage.totalLabel).toHaveText('Total: $32.39')
        await LandingPage.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await expect(LandingPage.completeHeaderLabel).toHaveText('THANK YOU FOR YOUR ORDER')
        await expect(LandingPage.completeTextLabel).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    });
});


