let body = document.querySelector('body');
let nav = document.createElement('nav');
nav.className="navbar navbar-expand-lg navbar-light fixed-top";
document.getElementById('header').insertAdjacentElement('afterbegin', nav);

let logo = document.createElement('a');
logo.href= '#';

document.querySelector('nav').insertAdjacentElement('afterbegin', logo);

var menu = document.createElement('ul');

let list = ['#tee-shirt','#sweat','#shoes','#accessories', '#art-print','#nous_contacter','#pacman']
for (let i = 0; i < list.length; i++) {
    var menuList = document.createElement('a');

     menuList.href=list[i];
    menuList.id = list[i]; 

    menu.appendChild(menuList);
}
document.querySelector('a').insertAdjacentElement('afterend', menu);

/*
let gameBoy = document.createElement('div');
gameBoy.id="gameboy";
document.querySelector('main').insertAdjacentElement("afterbegin",gameBoy);

document.getElementById('gameboy').className=" text-white justify-content-center d-flex bg-image";
document.getElementById('gameboy').style.width="100%";
document.getElementById('gameboy').style.height="378px";
document.getElementById('gameboy').style.marginTop="150px"


let vitre = document.createElement('div');
vitre.id="vitre";
document.getElementById('gameboy').insertAdjacentElement("afterbegin",vitre);

document.getElementById('vitre').style.width="416px";
document.getElementById('vitre').style.height="324px";
document.getElementById('vitre').className=" mt-3 bg-img";
*/

var pacman = document.getElementById('#pacman');
pacman.addEventListener('click', function(){
    pacman.className="rotate";

});

/* gameboy */

let gameboy = document.createElement('div');
gameboy.className = 'gameboy';
main.appendChild(gameboy);

let screen = document.createElement('div');
screen.className = 'screen';
gameboy.appendChild(screen);

let dpad = document.createElement('div');
dpad.className = 'dpad';
gameboy.appendChild(dpad);

let bevel = document.createElement('div');
bevel.className = 'bevel';
gameboy.appendChild(bevel);

let btn1 = document.createElement('div');
btn1.className = 'btn1';
gameboy.appendChild(btn1);

let btn2 = document.createElement('div');
btn2.className = 'btn2';
gameboy.appendChild(btn2);

/* fin gameboy */


/* let articles = ["Tee-shirt Addict", "Tee-shirt Air", "Tee-shirt Champignon", "Tee-shirt Dino", "Tee-shirt Geek", "Tee-shirt Replay", "Sweat Alice", "Sweat Geek", "Sweat Mario", "Sweat Donkey kong", "Sweat Blanche Neige", "Sweat Breaking Bad", "Basket America", "Basket Batman", "Basket Flash", "Basket Flash2", "Basket Ironman", "Basket Superman", "Casquette Champignon", "Casquette Love", "Casquette Mario noire", "Casquette Mario rouge", "Art-Print Apple Juice", "Art-Print Cooking Time", "Art-Print Link Floyd", "Art-Print Msociety", "Art-Print TWD", "Art-Print Wise Monkey"]; */



