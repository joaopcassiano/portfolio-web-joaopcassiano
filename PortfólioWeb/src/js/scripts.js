//JAVASCRIPT RELACIONADO A MY SKILLS

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let conteiner = document.querySelector('.my-skills')
let items = conteiner.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = conteiner.querySelector('.list')

let active = 0
let firstposition = 0
let lastposition = items.length - 1

function setslider() {
    let itemold = conteiner.querySelector('.list .item.active')
    itemold.classList.remove('active')

    let dotsold = indicator.querySelector('ul li.active')
    dotsold.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}
nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)

    active = active + 1 > lastposition ? 0 : active + 1
    setslider()
    items[active].classList.add('active')
}


prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstposition ? lastposition : active - 1
    setslider()
    items[active].classList.add('active')

}
//TÉRMINO

//JAVASCRIPT RELACIONADO A PORTFÓLIO
let btnNext = document.querySelector('.next-portfolio')
let btnBack = document.querySelector('.back-portfolio')


let container = document.querySelector('.portfolio')
let listportfolio = document.querySelector('.portfolio .list-portfolio')
let thumb = document.querySelector('.portfolio .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')


function moveItemsOnClick(type) {
    let listItem = document.querySelectorAll('.list-portfolio .portfolio-item')
    let thumbItem = document.querySelectorAll('.thumb .thumb-item')

    if (type == 'next') {
        listportfolio.appendChild(listItem[0])
        thumb.appendChild(thumbItem[0])
        container.classList.add('next')
    }
    else {
        listportfolio.prepend(listItem[listItem.length - 1])
        thumb.prepend(thumbItem[thumbItem.length - 1])
        container.classList.add('back')
    }

    setTimeout (() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 1000);
}
//JAVASCRIPT RELACIONADO AO CABEÇALHO MOBILE

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

//JAVASCRIPT RELACIONADO AO SCROLL REVIEW

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.efeito-txt-home', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-img-home', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.texts-about', {
    duration: 2000,
    distance: '90px',
})

revelar.reveal('.img-about', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.title-skills', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.list', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.portfolio', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.testimonials-tittle', {
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.main-testimonials', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

revelar.reveal('.final-contact', {
    duration: 2000,
    distance: '90px',
    delay: 500
})