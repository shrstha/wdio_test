import TextInputPage from "../../pageobjects/uitestingplayground/textinput.page";

describe('UI Testing Playground', () => {
    it('should show the textfield and button at first loading of the page ', async () => {
        await TextInputPage.open();
        await expect(TextInputPage.textInputField).toBeExisting();
        await expect(TextInputPage.textInputField).toHaveText("");
        await expect(TextInputPage.updateBtn).toBeExisting();
        await expect(TextInputPage.updateBtn).toHaveText("Button That Should Change it's Name Based on Input Value");
    });

    it('button text should be changed as per the inputted text in the textfield ', async () => {
        await TextInputPage.textInputField.setValue("Test");
        await expect(TextInputPage.updateBtn.click());
        await expect(TextInputPage.updateBtn).toHaveText("Test");
    });
});


