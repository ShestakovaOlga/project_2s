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


