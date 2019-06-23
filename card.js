import fondo1 from './fondo1.jpg'
import fondo2 from './fondo2.jpg'
import fondo3 from './fondo3.jpeg'
const cardElement = document.querySelector('.card');

var url = new URL(window.location.href);

var id = url.searchParams.get("id")

fetch(`https://card.galax.be/card?id=${id}`)
    .then(res => res.json())
    .then(data => {
        document.querySelector('.name_card').innerHTML = data.name
        document.querySelector('.profes_card1').innerHTML = data.prof
        document.querySelector('.telefono_card1').innerHTML = data.tel
        document.querySelector('.email_card1').innerHTML = data.mail
        document.querySelector('.linkedin_card1').innerHTML = data.linkedIn
        document.querySelector('.github_card1').innerHTML = data.gitHub
        document.querySelector('.img_card').src = data.imgAvatar
        const fondo = data.fondoSelected
        if (fondo == 1) {
            cardElement.style.backgroundImage = `url(${fondo1})`
            cardElement.classList.remove('fontcolor');
        }
        if (fondo == 2) {
            cardElement.style.backgroundImage = `url(${fondo2})`
            cardElement.classList.add('fontcolor')
        }
        if (fondo == 3) {
            cardElement.style.backgroundImage = `url(${fondo3})`
            cardElement.classList.remove('fontcolor');
        }
        const font = data.fontSelected
        if (font == 1) {
            cardElement.classList.add('fontUbuntu');
            cardElement.classList.remove('fontMonts');
            cardElement.classList.remove('fontMali');
        }
        if (font == 2) {
            cardElement.classList.add('fontMonts');
            cardElement.classList.remove('fontUbuntu');
            cardElement.classList.remove('fontMali');
        }
        if (font == 3) {
            cardElement.classList.add('fontMali');
            cardElement.classList.remove('fontMonts');
            cardElement.classList.remove('fontUbuntu');
        }
    })
