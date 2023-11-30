import { $ } from '@wdio/globals'

class HomePage{

    public get Forms() {
        return $('~Forms');
    }   

    public get FormComponentsText(){
        return $('//android.widget.ScrollView[@content-desc="Forms-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
    }
    
    public get Swipe() {
        return $('~Swipe');
    }

    public get Drag() {
        return $('~Drag');
    }
}

export default new HomePage();
