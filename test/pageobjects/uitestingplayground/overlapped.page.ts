import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OverlappedPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get idTextField () {
        return $('#id');
    }

    public get nameTextField () {
        return $('#name');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('overlapped');
    }
}

export default new OverlappedPage();
