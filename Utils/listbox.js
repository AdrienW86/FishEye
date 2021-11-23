import LightBox from "../Models/lightbox-class.js"
import Media from "../Models/media-class.js"
import like from "./like.js"

export default async function Listbox  () {
	const datas = "/datas.json"
	let response = await fetch(datas)
	let data = await response.json()
	console.log(data)
    
	// Récupération de l'id du photographe dans l'url
	const photographers = data.photographers
	const params = new URL(document.location).searchParams
	const idPhotographer = params.get("id")	

	// On recupère un objet avec le tableau des médias de chaque photographe
	let selectedPhotographer = photographers.find(photo => {
		const id = photo.id.toString()
		return id === idPhotographer
	})
	// On fait correspondre l'id du photographe à celui du média
	const medias = data.media
	const selectedMedia = medias.filter(media => {
		const idMedia = media.photographerId
		return idMedia === selectedPhotographer.id
	})
	const filterMedia = (map, compareFn) => (a, b) => -compareFn(map(a), map(b))
	const filterLikes = (media) => media.likes
	const filterDate = (media) => new Date(media.date).getTime()
	const filterTitle = (a, b) => a - b
	const mediasLikes = [...selectedMedia].sort(filterMedia(filterLikes, filterTitle))
	const mediasDate = [...selectedMedia].sort(filterMedia(filterDate, filterTitle))
	const mediaTitle = selectedMedia.sort((a, b) => {
		if (a.title < b.title) return -1
		if (a.title > b.title) return 1
		return 0
	})
	const list = document.getElementById("liste_media") // Notre point d'attache dans le DOM
	let box = document.createElement("div")
	box.setAttribute("class", "container")
	list.appendChild(box)

	mediasLikes.forEach((media) => {
		const listOfMedia = new Media(media)
		listOfMedia.affichage()
	})
	const selectElt = document.querySelector("select")
	const selectDiv = document.querySelector(".custom-select")
	const newSelect = document.createElement("div")
	newSelect.setAttribute("tabindex", "0")
	newSelect.classList.add("new-select")	
	newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML
	selectDiv.appendChild(newSelect)
	const newMenu = document.createElement("div")
	newMenu.classList.add("select-items", "select-hide")

	let option1 = document.querySelector(".option1")
	let option2 = document.querySelector(".option2")	
	let option3 = document.querySelector(".option3")

	for (let option of selectElt.options) {
		const newOption = document.createElement("div")
		newOption.setAttribute("class", "selection")
		newOption.setAttribute("tabindex", "0")
		newOption.innerHTML = option.innerHTML
		newMenu.appendChild(newOption)

		newOption.addEventListener("click", function () {
			for(let option of selectElt.options) {
				if(option.innerHTML === this.innerHTML) {
					newSelect.innerHTML = this.innerHTML					
				}
			}
			newSelect.click()
		})

		newOption.addEventListener("keydown", function (e) {
			if(e.key === "Enter") {
				for(let option of selectElt.options) {
					if(option.innerHTML === this.innerHTML) {
						newSelect.innerHTML = this.innerHTML					
					}
				}
				newSelect.click()
			}
		})
		newSelect.click()
		newMenu.appendChild(newOption)
	}
	selectDiv.appendChild(newMenu)

	newSelect.addEventListener("keydown", function(e){
		if(e.key === "Enter") {
			newSelect.click()
		}
	})

	function launchListbox() {
		document.querySelector(".new-select")

		newSelect.addEventListener("click", function(e) {
			let rembox = document.querySelector(".container")
			rembox.remove()
			const box = document.createElement("div")
			box.setAttribute("class", "container")
			list.appendChild(box)
			e.stopPropagation()
			this.nextSibling.classList.toggle("select-hide")
			this.classList.toggle("active")

			if(newSelect.innerHTML == option1.innerHTML || newSelect.innerHTML == null) {
				mediasLikes.forEach((media) => {						
					const listOfMedia = new Media(media)
					listOfMedia.affichage()
				})
				like()
				LightBox.init()

			}else if(newSelect.innerHTML == option2.innerHTML) {
				mediasDate.forEach((media) => {		
					const listOfMedia = new Media(media)
					listOfMedia.affichage()
				})
				like()
				LightBox.init()
            
			}else if(newSelect.innerHTML == option3.innerHTML) {
				mediaTitle.forEach((media) => {
					const listOfMedia = new Media(media)
					listOfMedia.affichage()
				})
				like()
				LightBox.init()
			}	
		})
	}
	launchListbox()	
}

