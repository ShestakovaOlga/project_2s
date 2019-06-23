import './cardPage.html';
import './card.html';


const buttonStart = document.querySelector('.start_button');//start button
if (buttonStart) {
    buttonStart.addEventListener('click', () => {
        window.location.href = "cardPage.html";
    })
}
/*Send a card */
const buttonVer = document.querySelector('.card_button');
if (buttonVer) {
    buttonVer.addEventListener('click', () => {
        const name = nameElement.value
        const prof = profElement.value
        const tel = phoneElement.value
        const mail = emailElement.value
        const linkedIn = linkedElement.value
        const gitHub = githubElement.value
        fetch('https://card.galax.be/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                prof,
                tel,
                mail,
                linkedIn,
                gitHub,
                imgAvatar,
                fondoSelected,
                fontSelected
            })
        }).then(res => res.json())
            .then(r => {
                window.location.href = `card.html?id=${r.id}`;
            })
    })
}

const buttonTwit = document.querySelector('#twitter');

buttonTwit.addEventListener('click', () => {
    const name = nameElement.value
    const prof = profElement.value
    const tel = phoneElement.value
    const mail = emailElement.value
    const linkedIn = linkedElement.value
    const gitHub = githubElement.value
    fetch('https://card.galax.be/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            prof,
            tel,
            mail,
            linkedIn,
            gitHub,
            imgAvatar,
            fondoSelected,
            fontSelected
        })
    }).then(res => res.json())
        .then(r => {
            shareTwitter(`https://` + window.location.host + `/project_2s/card.html?id=${r.id}`, 'Mi tarjeta de visita hecha por Olga')
        })
})

/*change the arrow*/


/*input of name*/
const nameElement = document.querySelector('#name');
const nameCardElement = document.querySelector('.name_card');
if (nameElement) {
    nameElement.addEventListener('input', () => {
        nameCardElement.innerHTML = nameElement.value
    })
}
/*input of prof*/
const profElement = document.querySelector('#job');
const profCardElement = document.querySelector('.profes_card1');
if (profElement) {
    profElement.addEventListener('input', () => {
        profCardElement.innerHTML = profElement.value
    })
}
/*input of email*/
const emailElement = document.querySelector('#email');
const emailCardElement = document.querySelector('.email_card1');
if (emailElement) {
    emailElement.addEventListener('input', () => {
        emailCardElement.innerHTML = emailElement.value
    })
}
/*input of tel*/
const phoneElement = document.querySelector('#phone');
const phoneCardElement = document.querySelector('.telefono_card1');
if (phoneElement) {
    phoneElement.addEventListener('input', () => {
        phoneCardElement.innerHTML = phoneElement.value
    })
}
/*input of linked*/
const linkedElement = document.querySelector('#linkedin');
const linkedCardElement = document.querySelector('.linkedin_card1');
if (linkedElement) {
    linkedElement.addEventListener('input', () => {
        linkedCardElement.innerHTML = linkedElement.value
    })
}
/*input of git*/
const githubElement = document.querySelector('#github');
const githubCardElement = document.querySelector('.github_card1');
if (githubElement) {
    githubElement.addEventListener('input', () => {
        githubCardElement.innerHTML = githubElement.value
    })
}
/*input of img*/
let imgAvatar
const imghubElement = document.querySelector('#img-selector');
const imghubCardElement = document.querySelector('.img_card ');
imghubElement.addEventListener('change', (event) => {
    var fr = new FileReader();
    fr.onload = function () {
        imghubCardElement.setAttribute('src', fr.result)
        imghubCardElement.src = fr.result;
        imgAvatar = fr.result;
    }
    fr.readAsDataURL(imghubElement.files[0]);
    console.log(imghubElement.files[0]);
})
/*animation of arrow*/
const arrowElement = document.querySelector('.arrow_anim1');
const colorElement = document.querySelector('.diseño');
const fontElement = document.querySelector('.font');

arrowElement.addEventListener('click', () => {
    colorElement.classList.toggle('collapse')
    fontElement.classList.toggle('collapse')
    arrowElement.classList.toggle('closed')
    console.log(arrowElement);
})

const arrow1Element = document.querySelector('.arrow_anim2');
const formElement = document.querySelector('.form');
arrow1Element.addEventListener('click', () => {
    formElement.classList.toggle('collapse')
    arrow1Element.classList.toggle('closed')
    console.log(formElement);
})
const arrow2Element = document.querySelector('.arrow_anim3');
const compartirElement = document.querySelector('.compart');
arrow2Element.addEventListener('click', () => {
    compartirElement.classList.toggle('collapse')
    arrow2Element.classList.toggle('closed')
    console.log(arrow2Element);
})

/*change the background of card*/
import fondo1 from './fondo1.jpg'
import fondo2 from './fondo2.jpg'
import fondo3 from './fondo3.jpeg'
let fondoSelected = 1

const radio1Element = document.getElementById('colorpalete1');
const radio2Element = document.getElementById('colorpalete2');
const radio3Element = document.getElementById('colorpalete3');
const cardElement = document.querySelector('.card');
radio1Element.addEventListener('change', () => {
    cardElement.style.backgroundImage = `url(${fondo1})`
    cardElement.classList.remove('fontcolor');
    fondoSelected = 1
})

radio2Element.addEventListener('change', () => {
    cardElement.style.backgroundImage = `url(${fondo2})`
    cardElement.classList.add('fontcolor')
    fondoSelected = 2
})

radio3Element.addEventListener('change', () => {
    cardElement.style.backgroundImage = `url(${fondo3})`
    cardElement.classList.remove('fontcolor');
    fondoSelected = 3
})
/*change fonts of card*/
const font1Element = document.getElementById('fuente1');
const font2Element = document.getElementById('fuente2');
const font3Element = document.getElementById('fuente3');
const cardFontElement = document.querySelector('.card');
let fontSelected = 1;
font1Element.addEventListener('change', () => {
    cardFontElement.classList.add('fontUbuntu');
    cardFontElement.classList.remove('fontMonts');
    cardFontElement.classList.remove('fontMali');
    fontSelected = 1
})
font2Element.addEventListener('change', () => {
    cardFontElement.classList.add('fontMonts');
    cardFontElement.classList.remove('fontUbuntu');
    cardFontElement.classList.remove('fontMali');
    fontSelected = 2
})
font3Element.addEventListener('change', () => {
    cardFontElement.classList.add('fontMali');
    cardFontElement.classList.remove('fontMonts');
    cardFontElement.classList.remove('fontUbuntu');
    fontSelected = 3
})

function shareTwitter(url, text) {
    window.location.href = "https://twitter.com/share?url=" + escape(url) + "&text=" + text;
}