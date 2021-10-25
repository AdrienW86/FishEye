export default class Diaporama {

    constructor(listImage, selector) {

        this.listImage = listImage
        this.current = null;
        this.selector = selector
        this.element = document.querySelector(selector)
    }

    init() {
        let previous = document.createElement("button");
            previous.setAttribute("class", "previous-button");
            previous.innerHTML = "<"
            this.element.appendChild(previous)

        let ul = document.createElement("ul")
        for(let image of this.listImage) {
         let li= document.createElement("li")
         let img =document.createElement("img")
            img.setAttribute("src", image);
            li.appendChild(img)
            ul.appendChild(li)
        }
        this.element.appendChild(ul)
        let next = document.createElement("button");
        next.setAttribute("class", "next-button");
        next.innerHTML = ">"
        this.element.appendChild(next)
        this.preparEvent();
        this.autoPlay();
    }

    add(image) {
        this.listImage.push(image)
    }

    play() {
        this.current = this.listImage[0]
        document.querySelector(this.selector + " li:first-child").setAttribute("class", "activ")           
    }

    next() {
        for (let i = 0 ; i < this.listImage.length; i++) {
                if(this.listImage[i] == this.current) {
                    if( i == this.listImage.length ) {
                        this.current = this.listImage[0];
                        let activ = this.element.querySelector(this.selector + " li.activ");
                           this.element.querySelector("li:first-child").setAttribute("class", "activ");
                           activ.setAttribute("class",""); 
                    }else{
                        this.current = this.listImage[++i];
                        let activ = this.element.querySelector(this.selector + " li.activ")
                           activ.nextSibling.setAttribute("class", "activ")
                    }
                activ.setAttribute("class","");
                break
            }
        }
    }

    previous() {
        for (let i = 0 ; i <= this.listImage.length; i++) {
            if(this.listImage[i] == this.current) {
                if( i == 0) {
                        this.current = this.listImage[0];
                        let activ = this.element.querySelector(this.selector + " li.activ");
                           this.element.querySelector("li:last-child").setAttribute("class", "activ");
                            
                    }else{
                        this.current = this.listImage[--i];
                        let activ = this.element.querySelector(this.selector + " li.activ")
                           activ.nextSibling.setAttribute("class", "activ")
                           activ.setAttribute("class","");
                    }
               
                activ.setAttribute("class",""); 
                break;
            }
        }
    }

    preparEvent() {
        let thisDiapo = this
        this.element.querySelector(".previous-button").addEventListener("click", function(){
            thisDiapo.previous()
        });
        this.element.querySelector(".next-button").addEventListener("click", function(){
            thisDiapo.next()
        })
    }
 
    autoPlay() {
        let thisDiapo = this
        setInterval(function() {
            thisDiapo.next()
        },5000);
    }
}