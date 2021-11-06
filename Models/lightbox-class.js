export default class LightBox {
	static init () {
		const links = Array.from(document.querySelectorAll(".media-single-photographer"))
		const gallery = links.map(link => link.getAttribute("src"))
		let titles = Array.from(document.querySelectorAll(".titre-media"))
		titles = titles.map(title => title.innerHTML)

		console.log(titles)

		console.log(gallery)

		links.forEach(link =>
			link.addEventListener("click", function (e) {
				e.preventDefault()
				console.log(e.currentTarget)
				console.log(titles)
				new LightBox(e.currentTarget.getAttribute("src"),
					gallery, titles)
			})
		)
	}

	constructor (url, gallery, titles) {
		this.element = this.buildDom(url)
		this.gallery = gallery
		this.titles = titles
		console.log(titles)
		this.loadImage(url, titles)
		this.onKeyUp = this.onKeyUp.bind(this)
		const box = document.querySelector(".box")
		box.appendChild(this.element)
		document.addEventListener("keyup", this.onKeyUp)
	}

	loadImage (url, title) {
		this.url = null
		this.title = null
		const container = this.element.querySelector(".lightbox__container")
		const loader = document.createElement("div")
		loader.classList.add("lightbox__loader")
		const p = document.createElement("p")
		p.classList.add("lightbox-title")
		container.innerHTML = "" // evite d'afficher une deuxième image en dessous de la première
		container.appendChild(loader)
		console.log(url)
		if (url.includes("jpg")) {
			const image = new Image()
			image.onload = () => {
				container.removeChild(loader)
				container.appendChild(image)
				container.appendChild(p)
				this.url = url
				this.title = title
			}
			image.src = url
			p.innerHTML = title[0]
		} else if (url.includes("mp4")) {
			const video = document.createElement("video")
			video.load = () => {
				container.removeChild(loader)
				container.appendChild(video)
				container.appendChild(p)
				this.url = url
				this.title = title
			}
			video.src = url
			video.setAttribute("controls", "")
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
			console.log(this.element.parentElement)
			this.element.parentElement.removeChild(this.element)
		}, 500)
		document.removeEventListener("keyup", this.onKeyUp) // On supprime l'évènement
	}

	next (e) {
		e.preventDefault()
		let positionImage = this.gallery.findIndex(media => media === this.url)
		let positionTitle = this.titles.findIndex((info) => info === this.title)

		if (positionImage === this.gallery.length - 1) {
			positionImage = -1
			positionTitle = -1
		}
		this.loadImage(
			this.gallery[positionImage + 1],
			this.title[positionTitle + 1]
		)
	}

	prev (e) {
		e.preventDefault()
		let i = this.gallery.findIndex(media => media === this.url)
		if (i === 0) {
			i = this.gallery.length
		}
		this.loadImage(this.gallery[i - 1])
	}

	/**
     * @param {string} _url Url de l'image
     * @return {HTMLElement}
     */

	buildDom () {
		const dom = document.createElement("div")
		dom.classList.add("lightbox")
		dom.innerHTML = `<button class="lightbox-close">       
                               <button class="lightbox-next"> </button>
                               <button class="lightbox-prev"> </button>
                               <div class="lightbox__container"> </div>`
		dom.querySelector(".lightbox-close").addEventListener("click", this.close.bind(this))
		dom.querySelector(".lightbox-next").addEventListener("click", this.next.bind(this))
		dom.querySelector(".lightbox-prev").addEventListener("click", this.prev.bind(this))
		return dom
	}
}
