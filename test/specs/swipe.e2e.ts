import SwipePage from '../pageobjects/swipe.page'
import HomePage from '../pageobjects/home.page'
import { Key } from 'webdriverio'
import swipePage from '../pageobjects/swipe.page'

describe('Swipe in webdriverio', async() => {
    it('Swipe vertically in page using Touch Action', async () => {
        await browser.touchAction([
                    {action:'press',element:await (HomePage.Swipe)},
                    'release'])
       
       let size = await browser.getWindowSize();
        let wid = (size.width)/2;
        let startHeight = (size.height)*0.8;
        let endHeight = (size.height)*0.1;
        
        
        for(let i=0;i<2;i++){
        await driver.pause(1000);
        await browser.touchAction([
            {action:'longPress',x:wid,y:startHeight},
            {action:'moveTo',x:wid,y:endHeight},       
            'release',
        ])
        const logo = await (SwipePage.webdriverIOLogo)
        await expect(logo).toBeDisplayed();
    }
           
    await driver.pause(1000);
    }) 
    xit('Swipe horizontally in page using Touch Action', async () => {
        //await (HomePage.Swipe).click();
        //const ele = await (HomePage.Swipe)
        await browser.touchAction([
                    {action:'press',element:await (HomePage.Swipe)},
                    'release'])
       
       let size = await browser.getWindowSize();
        let hei = (size.height)*0.7;
        let startWidth = (size.width)*0.8;
        let endWidth = (size.width)*0.2;
        
        
        for(let i=1;i<6;i++){
        await driver.pause(1000);
        await browser.touchAction([
            {action:'longPress',x:startWidth,y:hei},
            {action:'moveTo',x:endWidth,y:hei},
            'release',
        ])
    }
            
        
    }) 
    xit('Swipe using Touch Perform', async () => {       
        
    }) 
    xit('Swipe using Action', async () => {    
    }) 
    xit('Swipe using Gestures class', async () => {       
        
    }) 
    xit('Swipe using Keys', async () => {       
        await (HomePage.Swipe).click();
        // await browser.keys(Key.ArrowDown)
        // await browser.pause(1000)
        // await browser.keys(Key.ArrowRight)

        await browser.action('key')
        .down(Key.ArrowDown)
        .pause(10)
        .up(Key.ArrowDown)
        .pause(1000)
        .down(Key.ArrowRight)
        .pause(10)
        .up(Key.ArrowRight)
        .perform()
    }) 
    xit('Wait Until method', async () => {       
        
    }) 
   })