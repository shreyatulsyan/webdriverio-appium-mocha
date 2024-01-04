import SwipePage from "../pageobjects/swipe.page";
import HomePage from "../pageobjects/home.page";
import { Key } from "webdriverio";
import Gestures from "../helpers/Gestures";

describe("Swipe in webdriverio", async () => {

  it("Practice: ", async() => {
    await browser.touchAction([{action: "press", element : await HomePage.Swipe},
      "release"]);
    let size = await browser.getWindowSize();
    let width = (size.width)/2;
    let startheight = (size.height)*0.8;
    let endheight = (size.height)*0.2;

    await browser.touchAction([
      {action:"longPress", x: width, y:startheight},
      {action:"moveTo", x:width, y:endheight}
      ,"release"])

  })

  xit("Swipe vertically in page using TouchAction", async () => {
    await browser.touchAction([
      { action: "press", element: await (HomePage.Swipe) },
      "release",
    ]);

    let size = await browser.getWindowSize();
    let wid = size.width / 2;
    let startHeight = size.height * 0.8;
    let endHeight = size.height * 0.1;

    for (let i = 0; i < 2; i++) {
      await driver.pause(1000);
      await browser.touchAction([
        { action: "longPress", x: wid, y: startHeight },
        { action: "moveTo", x: wid, y: endHeight },
        "release",
      ]);
      
    }
    const logo = await SwipePage.webdriverIOLogo;
    await expect(logo).toBeDisplayed();
    await driver.pause(1000);
  });

  xit("Swipe horizontally in page using TouchAction", async () => {
    //await (HomePage.Swipe).click();
    //const ele = await (HomePage.Swipe)
    await browser.touchAction([
      { action: "press", element: await HomePage.Swipe },
      "release",
    ]);

    let size = await browser.getWindowSize();
    let hei = size.height * 0.7;
    let startWidth = size.width * 0.8;
    let endWidth = size.width * 0.2;

    for (let i = 1; i < 6; i++) {
      await driver.pause(1000);
      await browser.touchAction([
        { action: "longPress", x: startWidth, y: hei },
        { action: "moveTo", x: endWidth, y: hei },
        "release",
      ]);
    }
  });

  xit("Swipe using Touch Perform", async () => {
    await (await (HomePage.Swipe)).click();
    let size = await browser.getWindowSize();
    let wid = size.width / 2;
    let startHeight = size.height * 0.8;
    let endHeight = size.height * 0.1;

    for (let i = 0; i < 2; i++) {
      await driver.pause(3000);
      await browser.touchPerform([
        {
          action: "longPress",
          options: {
            x: wid,
            y: startHeight,
          },
        },
        {
          action: "moveTo",
          options: {
            x: wid,
            y: endHeight,
          },
        },
        {
          action: "release",
        },
      ]);
    }
    await driver.pause(1000);
    const logo = await SwipePage.webdriverIOLogo;
    await expect(logo).toBeDisplayed();
  });

  xit("Swipe vertically using Action 'pointer' and pointer type 'mouse'", async () => {
    await (await (HomePage.Swipe)).click();
    let size = await browser.getWindowSize();

    let wid = size.width / 2;
    let startHeight = size.height * 0.8;
    let endHeight = size.height * 0.1;

      await browser
        .action("pointer", {
          parameters: { pointerType: "mouse" },
        })
        .move({ x: wid, y: startHeight })
        .down({ button: 0 })
        .pause(10)
        .move({ x: wid, y: endHeight })
        .up({ button: 0 })
        .perform();

    const logo = await SwipePage.webdriverIOLogo;
    await expect(logo).toBeDisplayed();

  });

  xit("Swipe horizontally using Action 'pointer' and pointer type 'mouse'", async () => {
    await (await (HomePage.Swipe)).click();
    let size = await browser.getWindowSize();
    let hei = size.height * 0.7;
    let startWidth = size.width * 0.8;
    let endWidth = size.width * 0.2;

      await browser
        .action("pointer", {
          parameters: { pointerType: "mouse" },
        })
        .move({x: startWidth, y: hei })
        .down({ button: 0 })
        .pause(10)
        .move({duration: 3000, x: endWidth, y: hei })
        .up({ button: 0 })
        .perform();

        await (driver.pause(3000));
  });

  xit("Swipe vertically using Action 'pointer' and pointer type 'touch'", async () => {
    await (await (HomePage.Swipe)).click();
    let size = await browser.getWindowSize();
    let wid = size.width / 2;
    let startHeight = size.height * 0.8;
    let endHeight = size.height * 0.1;

      await browser
        .action("pointer", {
          parameters: { pointerType: "touch" },
        })
        .move({ x: wid, y: startHeight })
        .down({ button: 0 })
        .pause(10)
        .move({ x: wid, y: endHeight })
        .up({ button: 0 })
        .perform();

    const logo = await SwipePage.webdriverIOLogo;
    await expect(logo).toBeDisplayed();
  });

  xit("Swipe vertically using Action 'wheel' and scroll method", async () => {
    await (await (HomePage.Swipe)).click();
    await (await (SwipePage.card1)).click();

    await driver.pause(5000)
    let size = await browser.getWindowSize();
    let wid = size.width / 2;
    let startHeight = size.height * 0.8;
    let endHeight = size.height * 0.1;

    //console.log(await browser.execute(() => window.scrollY)) 

    await browser
        .action("wheel")
        .scroll({
          deltaX: 0,
          deltaY: startHeight-endHeight,
          duration: 2000
      }).perform()

   // console.log(await browser.execute(() => window.scrollY)) 

    const logo = await SwipePage.webdriverIOLogo;
    
    await expect(logo).toBeDisplayed();

    await driver.pause(1000)
  });

  xit("Swipe using Gestures class", async () => {
    await (await (HomePage.Swipe)).click();
    await driver.pause(1000)
    await Gestures.checkIfDisplayedWithSwipeUp(await (SwipePage.webdriverIOLogo),2);
    await driver.pause(1000)
    const logo = await SwipePage.webdriverIOLogo;
    await expect(logo).toBeDisplayed();
    await driver.pause(1000)
  });

  xit("Swipe using Action 'key' ", async () => {
    await HomePage.Swipe.click();
    // await browser.keys(Key.ArrowDown)
    // await browser.pause(1000)
    // await browser.keys(Key.ArrowRight)

    await browser
      .action("key")
      .down(Key.ArrowDown)
      .pause(10)
      .up(Key.ArrowDown)
      .pause(1000)
      .down(Key.ArrowRight)
      .pause(10)
      .up(Key.ArrowRight)
      .perform();
  });

  xit("Wait Until method", async () => {
    await (await (HomePage.Swipe)).click();

    browser.waitUntil(async function(){
      return (await (SwipePage.card1)).isDisplayed();
    },{timeout:1000, timeoutMsg: "Card is not present"})

    await Gestures.checkIfDisplayedWithSwipeUp(await (SwipePage.webdriverIOLogo),0);

    await browser.waitUntil(async function(){
      return await (await SwipePage.webdriverIOLogo).isDisplayed();
    },{timeout:1000, timeoutMsg: "Logo is not present"})

  });

  
});
