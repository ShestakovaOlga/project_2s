import fondo1 from './fondo1.jpg'
import fondo2 from './fondo2.jpg'
import fondo3 from './fondo3.jpeg'

var url = new URL(window.location.href);

var name = url.searchParams.get("name")
document.querySelector('.name_card').innerHTML = name

var prof = url.searchParams.get("prof")
document.querySelector('.profes_card1').innerHTML = prof

var tel = url.searchParams.get("tel")
document.querySelector('.telefono_card1').innerHTML = tel

var mail = url.searchParams.get("mail")
document.querySelector('.email_card1').innerHTML = mail

var linkedIn = url.searchParams.get("linkedIn")
document.querySelector('.linkedin_card1').innerHTML = linkedIn

var gitHub = url.searchParams.get("gitHub")
document.querySelector('.github_card1').innerHTML = gitHub

var img = url.searchParams.get("img")
document.querySelector('.img_card').value = img

const cardElement = document.querySelector('.card');
var fondo = url.searchParams.get("fondo")
if (fondo == 1) {
    cardElement.style.backgroundImage = `url(${fondo1})`
}
if (fondo == 2) {
    cardElement.style.backgroundImage = `url(${fondo2})`
}
if (fondo == 3) {
    cardElement.style.backgroundImage = `url(${fondo3})`
}

var font = url.searchParams.get("font")
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
