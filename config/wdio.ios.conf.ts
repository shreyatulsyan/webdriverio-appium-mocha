import {config as sharedConfig} from './wdio.shared.conf'

export const config : WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['appium'],
        capabilities: [{
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 14 Pro Max',
            'appium:platformVersion': '16.2',
            'appium:automationName': 'XCUITest',
            'appium:app':'app/ios/iOS-Simulator-NativeDemoApp-0.4.0.app.zip',
            "appium:fullReset": false,
        }],
        excludeDriverLogs: ['bugreport'],
    },
    
}



