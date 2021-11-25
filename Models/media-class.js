export default class Media {
	constructor (data) {
		this.id = data.id
		this.photographerId = data.photographerId
		this.title = data.title
		this.video = data.video
		this.image = data.image
		this.tags = data.tags
		this.likes = data.likes
		this.date = data.date
		this.price = data.price
		this.altText = data.altText
	}

	affichage () {
		const box = document.querySelector(".container") // Notre point d'attache dans le DOM
		const svg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" class="heart" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="#911C1C"/>
                    </svg> `
		
		// Carte du Média
		const mediaCard = document.createElement("figure")
		mediaCard.setAttribute("class", "media-card")
		box.appendChild(mediaCard)

		// Carte du Média
		const buttonCard = document.createElement("div")
		buttonCard.setAttribute("class", "btn-card")
		//buttonCard.setAttribute("tabindex", "1")
		mediaCard.appendChild(buttonCard)

		// Image du média
		if (this.image) {
			const image = document.createElement("img")
			image.setAttribute("class", "media-single-photographer")
			image.setAttribute("tabindex", "0")
			image.setAttribute("alt", "photo")
			image.setAttribute("alt-text", this.altText)
			image.setAttribute("value", this.title)
			image.src = "../images/" + this.photographerId + "/" + this.image
			buttonCard.appendChild(image)

		// Vidéo du média
		} else if (this.video) {			
			const video = document.createElement("video")
			video.setAttribute("class", "media-single-photographer")
			video.setAttribute("tabindex", "0")
			video.setAttribute("alt", "vidéo")
			video.setAttribute("alt-text", this.altText)
			video.setAttribute("value", this.title)
			video.src = "../images/" + this.photographerId + "/" + this.video + "#t=0.1"
			video.setAttribute("type", "video/mp4")
			buttonCard.appendChild(video)

			// Contrôle de la vidéo
			const controller = document.createElement("div")
			controller.setAttribute("class", "controls")
			buttonCard.appendChild(controller)
		}
		//Infos sur le média
		const detailsMedia = document.createElement("div")
		detailsMedia.setAttribute("class", "details_images")
		mediaCard.appendChild(detailsMedia)

		// Titre du média
		const titleMedia = document.createElement("p")
		titleMedia.setAttribute("class", "titre-media")
		titleMedia.innerHTML = this.title
		detailsMedia.appendChild(titleMedia)

		//Nombres de likes
		const nmbLikes = document.createElement("div")
		nmbLikes.setAttribute("class", "nombre")
		nmbLikes.setAttribute("aria-label", "nombre de likes")
		nmbLikes.innerHTML = this.likes
		detailsMedia.appendChild(nmbLikes)

		// Svg des likes
		const likes = document.createElement("div")
		likes.setAttribute("class", "btn-like")
		likes.setAttribute("tabindex", "0")
		likes.setAttribute("aria-label", "likes")
		likes.innerHTML = svg
		detailsMedia.appendChild(likes)
	}
}
