// Création d'une constante menant vers l'api contenant les données

    const datas = "/datas.json"


class Photographers {
    
    constructor(photographes) {
        
        this.id = photographes.id
        this.name = photographes.name
        this.city = photographes.city
        this.country = photographes.country
        this.tags = photographes.tags
        this.tagline = photographes.tagline
        this.price = photographes.price
        this.portrait = photographes.portrait
    }

     createCardforPhotographers() {
        

                
                
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


fetch(datas)  
    .then(response => response.json())
    .then(data => {
        let photographers = data.photographers
        let medias = data.media

            for( let i = 0; i < photographers.length; i++) {
                const photographers = data.photographers[i]
                console.log(photographers.name)


                let list = document.getElementById("photographes")   // Notre point d'attache dans le DOM
    
                let box = document.createElement("section")         // Création du conteneur de la liste des photographes
                    box.setAttribute("class", "liste_photographes")
            
                     list.appendChild(box)
            
            
                // Pour chaque photographes, on créé une section avec ses infos
            
                    // Carte pour chaque photographe
            
                let card = document.createElement('section'); 
                    card.setAttribute("class","card")
                    box.appendChild(card) 
            
                        // Header de la carte
                   
                    let headerCard = document.createElement('div')
                        headerCard.setAttribute("class","header-card")
                        card.appendChild(headerCard)
                        headerCard.textContent = "header"
            
                            // Conteneur de la photo
            
                        let avatar = document.createElement('div')
                            avatar.setAttribute("class", "avatar")
                            headerCard.appendChild(avatar)
                            avatar.textContent = " avatar"
            
                                // Photo de profil
            
                            let picture = document.createElement('img')
                                picture.setAttribute("src", "alt")
                                picture.setAttribute("class", "photo-profil")
                                avatar.appendChild(picture)
                                picture.src = "/JS/images/"+photographers.portrait
                                
            
                            // Nom du photographe
            
                        let nameCard = document.createElement('h2')
                        nameCard.setAttribute("class", "photographer-name")
                        headerCard.appendChild(nameCard)
                        nameCard.innerHTML = photographers.name
            
                        // Main de la carte
            
                    let mainCard = document.createElement('div')
                        mainCard.setAttribute("class", "main-card")
                        card.appendChild(mainCard)
                        mainCard.textContent = "menu"
            
                            // Ville du photographe
                    
                        let city = document.createElement('h3')
                            city.setAttribute("class", "city")
                            mainCard.appendChild(city)
                            city.innerHTML = photographers.city
            
                            // Description du photographe
            
                        let description = document.createElement('p')
                            description.setAttribute("class", "description")
                            mainCard.appendChild(description)
                            description.innerHTML = photographers.tagline
            
                            // Prix
            
                        let price = document.createElement('p')
                            price.setAttribute("class", "price")
                            mainCard.appendChild(price)
                            price.innerHTML = photographers.price
            
                            // Footer de la carte
            
                    let footerCard = document.createElement('div')
                        footerCard.setAttribute("class", "footer-card")
                        card.appendChild(footerCard)
            
                            // Tag du footer de la carte
            
                        let tag = document.createElement('ul')
                            tag.setAttribute("class", "footer-tag")
                            footerCard.appendChild(tag) 
                            tag.innerHTML = photographers.tags
            
            


              //  return photographers
            } 

            for( let y = 0; y < medias.length; y++) {
                const medias = data.media[y]
               // console.log(medias)
               // return medias
            } 
        })
    
    