let body = document.querySelector('body');
let nav = document.createElement('nav');
nav.className="navbar navbar-expand-lg navbar-light ";
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

let gameBoy = document.createElement('div');
gameBoy.id="gameboy";
document.querySelector('main').insertAdjacentElement("afterbegin",gameBoy);

document.getElementById('gameboy').className=" text-white justify-content-center d-flex bg-image";
document.getElementById('gameboy').style.width="100%";
document.getElementById('gameboy').style.height="378px";
document.getElementById('gameboy').style.marginTop="150px"
// document.getElementById('gameboy').style.zIndex="0";

let vitre = document.createElement('div');
vitre.id="vitre";
document.getElementById('gameboy').insertAdjacentElement("afterbegin",vitre);

document.getElementById('vitre').style.width="416px";
document.getElementById('vitre').style.height="324px";
document.getElementById('vitre').className=" mt-3 bg-img";