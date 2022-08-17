import TextInputPage from "../../pageobjects/uitestingplayground/textinput.page";

describe('UI Testing Playground', () => {
    it('Text Input Test', async () => {
        await TextInputPage.open();

        await expect(TextInputPage.textInputField).toBeExisting();
        await expect(TextInputPage.textInputField).toHaveText("");
        await expect(TextInputPage.updateBtn).toBeExisting();
        await expect(TextInputPage.updateBtn).toHaveText("Button That Should Change it's Name Based on Input Value");
        await expect(TextInputPage.textInputField.setValue("Test"));
        await browser.pause(5000)
        await expect(TextInputPage.updateBtn.click());
        // await browser.pause(10000);
        await expect(TextInputPage.updateBtn).toHaveText("Test");


    });
});


