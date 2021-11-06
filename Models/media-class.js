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
	}

	affichage () {
		const list = document.getElementById("liste_media") // Notre point d'attache dans le DOM
		const svg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" class="heart" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="#911C1C"/>
                    </svg> `

		// Carte du Média
		const imageCard = document.createElement("section")
		imageCard.setAttribute("class", "image-card")
		list.appendChild(imageCard)

		// Carte du Média
		const buttonCard = document.createElement("section")
		buttonCard.setAttribute("class", "btn-card")
		imageCard.appendChild(buttonCard)

		// Image du média
		if (this.image) {
			const image = document.createElement("img")
			image.setAttribute("class", "media-single-photographer")
			image.setAttribute("alt", "photo")
			image.src = "../images/" + this.photographerId + "/" + this.image
			buttonCard.appendChild(image)

		// Vidéo du média
		} else if (this.video) {			
			const video = document.createElement("video")
			video.setAttribute("class", "media-single-photographer")
			video.setAttribute("tabindex", "0")
			video.setAttribute("controls", video.src)
			video.src = "../images/" + this.photographerId + "/" + this.video + "#t=0.1"
			video.setAttribute("type", "video/mp4")
			buttonCard.appendChild(video)

			// Contrôle de la vidéo
			const controller = document.createElement("div")
			controller.setAttribute("class", "controls")
			buttonCard.appendChild(controller)
		}
		// Infos sur le média
		const detailsImage = document.createElement("div")
		detailsImage.setAttribute("class", "details_images")
		imageCard.appendChild(detailsImage)

		// Titre du média
		const titleImage = document.createElement("p")
		titleImage.setAttribute("class", "titre-media")
		titleImage.innerHTML = this.title
		detailsImage.appendChild(titleImage)

		//Nombres de likes
		const nmbLikes = document.createElement("div")
		nmbLikes.setAttribute("class", "nombre")
		nmbLikes.innerHTML = this.likes
		detailsImage.appendChild(nmbLikes)

		// Svg des likes
		const likes = document.createElement("div")
		likes.setAttribute("class", "btn-like")
		likes.innerHTML = svg
		detailsImage.appendChild(likes)
	}
}
