export default function createHeader() {
    
	const nav = document.querySelector(".nav-tag")

	//Bouton
	let btnContent = document.createElement("button")
	btnContent.setAttribute("class", "button-content")
	btnContent.setAttribute("aria-describedby", "button pour passer au contenu")
	btnContent.innerHTML ="Passer au contenu"
	nav.appendChild(btnContent)
	// Logo
	let boxLogo = document.createElement("div")
	boxLogo.setAttribute("class","box-logo")
	nav.appendChild(boxLogo)

	let logo = document.createElement("a")
	logo.setAttribute("class", "logo")
	logo.setAttribute("aria-label", "logo du site")
	logo.setAttribute("alt-text", "lien avec le logo de Fisheye qui vous ramene sur la page d'accueil index.html ")
	logo.setAttribute( "href","./index.html")	
	boxLogo.appendChild(logo)

	// Création des tags
	let tags = document.createElement("div")
	tags.setAttribute("class", "tag-list")
	nav.appendChild(tags)

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

	
	//Titre
	let boxTitle = document.createElement("div")
	boxTitle.setAttribute("class", "box_title")
	nav.appendChild(boxTitle)

	let title = document.createElement("h1")
	title.setAttribute("class", "title")
	title.innerHTML = "Nos photographes"
	boxTitle.appendChild(title)
}