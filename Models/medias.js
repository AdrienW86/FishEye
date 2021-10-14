export default class Media {

    constructor(data) {        
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.image = data.image
        this.video = data.video
        this.tags = data.tags
        this.likes = data.likes 
        this.date = data.date
        this.price = data.price        
    }
    
    affichage() {
               
        let list = document.getElementById("liste_media")   // Notre point d'attache dans le DOM
                                                   
        // Carte du Média
            let imageCard = document.createElement("section")
                imageCard.setAttribute("class", "image-card")
                list.appendChild(imageCard)
                
            // Image du média
                let image = document.createElement("img")
                    image.setAttribute("class", "image-single-photographer")
                    image.setAttribute("src","alt")
                    image.src = "../Images/Medias/"+ this.image
                    imageCard.appendChild(image)

            // Infos sur le média
                let detailsImage = document.createElement("div")
                    detailsImage.setAttribute("class", "details_images")                  
                    imageCard.appendChild(detailsImage)

                // Titre du média
                    let titleImage = document.createElement("p")
                        titleImage.setAttribute("class", "titre-media")
                        titleImage.innerHTML = this.title
                        detailsImage.appendChild(titleImage)

                    let likes = document.createElement("p")
                        likes.setAttribute("class", "likes")
                        likes.innerHTML = this.likes
                        detailsImage.appendChild(likes)                                                                                               
    }
}

