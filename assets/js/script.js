// js goes here
let menuBtn = document.querySelector('.nav__button')
let closeBtn = document.querySelector('.close__button')
console.log('js')
const menuClickListener = () => {
    let nav = document.querySelector('.nav')
    nav.classList.toggle('hide__menu')
    document.querySelector('.overlay').classList.toggle('show')
    console.log('clicked')
}
closeBtn.addEventListener('click', menuClickListener)
menuBtn.addEventListener('click', menuClickListener)
