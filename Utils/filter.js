import Media from "../Models/media-class.js"
import { selectedMedia } from "../Js/profil.js"
import LightBox from "../Models/lightbox-class.js"
import like from "../Utils/like.js"
export default function filter () {

	// Affichage par trie des medias :
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

	// Listbox 
	const list = document.getElementById("liste_media") // Notre point d'attache dans le DOM
	const box = document.createElement("div")
	box.setAttribute("class", "container")
	list.appendChild(box)

	const selectElt = document.querySelector("select")
	const selectDiv = document.querySelector(".custom-select")
	const newSelect = document.createElement("div")
	newSelect.classList.add("new-select")	
	newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML
	selectDiv.appendChild(newSelect)
	const newMenu = document.createElement("div")
	newMenu.classList.add("select-items", "select-hide")

	let selectedFilter =  document.querySelector(".new-select").innerHTML
		
	const newOption1 = document.createElement("div")
	const newOption2 = document.createElement("div")
	const newOption3 = document.createElement("div")
	newOption1.innerHTML = "popularité"
	newOption2.innerHTML = "date"
	newOption3.innerHTML = "titre"
	newMenu.appendChild(newOption1)
	newMenu.appendChild(newOption2)
	newMenu.appendChild(newOption3)
	console.log(newOption1)
		
	newOption1.addEventListener("click", function (e) {
		e.preventDefault()
		let	rembox = document.querySelector(".container")
		rembox.remove()
		const box = document.createElement("div")
		box.setAttribute("class", "container")
		list.appendChild(box)
		newSelect.innerHTML = newOption1.innerHTML
		newOption1.remove()			
		newSelect.click()						
		mediasLikes.forEach((media) => {		
			const listOfMedia = new Media(media)
			listOfMedia.affichage()
		})
		like()
		LightBox.init()	
	})
	newOption2.addEventListener("click", function (e) {
		e.preventDefault()
		let	rembox = document.querySelector(".container")
		rembox.remove()
		const box = document.createElement("div")
		box.setAttribute("class", "container")
		list.appendChild(box)
		newSelect.innerHTML = newOption2.innerHTML
		newOption2.remove()
		newSelect.click()
		mediasDate.forEach((media) => {
			const listOfMedia = new Media(media)
			listOfMedia.affichage()			
		})
		like()
		LightBox.init()	
	})
	newOption3.addEventListener("click", function (e) {
		e.preventDefault()
		let	rembox = document.querySelector(".container")
		rembox.remove()
		const box = document.createElement("div")
		box.setAttribute("class", "container")
		list.appendChild(box)
		newSelect.innerHTML = newOption3.innerHTML
		newOption1.remove()
		newSelect.click()
		mediaTitle.forEach((media) => {
			const listOfMedia = new Media(media)
			listOfMedia.affichage()			
		})
		like()
		LightBox.init()	
	})
	selectDiv.appendChild(newMenu)
	newSelect.addEventListener("click", function filtre (e) {				
		e.stopPropagation()
		this.nextSibling.classList.toggle("select-hide")
		this.classList.toggle("active")		
	})			
	let option1 = document.querySelector(".option1").innerHTML
	let option2 = document.querySelector(".option2").innerHTML	
	let option3 = document.querySelector(".option3").innerHTML

	if(selectedFilter == option1) {
		mediasLikes.forEach((media) => {
			const listOfMedia = new Media(media)
			listOfMedia.affichage()
		})
	}else if(selectedFilter == option2) {
		mediasDate.forEach((media) => {
			const listOfMedia = new Media(media)
			listOfMedia.affichage()
		})
	}else if(selectedFilter == option3) {
		mediaTitle.forEach((media) => {
			const listOfMedia = new Media(media)
			listOfMedia.affichage()
		})
	}
}