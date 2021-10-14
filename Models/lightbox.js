class Diaporama {

    constructor(listImage){
        this.listImage = listImage
        this.current = null
    }

    play(){
        this.current = this.listImage[0]
    }

    next(){
        for(let i = 0; i < this.listImage.length; i++) {
            if(this.listImage[i] == this.current) {
                this.current = this.listImage[++i]
                break
            }
        }
        
    }

    previous(){
        for(let i = 0; i < this.listImage.length; i++) {
            if(this.listImage[i] == this.current) {
                this.current = this.listImage[--i]
                break
            }
        }
        
    }
}
