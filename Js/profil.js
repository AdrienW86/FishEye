import Listbox from "../Utils/listbox.js"
import Photographer from "../Models/photographer-class.js"
import LightBox from "../Models/lightbox-class.js"
import createModal from "../Utils/modal.js"
import like from "../Utils/like.js"

Listbox()

const datas = "/datas.json"

fetch(datas)

	.then(response => response.json())
	.then(data => {		
		// Récupération de l'id du photographe dans l'url
		const photographers = data.photographers
		const params = new URL(document.location).searchParams
		const idPhotographer = params.get("id")
				
		// On recupère un objet avec le tableau des médias de chaque photographe
		let selectedPhotographer = photographers.find(photo => {
			const id = photo.id.toString()
			return id === idPhotographer
		})

		// Création de la carte de visite du photographe
		selectedPhotographer = new Photographer(selectedPhotographer)
		selectedPhotographer.createCard()
		//clavier

		createModal()
		let modalName = document.querySelector(".modal-name")
		modalName.innerHTML = selectedPhotographer.name

		like()
		LightBox.init()	
	})
