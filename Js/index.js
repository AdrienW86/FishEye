import Photographer from "../Models/photographer-class.js"
// Localisation des données
const datas = "/datas.json"
// Récupération des données
fetch(datas)
	.then(response => response.json())
	.then(data => {
		const  photographers  = data.photographers		
		const nav = document.querySelector(".nav-tag")

		//Bouton
		let btnContent = document.createElement("button")
		btnContent.setAttribute("class", "button-content")
		btnContent.setAttribute("aria-describedby", "button pour passer au contenu")
		btnContent.innerHTML ="Passer au contenu"
		nav.appendChild(btnContent)
		// Logo
		let logo = document.createElement("a")
		logo.setAttribute("class", "logo")
		logo.setAttribute( "href","./index.html")
		logo.setAttribute("alt", "Fisheye Home page")		
		nav.appendChild(logo)
		// Création des tags
		let tags = document.createElement("div")
		tags.setAttribute("class", "tag-list")
		nav.appendChild(tags)
		//Titre
		let boxTitle = document.createElement("div")
		boxTitle.setAttribute("class", "box_title")
		nav.appendChild(boxTitle)

		let title = document.createElement("h1")
		title.innerHTML = "Nos photographes"
		boxTitle.appendChild(title)
	
		let portrait = document.createElement("a")
		let art = document.createElement("a")
		let fashion = document.createElement("a")
		let architecture = document.createElement("a")
		let travel = document.createElement("a")
		let sport = document.createElement("a")
		let animals = document.createElement("a")
		let event = document.createElement("a")
	
		portrait.setAttribute("href", "./index.html?hashtag=" + "portrait")
		art.setAttribute("href","./index.html?hashtag=" + "art")
		fashion.setAttribute("href", "./index.html?hashtag=" + "fashion")
		architecture.setAttribute("href", "./index.html?hashtag="+ "architecture")
		travel.setAttribute("href", "./index.html?hashtag=" + "travel")
		sport.setAttribute("href", "./index.html?hashtag=" + "sport")
		animals.setAttribute("href", "./index.html?hashtag=" + "animals")
		event.setAttribute("href", "./index.html?hashtag=" + "events")
	
		portrait.setAttribute("class", "tag")
		art.setAttribute("class", "tag")
		fashion.setAttribute("class", "tag")
		architecture.setAttribute("class", "tag")
		travel.setAttribute("class", "tag")
		sport.setAttribute("class", "tag")
		animals.setAttribute("class", "tag")
		event.setAttribute("class", "tag")
	
		portrait.innerHTML = "#Portrait"
		art.innerHTML = "#Art"
		fashion.innerHTML  = "#Fashion"
		architecture.innerHTML = "#Architecture"
		travel.innerHTML = "#Travel"
		sport.innerHTML = "#Sport"
		animals.innerHTML = "#Animals"
		event.innerHTML = "#Events"
	
		tags.appendChild(portrait)
		tags.appendChild(art)
		tags.appendChild(fashion)
		tags.appendChild(architecture)
		tags.appendChild(travel)
		tags.appendChild(sport)
		tags.appendChild(animals)
		tags.appendChild(event)
	
		// Gestion des tags
		const params = new URL(document.location).searchParams
		let currentTag = params.get("hashtag")

		if(currentTag == null) {
			photographers.forEach(photographer => {
				const listOfPhotographers = new Photographer(photographer)
				listOfPhotographers.creation()			
			})
		}else{
			photographers.forEach(photographer => {
				const selectedTag = photographer.tags.filter((tag) => tag == currentTag)

				if(selectedTag.length > 0) {
					const listOfPhotographers = new Photographer(photographer)
					listOfPhotographers.creation()
				}			
			})		
		}

		// Bouton contenu
		const contenu = document.querySelector(".button-content")
		const menu = document.querySelector(".nav-tag")
		let height = menu.clientHeight

		const body = document.querySelector("body")
		let bodyHeight = body.clientHeight

		window.addEventListener("scroll", () => {
			if(window.scrollY > height) {
				contenu.classList.add("scroll")
			}else{
				contenu.classList.remove("scroll")
			}
		})	
		let btnContenu = document.querySelectorAll(".button-content")
		btnContenu.forEach(btn => btn.addEventListener("click", goContent))

		function goContent() {
			window.scroll(0, -bodyHeight)
		}		
	})


	

