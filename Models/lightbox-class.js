export default class LightBox {
 
    static init() {
  
        let links = Array.from(document.querySelectorAll(".media-single-photographer"));    
            console.log(links); 
        let gallery = links.map(link => link.getAttribute("src"));
            console.log(gallery);
            
        links.forEach(link => 
            link.addEventListener('click', function(e)   {
            e.preventDefault();
            console.log(e.currentTarget)
            new LightBox(e.currentTarget.getAttribute("src"), gallery)
            })
           
        )
    } 
    





    constructor(url, gallery)
     {  
        this.element = this.buildDom(url) 
        this.gallery = gallery 
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }
   
   


    loadImage(url) {
        this.url = null
        const image = new Image()
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div')
        const video = document.createElement('video')
        video.setAttribute('controls', "")
        loader.classList.add('lightbox__loader')
        container.innerHTML = ""
        container.appendChild(loader)
        image.onload = () => {         
            container.removeChild(loader)  
            container.appendChild(image)
            this.url = url 
          }
          image.src = url
       //   video.src = url
    }
       



     
        
           
           
              //      container.innerHTML = '' // On vide la précédente image   *//*
                    
       
       
   
       
       
    

    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e)
        }else if (e.key === 'ArrowLeft') {
            this.prev(e)
        }else if (e.key === 'ArrowRight') {            
            this.next(e)
        }
    }
    close(e) {
        e.preventDefault()
        this.element.classList.add('fadeOut')
        window.setTimeout(() => {
         this.element.parentElement.removeChild(this.element)   
        },500)
        document.removeEventListener('keyup', this.onKeyUp) // On supprime l'évènement
    }

    next(e) {
        e.preventDefault()
        let i = this.gallery.findIndex(media => media === this.url)
        if(i === this.gallery.length -1) {
           i = -1 
        }
        this.loadImage(this.gallery[i + 1])
    }


    prev(e) {
        e.preventDefault()
        let i = this.gallery.findIndex(media => media === this.url)
        if(i === 0) {
           i = this.gallery.length
        }
        this.loadImage(this.gallery[i - 1])
    }

    /** 
     * @param {string} url Url de l'image
     * @return {HTMLElement}
     */

    buildDom(url) 
    {
        const dom = document.createElement('div')
              dom.classList.add('lightbox')
              dom.innerHTML = `<button class="lightbox-close">       
                               <button class="lightbox-next"> </button>
                               <button class="lightbox-prev"> </button>
                                    <div class="lightbox__container"> 
                                     
                                    </div>` 
              dom.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this))
              dom.querySelector('.lightbox-next').addEventListener('click', this.next.bind(this))
              dom.querySelector('.lightbox-prev').addEventListener('click', this.prev.bind(this))
       return dom
    }
}
