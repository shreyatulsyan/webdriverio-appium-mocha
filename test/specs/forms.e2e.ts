import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page'
import FormsPage from '../pageobjects/forms.page'

describe('Forms Page in webdriverio', async() => {
    it('Click on forms page', async () => {
        await (HomePage.Forms).click();
        await expect(await HomePage.FormComponentsText).toHaveText('Form components');
    })
    it('Validate typed value', async () => {
        await (FormsPage.inputField).setValue('AnyValue');
        await expect(await FormsPage.youHaveTyped).toHaveText('AnyValue');
    })
})

