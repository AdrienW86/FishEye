// Import des classes

import  Photographer  from "/Models/photographer-class.js"

// Localisation des données

const datas = "/datas.json"

// Récupération des données

fetch(datas)  
    .then(response => response.json())
    .then(data => {
        let photographers = data.photographers
            console.log(photographers)
                                                                         
            photographers.forEach((photographer)=> {
            const listOfPhotographers = new Photographer(photographer)
                  listOfPhotographers.creation() 
                  
            }) 
          //  const headerBtn = document.querySelectorAll('.header-card')
         //   headerBtn.forEach((btn) => btn.addEventListener("click", showDetails)) 
            
         //   function  showDetails(id) {
           //     console.log(id)
               // window.location ="./photographes.html"            
            }    
)                              



    
    

       