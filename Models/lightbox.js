
 /**
  * @property {HTMLElement} element
  * @property {string[]} images
  * @property {string} url Image affichée
  */

export default class LightBox {
   
    static init() {
       
       // let links = document.querySelectorAll('.image-single-photographer')
      
      const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$="mp4"]'));
        console.log(links)

        const gallery = links.map(link => link.getAttribute('src'));
             
            links.forEach(link => link.addEventListener('click', e => {
                e.preventDefault()
                new LightBox(e.CurrentTarget.currentSrc.getAttribute('src'), gallery)               
            }))
    }

    /** 
     * @param {string} url Url de l'image
     * @param {string[]} gallery Chemins des images de la lightbox
     */

    constructor(url, images, ) {
        this.element = this.buildDom(url)
        this.images = images
    //    this.videos = videos
        this.loadImage(url)
    //    this.loadVideo(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    /** 
     * @param {string} url Url de l'image
     */

    loadImage(url) {
        this.url = null
        const image = new Image()
        
            const container = this.element.querySelector('.lightbox__container')
            const loader = document.createElement('div')
                  loader.classList.add('lightbox__loader')
                    container.innerHTML = '' // On vide la précédente image
                    container.appendChild(loader)
        image.onload = () => {
        //    container.removeChild(loader)
            container.appendChild(image)
            this.url = url
           console.log(url) 
           console.log(this.element)
           console.log(this.images)
           
           
        }
        image.src = url
        }
       
       

  /*  loadVideo(url) {
        this.url = null
        const video = new Image()
            const container = this.element.querySelector('.lightbox__container')
            const loader = document.createElement('div')
                  loader.classList.add('lightbox__loader')
                    container.innerHTML = '' // On vide la précédente image
                    container.appendChild(loader)
        video.onload = () => {
            container.removeChild(loader)
            container.appendChild(image)
            this.url = url
        }
       
      //  video.src = url
    }
*/


    /**
     * 
     * @param {KeyboardEvent} e 
     */

    onKeyUp(e) {
        if (e.key === 'Escape') {
            this.close(e)
        }else if (e.key === 'ArrowLeft') {
            this.prev(e)
        }else if (e.key === 'ArrowRight') {            
            this.next(e)
        }
    }

    /**
     * Fermeture de la LightBox
     * @param {MouseEvent/KeyboardEvent} e 
     */

    close(e) {
        e.preventDefault()
        this.element.classList.add('fadeOut')
        window.setTimeout(() => {
         this.element.parentElement.removeChild(this.element)   
        },500)
        document.removeEventListener('keyup', this.onKeyUp) // On supprime l'évènement
    }

    /**
     * Image suivante
     * @param {MouseEvent/KeyboardEvent} e 
     */

    next(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if(i === this.images.length -1) {
           i = -1 
        }
        this.loadImage(this.images[i + 1])
    }

    /**
     * Image précédente
     * @param {MouseEvent/KeyboardEvent} e 
     */

    prev(e) {
        e.preventDefault()
        let i = this.images.findIndex(image => image === this.url)
        if(i === 0) {
           i = this.images.length
        }
        this.loadImage(this.images[i - 1])
    }

    /** 
     * @param {string} url Url de l'image
     * @return {HTMLElement}
     */

    buildDom(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `<button class="lightbox-close">       
            <button class="lightbox-next"> </button>
            <button class="lightbox-prev"> </button>
            <div class="lightbox__container"> </div>` 
        dom.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this))
       dom.querySelector('.lightbox-next').addEventListener('click', this.next.bind(this))
        dom.querySelector('.lightbox-prev').addEventListener('click', this.prev.bind(this))

        return dom
    }
}

LightBox.init()
