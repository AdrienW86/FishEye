// Création des diverses classes

export default class Photographer {

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.city = data.city
        this.country = data.country
        this.tags = data.tags
        this.tagline = data.tagline
        this.price = data.price
        this.portrait = data.portrait
    }
    creation() {
        let list = document.getElementById("photographes")   // Notre point d'attache dans le DOM
              
        // Carte pour chaque photographe            
            let card = document.createElement('section'); 
                    card.setAttribute("class","card")
                    list.appendChild(card) 
            
            // Header de la carte                  
                let headerCard = document.createElement('button')
                    headerCard.setAttribute("class","header-card")
                    card.appendChild(headerCard)
                                 
                // Conteneur de la photo            
                    let avatar = document.createElement('div')
                        avatar.setAttribute("class", "avatar")
                        headerCard.appendChild(avatar)
            
                    // Photo de profil
                        let picture = document.createElement('img')
                            picture.setAttribute("src", "alt")
                            picture.setAttribute("class", "photo-profil")
                            avatar.appendChild(picture)
                            picture.src = "/JS/images/"+ this.portrait
                                            
                        // Nom du photographe            
                            let nameCard = document.createElement('h2')
                                nameCard.setAttribute("class", "photographer-name")
                                headerCard.appendChild(nameCard)
                                nameCard.innerHTML = this.name 

            // Main de la carte           
                let mainCard = document.createElement('div')
                    mainCard.setAttribute("class", "main-card")
                    card.appendChild(mainCard)
            
                // Ville du photographe                   
                    let city = document.createElement('h3')
                        city.setAttribute("class", "city")
                        mainCard.appendChild(city)
                        city.innerHTML = this.city + ", " + this.country
            
                    // Description du photographe           
                        let description = document.createElement('p')
                            description.setAttribute("class", "description")
                            mainCard.appendChild(description)
                            description.innerHTML = this.tagline
            
                    // Prix            
                        let price = document.createElement('p')
                            price.setAttribute("class", "price")
                            mainCard.appendChild(price)
                            price.innerHTML = this.price + "€/jour"
            
             // Footer de la carte           
                let footerCard = document.createElement('div')
                    footerCard.setAttribute("class", "footer-card")
                    card.appendChild(footerCard)
            
                // Tag du footer de la carte           
                    let tag = document.createElement('ul')
                        tag.setAttribute("class", "footer-tag")
                        footerCard.appendChild(tag) 

                    let items = this.tags
                        items.forEach(function(item) {
                            let li = document.createElement('li')
                                li.setAttribute("class","footer-tag-item");
                                tag.appendChild(li)
                                li.innerHTML = "#"+ item
                        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                
              const headerBtn = document.querySelectorAll('.header-card')
    }                                                                              
}

















class ObjectFactory {
    constructor() {
        this.createObject = function(type) {
            let object 
            if(type === 'photographe') object = new Photographer();
            else if (type === "media") object = new Media();
            object.create = function() {
                return "creation de l'objet"
            }
        }
    }
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



class Media {
    constructor(id, photographerId, title, tags, likes, date, price) {
   
        this.id = id
        this.photographerId = photographerId
        this.title = title
        this.image = image
        this.video = video
        this.tags = tags
        this.likes = likes 
        this.date = date
        this.price = price
    }
}

class Image extends Media {
    constructor(id, photographerId, title, tags, likes, date, price) {
        super(id, photographerId, title, tags, likes, date, price)
    }
}

class Video extends Media {
    constructor(id, photographerId, title, tags, likes, date, price) {
        super(id, photographerId, title, tags, likes, date, price)
    }
}

    // Déclaration de la fonction de amnière globale pour accéder à toutes les datas


// Création des éléments pour la page d'accueil avec les information de notre data  

//let photographers = []