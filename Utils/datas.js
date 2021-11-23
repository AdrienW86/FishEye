

/*const getDatas = () => {
	
	fetch(datas)
		.then(response => response.json())
		.then(data => {
			photographers = data.photographer 
			medias = data.media				
		}).catch(error => {
			console.log(error)
		})   
	console.log(photographers)	
}

let photographers = []

let medias  = []

const params = new URL(document.location).searchParams
const idPhotographer = params.get("id")	

let selectedPhotographer = photographers.find(photo => {
	const id = photo.id.toString()
	return id === idPhotographer
})

const selectedMedia = medias.filter(media => {
	const idMedia = media.photographerId
	return idMedia === selectedPhotographer.id
})
const test = " un gros test"
getDatas()
console.log(photographers)

export { getDatas, test, photographers,  medias, selectedPhotographer, selectedMedia}*/