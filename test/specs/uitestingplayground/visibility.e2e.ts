import VisibilityPage from  '../../pageobjects/uitestingplayground/visibility.page';

describe('UI Testing Playground', () => {
    it('all the buttons should be visible at first loading of the page', async () => {
        await VisibilityPage.open();
        await expect(VisibilityPage.hideBtn).toBeExisting();
        await expect(VisibilityPage.removedBtn).toBeExisting();
        await expect(VisibilityPage.zeroWidthBtn).toBeExisting();
        await expect(VisibilityPage.overlappedBtn).toBeExisting();
        await expect(VisibilityPage.transparentBtn).toBeExisting();
        await expect(VisibilityPage.invisibleBtn).toBeExisting();
        await expect(VisibilityPage.notdisplayedBtn).toBeExisting();
        await expect(VisibilityPage.offscreenBtn).toBeExisting();
    });

    it('few button should get hidden after clicking the hide button', async () => {
        await VisibilityPage.hideBtn.click();
        await expect(VisibilityPage.hideBtn).toBeDisplayed();
        await expect(VisibilityPage.zeroWidthBtn).not.toBeDisplayed();
        await expect(VisibilityPage.overlappedBtn).toBeDisplayed();
        await expect(VisibilityPage.transparentBtn).not.toBeDisplayed();
        await expect(VisibilityPage.invisibleBtn).not.toBeDisplayed();
        await expect(VisibilityPage.notdisplayedBtn).not.toBeDisplayed();
        await expect(VisibilityPage.offscreenBtn).toBeDisplayed();
    });

});


