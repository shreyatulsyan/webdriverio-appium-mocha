import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage{
    /**
     * define selectors using getter methods
     */
    public get Forms() {
        return $('~Forms');
    }

    public get FormComponentsText(){
        return $('//android.widget.ScrollView[@content-desc="Forms-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // public async login (username: string, password: string) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

}

export default new HomePage();
