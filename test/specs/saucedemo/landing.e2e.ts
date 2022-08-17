import LandingPage from '../../pageobjects/saucedemo/landing.page';
import { TEST_USER } from '../../pageobjects/constants/users';
import landingPage from '../../pageobjects/saucedemo/landing.page';

describe('Sauce Demo', () => {
    it('Landing Page', async () => {
        await LandingPage.open();

        await expect(LandingPage.usernameInputField).toBeExisting();
        await expect(LandingPage.passwordInputField).toBeExisting();
        await expect(LandingPage.loginBtn).toBeExisting();
        // await expect((await LandingPage.usernameInputField).setValue(TEST_USER.USERNAME));
        // await expect((await LandingPage.passwordInputField).setValue(TEST_USER.PASSWORD));
        // await expect((await LandingPage.loginBtn).click());
        await LandingPage.usernameInputField.setValue(TEST_USER.USERNAME);
        await LandingPage.passwordInputField.setValue(TEST_USER.PASSWORD);
        await LandingPage.loginBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await LandingPage.addToCartBtn.click();
        await expect(LandingPage.cartBadge).toHaveText('1')
        await LandingPage.cartBadge.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(LandingPage.inventoryItemNameLabel).toHaveText('Sauce Labs Backpack')
        await expect(LandingPage.checkoutBtn).toBeExisting();
        await LandingPage.checkoutBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        await LandingPage.firstNameInputField.setValue(TEST_USER.FIRST_NAME);
        await LandingPage.lastNameInputField.setValue(TEST_USER.LAST_NAME);
        await LandingPage.zipCodeInputField.setValue(TEST_USER.ZIP_CODE);
        await LandingPage.continueBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        await expect(LandingPage.inventoryItemNameLabel).toHaveText('Sauce Labs Backpack')
        await expect(LandingPage.totalLabel).toHaveText('Total: $32.39')
        await LandingPage.finishBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        await expect(LandingPage.completeHeaderLabel).toHaveText('THANK YOU FOR YOUR ORDER')
        await expect(LandingPage.completeTextLabel).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        await browser.pause(5000)
    });
});


