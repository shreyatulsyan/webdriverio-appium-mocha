class DragPage{
    public get drag1(){
        return $('//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView');
    }
    public get drag2(){
        return $('//android.view.ViewGroup[@content-desc="drop-l2"]/android.view.ViewGroup')
    }
}

export default new DragPage();