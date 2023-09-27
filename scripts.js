const sr = ScrollReveal ({
    distance: '20px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero h3', {delay:100, distance: '20px', origin:'top'});
sr.reveal('.name', {delay:100, distance: '30px', origin:'left'});
sr.reveal('.hero img', {delay:100, distance: '30px', origin:'right'});
sr.reveal('.about-me', {delay:100, distance: '60px', origin:'bottom'});
sr.reveal('.blog', {delay:100, distance: '30px', origin:'left'});



sr.reveal('.quote', {delay:100, distance: '20px', origin:'top'});
sr.reveal('.com-icons', {delay:100, distance: '60px', origin:'bottom'});

sr.reveal('.about img', {delay:30, distance: '60px', origin:'left'});
sr.reveal('.story', {delay:30, distance: '60px', origin:'right'});

sr.reveal('#mission', {delay:1, distance: '20px', origin:'top'});
sr.reveal('#objective', {delay:2, distance: '40px', origin:'top'});
sr.reveal('#vision', {delay:3, distance: '60px', origin:'top'});
sr.reveal('#values', {delay:4, distance: '80px', origin:'top'});





let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}



// slide

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 4000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 4000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};