import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VisibilityPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get hideBtn () {
        return $('#hideButton');
    }

    public get removedBtn () {
        return $('#removedButton');
    }

    public get zeroWidthBtn () {
        return $('#zeroWidthButton');
    }

    public get overlappedBtn () {
        return $('#overlappedButton');
    }

    public get transparentBtn () {
        return $('#transparentButton');
    }

    public get invisibleBtn () {
        return $('#invisibleButton');
    }

    public get notdisplayedBtn () {
        return $('#notdisplayedButton');
    }

    public get offscreenBtn () {
        return $('#offscreenButton');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('visibility');
    }
}

export default new VisibilityPage();
