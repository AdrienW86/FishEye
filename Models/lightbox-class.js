export default class LightBox {
 
    static init() {
  
        let links =  Array.from(document.querySelectorAll(".media-single-photographer"));           
        let titles = Array.from(document.querySelectorAll(".titre-media"));
        let gallery = links.map(link => link.getAttribute("src"));
            titles = titles.map(title => title.innerHTML)

            console.log(titles)
            
        links.forEach(link => 
            link.addEventListener('click', function(e)   {
            e.preventDefault();
            console.log(e.currentTarget)
            new LightBox(e.currentTarget.getAttribute("src"), 
            gallery, titles )
            })          
        )
    } 
    
    constructor(url, gallery, titles, currentTitle)
     {  
        this.element = this.buildDom(url) 
        this.gallery = gallery 
        this.titles = titles
        this.currentTitle = currentTitle
        this.loadImage(url, currentTitle)
        this.onKeyUp = this.onKeyUp.bind(this)
        const box = document.querySelector('.box')
        box.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }
   
    loadImage(url, currentTitle) {
        this.url = null
        this.currentTitle = null    
        const container = this.element.querySelector('.lightbox__container')
        const loader = document.createElement('div') 
              loader.classList.add('lightbox__loader')       
        const p = document.createElement('p')
              p.classList.add('lightbox-title')
              container.innerHTML = ""      
              container.appendChild(loader)
              console.log(url)
        if(url.includes("jpg")) {
            const image = new Image()  
            image.onload = () => {         
                container.removeChild(loader)  
                container.appendChild(image)
                container.appendChild(p)
                this.url = url 
                this.currentTitle = currentTitle
            }
            image.src = url
            p.innerHTML = currentTitle
        }else if (url.includes("mp4")){ 
            const video = document.createElement('video')
            video.onload = () => {         
                container.removeChild(loader)  
                container.appendChild(video)
                this.url = url 
                this.currentTitle = currentTitle
            }                
            video.src = url
            video.setAttribute('controls', "")   
        }
    }
                                                                                               
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
            console.log(this.element.parentElement)
         this.element.parentElement.removeChild(this.element)   
        },500)
        document.removeEventListener('keyup', this.onKeyUp) // On supprime l'évènement
        location.reload()
    }

    next(e) {
        e.preventDefault()
        let i = this.gallery.findIndex(media => media === this.url)
        if(i === this.gallery.length -1) {
           i = -1 
        }
        this.loadImage(this.gallery[i + 1])

        let boxTitle = this.titles.findIndex(title => title === this.title)
            this.titles[boxTitle + 1]
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
                               <div class="lightbox__container"> </div>` 
              dom.querySelector('.lightbox-close').addEventListener('click', this.close.bind(this))
              dom.querySelector('.lightbox-next').addEventListener('click', this.next.bind(this))
              dom.querySelector('.lightbox-prev').addEventListener('click', this.prev.bind(this))
       return dom
    }
}
