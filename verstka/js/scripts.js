const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const film = document.querySelector('.film-trailer');
const frameVideo = document.querySelector('.frame')
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event)=> {
    if (!event.target.classList.contains('booked')&& !event.target.classList.contains('light')){
        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
})

menuButton.addEventListener('click', () =>{
    menu.classList.toggle("is-open")
})

film.addEventListener('click', () => { // Для того чтобы убрать нажать ещё раз, т.к. по гайду не работает 
    frameVideo.classList.toggle('add')
})
