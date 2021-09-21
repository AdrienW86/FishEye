// Création des diverses classes

class Photographers {
    constructor(id, name, city, country, tags, tagline, price, portrait) {
    
        this.id = photographes[i].id
        this.name = photographes[i].name
        this.city = photographes[i].city
        this.country = photographes[i].coutry
        this.tags = photographes[i].tags
        this.tagline = photographes[i].tagline
        this.price = photographes[i].price
        this.portrait = photographes[i].name
    }
}

class Media {
    id = medias[y].id
    photographerId = medias[y].photographerId
    title = medias[y].title
    image = medias[y].image
    video = medias[y].video
    tags = medias[y].tags
    likes = medias[y].likes 
    date = medias[y].date
    price = medias[y].price
}

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