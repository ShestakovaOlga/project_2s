import './cardPage.html';


const buttonStart = document.querySelector('.start_button');
if (buttonStart) {
    buttonStart.addEventListener('click', () => {
        window.location.href = "/cardPage.html";
    })
}

const nameElement = document.querySelector('#name');
const nameCardElement = document.querySelector('.name_card');
if (nameElement) {
    nameElement.addEventListener('input', () => {
        nameCardElement.innerHTML = nameElement.value
    })
}