import OverlappedPage from "../../pageobjects/uitestingplayground/overlapped.page";

describe('UI Testing Playground', () => {
    it.only('Overlapped Test', async () => {
        await OverlappedPage.open();

        await expect(OverlappedPage.idTextField).toBeExisting();
        await expect((await OverlappedPage.idTextField).setValue("1"));
        await expect(OverlappedPage.nameTextField).toBeExisting();
        await expect((await OverlappedPage.nameTextField).scrollIntoView());
        await expect((await OverlappedPage.nameTextField).setValue("Test"));

    });
});


