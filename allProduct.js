const $searchButton = document.querySelector('.fa-magnifying-glass')
const $searchBar = document.querySelector('.search')
const $join = document.querySelector('.join')
const $container = document.querySelector('.container')
const $login = document.querySelector('.fa-user')
const $x = document.querySelector('.fa-xmark')

$searchButton.addEventListener('click', e => {
    $searchBar.classList.toggle('on')
})
$login.addEventListener('click', e => {
    $join.classList.toggle('hidden')
    $container.classList.toggle('black')
})
$x.addEventListener('click', e => {
    $join.classList.toggle('hidden')
    $container.classList.toggle('black')
})

const $ham = document.querySelector('.ham')
const $bar = document.querySelector(".fa-bars");
$bar.addEventListener('click', e => {
    $ham.classList.toggle('hidden')
})

const $img = document.querySelectorAll('.img')
const $link = document.querySelectorAll('.proLink')
const $rp = document.querySelector('.rp')

$link.forEach(e => {
    const recent = getComputedStyle(e.firstElementChild).backgroundImage;
    e.addEventListener('click', () => {
        const json = JSON.stringify(recent);
        const json2 = JSON.stringify(e.href)
        localStorage.setItem('url', json)
        localStorage.setItem('link', json2)
        
    })
})

const url = localStorage.getItem("url");
const link = localStorage.getItem('link')
const parseUrl = JSON.parse(url);
const parseLink = JSON.parse(link)

$rp.style.backgroundImage = parseUrl;
$rp.style.backgroundSize = "contain";
$rp.style.backgroundRepeat = 'no-repeat'

$rp.addEventListener('click', e => {
    location = parseLink
})