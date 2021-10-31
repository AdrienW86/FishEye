import Media from '../Models/media-class.js'
import Photographer from '../Models/photographer-class.js'
import LightBox from '../Models/lightbox-class.js'

const datas = '/datas.json'

fetch(datas)
  .then(response => response.json())
  .then(data => {
    // Récupération de l'id du photographe dans l'url
    const params = new URL(document.location).searchParams
    const idPhotographer = params.get('id')
    const photographers = data.photographers

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

    const openLightbox = () => {
      LightBox.init()
    }

    // Création de la carte de visite du photographe
    selectedPhotographer = new Photographer(selectedPhotographer)
    selectedPhotographer.createCard()

    // et pour chacun de ses médias on créeé une card
    selectedMedia.forEach((media) => {
      const listOfMedia = new Media(media)
      listOfMedia.affichage()
    })
    const btn = document.querySelectorAll('.btn-card')
    btn.forEach((btn) => btn.addEventListener('click', openLightbox()))

    // Etiquette avec le prix et le nombre de likes total

    const sticker = document.createElement('section')
    sticker.setAttribute('class', 'sticker')
    // eslint-disable-next-line no-undef
    banner.appendChild(sticker)

    const listLikes = []
    let totalLikes = []

    const svg = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none"  class="total-likes" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
                    </svg>`

    // On récupère le nombre total de likes

    selectedMedia.forEach(media => {
      listLikes.push(media.likes)
      const total = listLikes.reduce((acc, cur) => acc + cur)
      totalLikes.push(total)
    })
    totalLikes = listLikes.reduce((acc, cur) => acc + cur)
    console.log(totalLikes)
    sticker.innerHTML = totalLikes + ' ' + svg + ' ' + selectedPhotographer.price + '€ / jour'

    // Ajout des likes

    const likes = document.querySelectorAll('.nombre')
    likes.forEach(like => {
      like.nextSibling.addEventListener('click', (event) => {
        if (!event.target.classList.contains('like')) {
          const likePost = parseInt(like.innerHTML) + 1
          like.innerHTML = likePost
          sticker.innerHTML = totalLikes + 1 + ' ' + svg + ' ' + selectedPhotographer.price + '€ / jour'
          totalLikes++
          event.target.classList.toggle('like')
          event.target.classList.remove('dislike')
        } else {
          const dislikePost = parseInt(like.innerHTML) - 1
          like.innerHTML = dislikePost
          sticker.innerHTML = totalLikes - 1 + ' ' + svg + ' ' + selectedPhotographer.price + '€ / jour'
          totalLikes--
          event.target.classList.toggle('dislike')
          event.target.classList.remove('like')
        }
      })
    })

    /** *** Création de la Modal *****/
    const modal = document.querySelector('.modal')

    /** *** Header de la modale *****/
    const headerModal = document.createElement('div')
    headerModal.setAttribute('class', 'modal-header')
    modal.appendChild(headerModal)

    /** *** Titre de la modale *****/
    const modalTitle = document.createElement('div')
    modalTitle.setAttribute('class', 'modal-title')
    modalTitle.innerHTML = 'Contactez-moi '
    headerModal.appendChild(modalTitle)

    /** *** Nom du photographe *****/
    const modalName = document.createElement('div')
    modalName.setAttribute('class', 'modal-name')
    modalName.innerHTML = selectedPhotographer.name
    headerModal.appendChild(modalName)

    /** *** Bouton de fermeture de la modale *****/
    let closemodalbtn = document.createElement('button')
    closemodalbtn.setAttribute('class', 'close-modal-btn')
    headerModal.appendChild(closemodalbtn)

    /** *** Formulaire de la modale *****/
    const form = document.createElement('form')
    form.setAttribute('id', 'validation')
    form.setAttribute('class', 'modal-form')
    modal.appendChild(form)

    /** *** Prénom *****/
    const name = document.createElement('label')
    name.setAttribute('class', 'name-label')
    name.setAttribute('for', 'name-input')
    name.innerHTML = 'Prénom'
    form.appendChild(name)

    const errorName = document.createElement('div')
    errorName.setAttribute('class', 'formData')
    errorName.setAttribute('data-error-visible', 'false')
    errorName.setAttribute('data-error', '2 caractères minimum et pas de chiffres')
    name.appendChild(errorName)

    const inputName = document.createElement('input')
    inputName.setAttribute('id', 'first')
    inputName.setAttribute('name', 'first')
    inputName.setAttribute('class', 'name-input')
    inputName.setAttribute('label', 'name-label')
    name.appendChild(inputName)

    /** *** Nom *****/
    const surname = document.createElement('label')
    surname.setAttribute('class', 'surname-label')
    surname.setAttribute('for', 'surname-input')
    surname.innerHTML = 'Nom'
    form.appendChild(surname)

    const errorSurname = document.createElement('div')
    errorSurname.setAttribute('class', 'formData')
    errorSurname.setAttribute('data-error-visible', 'false')
    errorSurname.setAttribute('data-error', '2 caractères minimum et pas de chiffres')
    surname.appendChild(errorSurname)

    const inputSurname = document.createElement('input')
    inputSurname.setAttribute('id', 'last')
    inputSurname.setAttribute('class', 'surname-input')
    inputSurname.setAttribute('label', 'surname-label')
    surname.appendChild(inputSurname)

    /** *** Email *****/
    const letterBox = document.createElement('label')
    letterBox.setAttribute('class', 'email-label')
    letterBox.setAttribute('for', 'email-input')
    letterBox.innerHTML = 'Email'
    form.appendChild(letterBox)

    const errorEmail = document.createElement('div')
    errorEmail.setAttribute('class', 'formData')
    errorEmail.setAttribute('data-error-visible', 'false')
    errorEmail.setAttribute('data-error', 'format email exigé')
    letterBox.appendChild(errorEmail)

    const inputEmail = document.createElement('input')
    inputEmail.setAttribute('id', 'email')
    inputEmail.setAttribute('class', 'email-input')
    inputEmail.setAttribute('label', 'email-label')
    letterBox.appendChild(inputEmail)

    /** *** Message *****/
    const message = document.createElement('label')
    message.setAttribute('class', 'message-label')
    message.setAttribute('for', 'message-input')
    message.innerHTML = 'Votre message'
    form.appendChild(message)

    const errorMessage = document.createElement('div')
    errorMessage.setAttribute('class', 'formData')
    errorMessage.setAttribute('data-error-visible', 'false')
    errorMessage.setAttribute('data-error', 'Votre message ne peut pas être vide')
    message.appendChild(errorMessage)

    const inputMessage = document.createElement('textarea')
    inputMessage.setAttribute('id', 'message')
    inputMessage.setAttribute('class', 'message-input')
    inputMessage.setAttribute('label', 'message-label')
    message.appendChild(inputMessage)

    /** *** Bouton submit *****/
    let submit = document.createElement('button')
    submit.setAttribute('class', 'submit-btn')
    submit.setAttribute('type', 'submit')
    submit.innerHTML = 'Envoyer'
    form.appendChild(submit)

    /** *** Lancement de la modale *****/

    const modalbtn = document.querySelectorAll('.modal-btn')
    modalbtn.forEach((btn) => btn.addEventListener('click', launchModal))

    /** *** Fermeture de la modale *****/

    closemodalbtn = document.querySelectorAll('.close-modal-btn')
    closemodalbtn.forEach((btn) => btn.addEventListener('click', closeModal))

    submit = document.querySelectorAll('submit-btn')
    submit.forEach((btn) => btn.addEventListener('click', validateForm))

    /** *** Véfification du formulaire *****/
    const first = document.querySelector('#first')
    const last = document.querySelector('#last')
    const email = document.querySelector('#email')
    const text = document.querySelector('#message')
    const errors = document.querySelectorAll('.formData')
    const validation = document.querySelector('#validation')

    let formOk = false

    function validateForm () {
      const regexIdentity = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/ // Regex pour le nom et le prénom, acceptant un minimum de 2 caractères
      // eslint-disable-next-line no-control-regex
      const regexMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y

      if (!first.value || regexIdentity.test(first.value) === false) {
        errors[0].dataset.errorVisible = 'true'
        return formOk === false
      } else {
        errors[0].dataset.errorVisible = 'false'
      }
      if (!last.value || regexIdentity.test(last.value) === false) {
        errors[1].dataset.errorVisible = 'true'
        return formOk === false
      } else {
        errors[1].dataset.errorVisible = 'false'
      }
      if (!email.value || regexMail.test(email.value) === false) {
        errors[2].dataset.errorVisible = 'true'
        return formOk === false
      } else {
        errors[2].dataset.errorVisible = 'false'
      }
      if (!text.value || regexIdentity.test(text.value) === false) {
        errors[3].dataset.errorVisible = 'true'
        return formOk === false
      } else {
        errors[3].dataset.errorVisible = 'false'
      }
      return (formOk = true)
    }

    validation.addEventListener('submit', (e) => {
      e.preventDefault()
      validateForm()
      if (formOk) {
        console.log('Prénom: ' + first.value + ' Nom: ' + last.value + ' Email: ' + email.value + ' Message: ' + text.value)
        alert('Formulaire rempli avec succès !')
        location.reload()
        closeModal()
      }
    })

    function launchModal () {
      modal.style.display = 'block'
    }
    function closeModal () {
      modal.style.display = 'none'
    }

    /** *** Listbox *****/

    const selectElt = document.querySelector('select')
    const selectDiv = document.querySelector('.custom-select')
    const newSelect = document.createElement('div')
    newSelect.classList.add('new-select')
    newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML
    selectDiv.appendChild(newSelect)
    const newMenu = document.createElement('div')
    newMenu.classList.add('select-items', 'select-hide')

    for (const option of selectElt.options) {
      const newOption = document.createElement('div')
      newOption.innerHTML = option.innerHTML
      newOption.addEventListener('click', function () {
        for (const option of selectElt.options) {
          if (option.innerHTML === this.innerHTML) {
            selectElt.selectedIndex = option.index
            newSelect.innerHTML = this.innerHTML
            break
          }
        }
        newSelect.click()
      })
      newMenu.appendChild(newOption)
    }
    selectDiv.appendChild(newMenu)
    newSelect.addEventListener('click', function (e) {
      e.stopPropagation()
      this.nextSibling.classList.toggle('select-hide')
      this.classList.toggle('active')
    })
  })
