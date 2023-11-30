class SwipePage{
    
    public get card1() {
        if(driver.isAndroid)
        return $('(//android.view.ViewGroup[@content-desc="card"])[1]')
        else
        return $('(//XCUIElementTypeOther[@name="card"])[1]')
    }
    public get card2(){
        return $('(//android.view.ViewGroup[@content-desc="card"])[2]')
    }
    public get webdriverIOLogo(){
        return $('~WebdriverIO logo')
    }
}


//XCUIElementTypeStaticText[@name="You found me!!!"]

export default new SwipePage();