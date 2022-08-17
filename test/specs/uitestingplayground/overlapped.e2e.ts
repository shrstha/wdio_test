import OverlappedPage from "../../pageobjects/uitestingplayground/overlapped.page";

describe('UI Testing Playground', () => {
    it('should the playground form elements at the first loading of the page', async () => {
        await OverlappedPage.open();
        await expect(OverlappedPage.idTextField).toBeExisting();
        await expect(OverlappedPage.nameTextField).toBeExisting();
    });

    it('should type text in the form', async () => {
        await OverlappedPage.idTextField.setValue("1");
        await OverlappedPage.nameTextField.scrollIntoView();
        await OverlappedPage.nameTextField.setValue("Test");
        await expect(OverlappedPage.nameTextField).toHaveValue("Test");
    });
});


