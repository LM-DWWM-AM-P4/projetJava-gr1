let body = document.querySelector('body');
let nav = document.createElement('nav');

document.getElementById('header').insertAdjacentElement('afterbegin', nav);

let logo = document.createElement('a');
logo.href= '#';

document.querySelector('nav').insertAdjacentElement('afterbegin', logo);

var menu = document.createElement('ul');

let list = ['#tee-shirt','#sweat','#shoes','#accessories', '#art-print','#nous_contacter','#pacman']
for (let i = 0; i < list.length; i++) {
    var menuList = document.createElement('a');

     menuList.href=list[i];
    

    menu.appendChild(menuList);
}
document.querySelector('a').insertAdjacentElement('afterend', menu);


