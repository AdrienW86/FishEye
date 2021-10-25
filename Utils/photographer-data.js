import  Photographer  from "/Models/photographer-class.js" 

// Localisation des données

const datas = "/datas.json"

// Récupération des données

    // Création des cartes de visites des photographes

    fetch(datas)  
        .then(response => response.json())
        .then(data => {
            let photographers = data.photographers                                                                         
            photographers.forEach((photographer)=> {
                const listOfPhotographers = new Photographer(photographer)
                      listOfPhotographers.creation() 
            })  
        })       


