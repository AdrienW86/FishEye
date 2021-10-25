import Media from "../Models/media-class.js"
import Lightbox from "../Models/lightbox-class.js"    
import Photographer from "../Models/photographer-class.js"
import LightBox from "../Models/lightbox-class.js"
     
const datas = "/datas.json"

fetch(datas)  
    .then(response => response.json())
    .then(data => {
   
    // Récupération de l'id du photographe dans l'url
        let params = new URL (document.location).searchParams  
        let idPhotographer = params.get("id") 
        let photographers = data.photographers
        
    // On recupère un objet avec le tableau des médias de chaque photographe
        let selectedPhotographer = photographers.find(photo => {
        let id = photo.id.toString();
            return id === idPhotographer;     
    });

     // On fait correspondre l'id du photographe à celui du média
        let medias = data.media
        let selectedMedia = medias.filter(media => {
        let idMedia = media.photographerId;
            return idMedia === selectedPhotographer.id
    });  

        const liked = document.querySelectorAll(".btn-like")
              liked.forEach((btn) => btn.addEventListener("click", Like))

    // Etiquette avec le prix et le nombre de likes total
        let sticker = document.createElement('section')
            sticker.setAttribute("class","sticker")
            banner.appendChild(sticker)

        let listLikes = []

            // On additionne chacun des likes de chaque médias dans un tableau
            selectedMedia.forEach(media => {
            listLikes.push(media.likes)
               
            const total = listLikes.reduce((acc,cur) => acc +cur);        
            const svg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none"  class="total-likes" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
                        </svg>`
                       
                sticker.innerHTML = total + " " + svg + " " + selectedPhotographer.price + "€ / jour"                      
            })

        // Création de la carte de visite du photographe
            selectedPhotographer = new Photographer(selectedPhotographer)
            selectedPhotographer.createCard()
       
        // et pour chacun de ses médias on créeé une card
            selectedMedia.forEach((media)=> {                                 
                const listOfMedia = new Media(media)         
                      listOfMedia.affichage()     
            });
               
            console.log (selectedMedia)
            

       
           const btn = document.querySelectorAll('.media-single-photographer')      
                btn.forEach((btn) => btn.addEventListener('click', openLightbox))
                    console.log(btn)
                
        function openLightbox(e) { 
            LightBox.init()                   
          // listLightbox.forEach(image => {
           //     const listImage = new Lightbox(image)
                 //     listImage.loadImage()   
                  //    console.log(image)
          //  })
        }            
    })       
    
          
    

    
        
       



