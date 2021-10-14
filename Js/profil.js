// Import des classes
import Media from "/Models/medias.js"
import Photographer from "../Models/photographer-class.js"

// Localisation des données
        
const datas = "/datas.json"

// Récupération des données

fetch(datas)  
    .then(response => response.json())
    .then(data => {
        
    // Récupération de l'id du photographe dans l'url
        let params = new URL (document.location).searchParams  
        let idPhotographer = params.get("id")  

    // Création des variables pour les photographes et les médias
        let photographers = data.photographers
        let medias = data.media
                                                
        let selectedPhotographer = photographers.find(photo => {
        let id = photo.id.toString();
            return id === idPhotographer;
        });

       

        let selectedMedia = medias.filter(media => {
            let idMedia = media.photographerId;
            return idMedia === selectedPhotographer.id
        })

// Création de la carte de visite du photographe

    selectedPhotographer = new Photographer(selectedPhotographer)
    selectedPhotographer.createCard()

// Création des cartes médias du photographe

    selectedMedia.forEach((media)=> {                                 
        const listOfMedia = new Media(media)         
              listOfMedia.affichage()  
    }) 
       // Etiquette
       let sticker = document.createElement('section')
       sticker.setAttribute("class","sticker")
       banner.appendChild(sticker)
       sticker.innerHTML =   " / jour"                                                                                                                      
})  
                    
                   