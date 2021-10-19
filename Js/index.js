// Import des classes

import  Photographer  from "/Models/photographer-class.js"

// Localisation des données

const datas = "/datas.json"

// Récupération des données

async function display() {
    const response = await fetch
    if (!response.ok) {

        fetch(datas)  
        .then(response => response.json())
        .then(data => {
            let photographers = data.photographers                                                                         
                photographers.forEach((photographer)=> {
                const listOfPhotographers = new Photographer(photographer)
                      listOfPhotographers.creation()                   
                })                   
        })       


    }
}
    
display()                           



    
    

       