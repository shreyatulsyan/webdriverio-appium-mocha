import HomePage from "../pageobjects/home.page"
import SwipePage from "../pageobjects/swipe.page"

describe('Navigate to browser from app',async ()=>{
    it('Webview: ',async ()=>{
        await (await HomePage.Swipe).click()
        await (await SwipePage.card1).click()

        await browser.pause(5000)

        const allContexts = await browser.getContexts();
        await browser.pause(2000)

        for(let each of allContexts){
            console.log(each);
        }

        //await WebView.sw;

        //let currentContext = allContexts[1].toString();
        //await browser.pause(2000)
        // await browser.switchContext(currentContext)
        // await browser.pause(2000)
        //await browser.switchContext(allContexts[1].toString())
        //console.log(await browser.getUrl())
        //await (await SwipePage.webdriverioLinkInWeb).isDisplayed();
        //NATIVE_APP
        //WEBVIEW_chrome
    })
})
    