import DragPage from '../pageobjects/drag.page'
import HomePage from '../pageobjects/home.page'
describe('Swipe in webdriverio', async() => {  
    xit('Drag and drop in page using Drag and Drop method', async () => {
        
    await browser.touchAction([
                {action:'press',element:await HomePage.Drag},
                'release'])

    await (await DragPage.drag1).dragAndDrop((await DragPage.drag2))
    await driver.pause(2000);
    
}) 
xit('Drag and drop in page using Touch Actions method', async () => {

    await browser.touchAction([
                {action:'press',element:await HomePage.Drag},
                'release'])
    
    await browser.touchAction([
        {action:'press',element:await DragPage.drag1},
        {action:'moveTo',element:await DragPage.drag2},
        'release',
    ])
    await driver.pause(2000);
    
}) 
})