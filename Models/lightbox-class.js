export default class LightBox {
	static init () {
		const links = Array.from(document.querySelectorAll(".media-single-photographer"))
		let gallery = links.map(link => link.getAttribute("src"))
		const titles = Array.from(document.querySelectorAll(".titre-media"))
		let Arraytitles = titles.map(title => title.innerHTML)
		let main = document.getElementById("liste_media")
		let banner = document.getElementById("banner")
		
		
		links.forEach(link =>
			link.addEventListener( "click", function (e) {
				main.setAttribute("aria-hidden", "true")
				main.style.display = "none"
				banner.style.display ="none"
				banner.setAttribute("aria-hidden", "true")
				e.preventDefault()
				new LightBox(e.currentTarget.getAttribute("src"), e.currentTarget.getAttribute("value"),
					gallery, Arraytitles)
			}))

		// Clavier

		links.forEach(link =>
			link.addEventListener( "keydown", function (e) {
				let enter = e.key === "Enter"
				if(enter) {
					main.setAttribute("aria-hidden", "true")
					main.style.display = "none"
					banner.style.display ="none"
					banner.setAttribute("aria-hidden", "true")
					new LightBox(e.currentTarget.getAttribute("src"), e.currentTarget.getAttribute("value"),
						gallery, Arraytitles)
				}
			}))
	}

	constructor (url, title , gallery, Arraytitles) {
		this.element = this.buildDom(url)
		this.gallery = gallery
		this.Arraytitles = Arraytitles
		this.title = title
		this.loadMedia(url, title)
		this.onKeyUp = this.onKeyUp.bind(this)
		const box = document.querySelector(".box")
		box.appendChild(this.element)
		document.addEventListener("keyup", this.onKeyUp)
		
	}

	loadMedia (url, title) {
		this.url = null
		this.title = null
		const container = this.element.querySelector(".lightbox__container")
		const loader = document.createElement("div")
		loader.classList.add("lightbox__loader")
		const p = document.createElement("p")
		p.classList.add("lightbox-title")
		container.innerHTML = "" // evite d'afficher une deuxième image en dessous de la première
		container.setAttribute("tabindex", "-1")
		container.appendChild(loader)
		container.focus()
		
		if (url.includes("jpg")) {
			const image = new Image()
			image.setAttribute("tabindex", "0")
			image.onload = () => {
				container.removeChild(loader)
				container.appendChild(image)
				container.appendChild(p)
				this.url = url
				this.title = title				
			}			
			image.src = url
			p.innerHTML = title
		} else if (url.includes("mp4")) {
			const video = document.createElement("video")			
			container.removeChild(loader)
			container.appendChild(video)
			container.appendChild(p)
			this.url = url
			this.title = title			
			video.src = url	
			video.setAttribute("tabindex", "0")	
			video.setAttribute("controls", "")
			video.setAttribute("type", "video/mp4")
			p.innerHTML = title
		}
	}

	onKeyUp (e) {
		if (e.key === "Escape") {
			this.close(e)
		} else if (e.key === "ArrowLeft") {
			this.prev(e)
		} else if (e.key === "ArrowRight") {
			this.next(e)
		}
	}

	close (e) {
		e.preventDefault()
		this.element.classList.add("fadeOut")
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element)
		}, 500)
		document.removeEventListener("keyup", this.onKeyUp) // On supprime l'évènement
		let main = document.getElementById("liste_media")
		let banner = document.getElementById("banner")
		main.style.display = "block"
		banner.style.display ="block"
		banner.setAttribute("aria-hidden", "false")
		main.setAttribute("aria-hidden", "false")
	}

	next (e) {
		e.preventDefault()
		let positionImage = this.gallery.findIndex(media => media === this.url)
		let positionTitle = this.Arraytitles.findIndex((info) => info === this.title)

		if (positionImage === this.gallery.length - 1) {
			positionImage = -1
			positionTitle = -1
		}
		this.loadMedia(
			this.gallery[positionImage + 1],
			this.Arraytitles[positionTitle + 1]
		)
	}

	prev (e) {
		e.preventDefault()
		let positionImage = this.gallery.findIndex(media => media === this.url)
		let positionTitle = this.Arraytitles.findIndex((info) => info === this.title)

		if (positionImage == 0) {
			positionImage = this.gallery.length
			positionTitle = this.Arraytitles.length
		}
		this.loadMedia(
			this.gallery[positionImage - 1],
			this.Arraytitles[positionTitle - 1]
		)
	}
	
	buildDom () {
		const dom = document.createElement("div")
		dom.classList.add("lightbox")
		dom.innerHTML = `<button class="lightbox-close" aria-label= "image closeup view" tabindex="0"></button>      
                         <button class="lightbox-next"  aria-label= "Next image" tabindex="0"> </button>
                         <button class="lightbox-prev"  aria-label= "Previous image" tabindex="0"> </button>
                               <div class="lightbox__container"> </div>`
		dom.querySelector(".lightbox-close").addEventListener("click", this.close.bind(this))
		dom.querySelector(".lightbox-next").addEventListener("click", this.next.bind(this))
		dom.querySelector(".lightbox-prev").addEventListener("click", this.prev.bind(this))
		return dom
	}
}
