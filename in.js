import './cardPage.html';


const buttonStart = document.querySelector('.start_button');//start button
if (buttonStart) {
    buttonStart.addEventListener('click', () => {
        window.location.href = "/cardPage.html";
    })
}
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
const imghubElement = document.querySelector('#img-selector');
const imghubCardElement = document.querySelector('.img_card ');
imghubElement.addEventListener('change', (event) => {
    var fr = new FileReader();
    fr.onload = function () {
        imghubCardElement.setAttribute('src', fr.result)
        imghubCardElement.src = fr.result;
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
    console.log(arrowElement);
})

const arrow1Element = document.querySelector('.arrow_anim2');
const formElement = document.querySelector('.form');
arrow1Element.addEventListener('click', () => {
    formElement.classList.toggle('collapse')
    console.log(formElement);
})
const arrow2Element = document.querySelector('.arrow_anim3');
const compartirElement = document.querySelector('.compart');
arrow2Element.addEventListener('click', () => {
    compartirElement.classList.toggle('collapse')
    console.log(arrow2Element);
})



