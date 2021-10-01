// Import des classes

import  Photographer  from "./objet.js"

// Localisation des données

const datas = "/datas.json"

// Récupération des données

fetch(datas)  
    .then(response => response.json())
    .then(data => {
        let photographers = data.photographers
        let medias = data.media
            console.log(medias)
           
            photographers.forEach((photographer)=> {
            const listOfPhotographers = new Photographer(photographer)
                  listOfPhotographers.creation()
            })
})                              

                                

    
    

       