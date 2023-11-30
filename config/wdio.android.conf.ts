import {config as sharedConfig} from './wdio.shared.conf'

export const config : WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['appium'],
        capabilities: [{
            platformName: 'Android',
            'appium:deviceName': 'Pixel_133',
            'appium:platformVersion': '12.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app':'app/android/Android-NativeDemoApp-0.4.0.apk',
            "appium:fullReset": false,
            "appium:appActivity": "com.wdiodemoapp.MainActivity",
            "appium:appPackage": "com.wdiodemoapp",
        }],
        excludeDriverLogs: ['bugreport'],
    },
    
}



