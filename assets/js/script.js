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




// creation des card en js 

    // initialiser une variable div
    let divparent = document.createElement('div');
    divparent.className="row d-flex justify-content-center";
    divparent.style.marginTop="120px";
    let articles = ["Tee-shirt Addict", "Tee-shirt Air", "Tee-shirt Champignon", "Tee-shirt Dino", "Tee-shirt Geek", "Tee-shirt Replay", "Sweat Alice", "Sweat Geek", "Sweat Mario", "Sweat Donkey kong", "Sweat Blanche Neige", "Sweat Breaking Bad", "Basket America", "Basket Batman", "Basket Flash", "Basket Flash2", "Basket Ironman", "Basket Superman", "Casquette Champignon", "Casquette Love", "Casquette Mario noire", "Casquette Mario rouge", "Art-Print Apple Juice", "Art-Print Cooking Time", "Art-Print Link Floyd", "Art-Print Msociety", "Art-Print TWD", "Art-Print Wise Monkey"];
    // boucle for pour inserter tous sa 
    for (let i = 0; i <= 27; i++) {
        
        var childDiv = document.createElement('div');
        childDiv.className="card mt-5 mr-5";
        childDiv.style.width="18rem";
        divparent.appendChild(childDiv);

        let imgcard = document.createElement('img');
        imgcard.className="card-img-top";
        childDiv.appendChild(imgcard);

        let divContainer = document.createElement('div');
        divContainer.className="card-body";
        childDiv.appendChild(divContainer);

        let title = document.createElement('h5');
        title.className="card-title";
        title.textContent=articles[i];
        childDiv.appendChild(title);

        let Descript = document.createElement('p');
        Descript.className="card-text";
        Descript.textContent="Some quick example text to build on the card title and make up the bulk of the card's content.";
        childDiv.appendChild(Descript);

        let price = document.createElement('p');
        price.className="card-text d-flex";
        price.textContent="15,00€";
        price.style.marginLeft="80%";
        price.style.fontWeight="bold";
        childDiv.appendChild(price);

        let panier = document.createElement('button');
        panier.className="btn btn-primary mb-3 border_yellow";
        panier.style.width="80%";
        panier.style.margin="auto";
        panier.textContent="Ajouter au panier !";
        panier.id="article" + i;
        childDiv.appendChild(panier);
    }
    document.querySelector('main').insertAdjacentElement("afterbegin",divparent );
// fin de la craetion de test 

// tableau images

imgArticles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg'];

// formulaire

let classLabel = ['Nom', 'Prénom', 'Email']

let form = document.createElement('form');
document.querySelector('footer').insertAdjacentElement("afterbegin", form);

for (let i = 0; i <= 3; i++) {

    if (i <= 2) {
    let formGroup = document.createElement('div');
    formGroup.className = "form-group";
    form.appendChild(formGroup);
    
    let label = document.createElement('label');
    label.textContent = classLabel[i];
    formGroup.appendChild(label);

    let input = document.createElement('input');
    input.className = "form-control"
    formGroup.appendChild(input);
    }

    if (i == 3) {
        let label = document.createElement('label');
        label.textContent = "Objet";
        form.appendChild(label);
        let textarea = document.createElement('textarea');
        textarea.className = "form-control";
        form.appendChild(textarea);
    }
}
