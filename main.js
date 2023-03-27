const btnMenu = document.querySelector('.menu')
const btnClose = document.querySelector('.close')
const list = document.querySelector('.list')
const navOverPlay = document.querySelector('.nav-overplay')
console.log(navOverPlay)

btnMenu.addEventListener('click', () => {
    list.style.transform = 'translateX(0)'
    navOverPlay.style.display = 'block'
})

btnClose.addEventListener('click', () => {
    list.style.transform = 'translateX(100%)'
    navOverPlay.style.display = 'none'
})