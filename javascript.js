

const dashboard = document.querySelector('nav h1');
const navlinks = document.querySelector('nav .nav')
dashboard.addEventListener('click', ()=>{
    navlinks.classList.toggle('active')
})