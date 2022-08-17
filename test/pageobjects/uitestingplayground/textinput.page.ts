import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TextInputPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get textInputField () {
        return $('#newButtonName');
    }

    public get updateBtn () {
        return $('#updatingButton');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('textinput');
    }
}

export default new TextInputPage();
