class FormsPage{
    public get inputField(){
        return $('~text-input');
    }
    public get youHaveTyped(){
        return $('~input-text-result')
    }
    public get switch(){
        return $('//android.widget.Switch[@content-desc="switch"]')
    }

    public get switchText(){
        return $('~switch-text')
    }

    public get dropDown(){
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')
    }

    public get listInDropdown(){
        return $(`//*[@resource-id='com.wdiodemoapp:id/select_dialog_listview']`)
    }
}

export default new FormsPage();