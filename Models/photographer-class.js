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
                let headerCard = document.createElement('a')
                    headerCard.setAttribute("class","header-card")
                    headerCard.setAttribute("href", "photographes.html?id=" + this.id)
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
                            picture.src = "../Images/"+ this.portrait
                                            
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
    }

    createCard() {
              
        // Bannière pour chaque photographe            
            let bannerPhotographer = document.createElement('section'); 
            bannerPhotographer.setAttribute("class","banner-photographer")
            banner.appendChild(bannerPhotographer) 
        
        // Infos de la bannière                  
            let description = document.createElement('div')
                description.setAttribute("class","description-photographer")                       
                bannerPhotographer.appendChild(description)

            // Nom du photographe

                let onePhotographerName = document.createElement('h2')
                    onePhotographerName.setAttribute("class", "photographer-name")
                    onePhotographerName.innerHTML = this.name
                    description.appendChild(onePhotographerName)

            // Localisation du photographe

                let onePhotographerCity = document.createElement('h3')
                    onePhotographerCity.setAttribute("class", "city")
                    onePhotographerCity.innerHTML = this.city + ", " + this.country
                    description.appendChild(onePhotographerCity)

            // Description du photographe

                let onePhotographerTagline = document.createElement('p')
                    onePhotographerTagline.setAttribute("class", "description")
                    onePhotographerTagline.innerHTML = this.tagline
                    description.appendChild(onePhotographerTagline)

                // Hashtag du phototgraphe

                    let tag = document.createElement('ul')
                        tag.setAttribute("class", "footer-tag")
                        description.appendChild(tag) 

                        let items = this.tags
                            items.forEach(function(item) {
                                let li = document.createElement('li')
                                    li.setAttribute("class","footer-tag-item");                                            
                                    li.innerHTML = "#"+ item
                                    tag.appendChild(li)
                            }) 
                    
        // Bouton de la modal
            let boxBtn = document.createElement('div')
                boxBtn.setAttribute("class","box-btn")                       
                bannerPhotographer.appendChild(boxBtn)

                let modalBtn = document.createElement('btn')
                    modalBtn.setAttribute("class", "modal-btn")
                    modalBtn.setAttribute("type","submit")
                    modalBtn.innerHTML = "Contactez-moi"
                    boxBtn.appendChild(modalBtn)

        // Conteneur de la photo
            let avatar = document.createElement('div')                    
                avatar.setAttribute("class","single-avatar")                       
                bannerPhotographer.appendChild(avatar)

            // Photo de profil
                let picture = document.createElement('img')
                    picture.setAttribute("src", "alt")
                    picture.setAttribute("class", "photo-profil")
                    avatar.appendChild(picture)
                    picture.src = "../Images/"+ this.portrait  
    }
}




















