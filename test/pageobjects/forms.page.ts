class FormsPage{
    public get inputField(){
        return $('~text-input');
    }
    public get youHaveTyped(){
        return $('~input-text-result')
    }
}

export default new FormsPage();