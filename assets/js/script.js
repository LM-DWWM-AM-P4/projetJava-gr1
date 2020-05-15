// creation de la nav-bar 
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
// fin nav-bar



// creation du boutton mdal pour le panier 
let modalButton = document.createElement('button');
modalButton.className="btn btn-primary mb-3";
modalButton.dataset.toggle = 'modal';
modalButton.dataset.target = '#exampleModalLong';
modalButton.id='modal-panier';
menu.appendChild(modalButton);
document.querySelector('ul').insertAdjacentElement('afterend', menu);
// fin de la créationdu bouton 



// création de la modal panier
let divParentModal = document.createElement('div');
divParentModal.id = "exampleModalLong";
    divParentModal.className = "modal fade z-index";
    divParentModal.setAttribute('tabindex','-1');
    divParentModal.setAttribute('role','dialog');
    divParentModal.setAttribute('aria-labelledby','exampleModalLongTitle');
    divParentModal.setAttribute('aria-hidden','true');

let childDivModal = document.createElement('div');
    childDivModal.className="modal-dialog";
    childDivModal.setAttribute('role','document');
    divParentModal.appendChild(childDivModal);
        
let childDivModalContent = document.createElement('div');
    childDivModalContent.className="modal-content";
    childDivModal.appendChild(childDivModalContent)

let childDivModalHeader = document.createElement('div');
    childDivModalHeader.className="modal-header";
    childDivModalContent.appendChild(childDivModalHeader);

let childDivModalH5 = document.createElement('h5');
    childDivModalH5.className="modal-title";
    childDivModalH5.id="exampleModalLongTitle";
    childDivModalH5.textContent="Votre Panier"
    childDivModalHeader.appendChild(childDivModalH5);

let childDivModalButton = document.createElement('button');
    childDivModalButton.type="button";
    childDivModalButton.className="close";
    childDivModalButton.dataset.dismiss = 'modal';
    childDivModalButton.setAttribute('aria-label','Close');
    childDivModalHeader.appendChild(childDivModalButton);

let childDivModalSpan = document.createElement('Span');
    childDivModalSpan.setAttribute('aria-hidden','true');
    childDivModalSpan.innerHTML="&times;"
    childDivModalButton.appendChild(childDivModalSpan);

let childDivModalContenerShop = document.createElement('div');
    childDivModalContenerShop.className="modal-body";
    childDivModalContenerShop.textContent="modal-bodymodal-bodymodal-bodymodal-bodymodal-bodymodal-bodymodal-body"
    childDivModalContent.appendChild(childDivModalContenerShop);

let childDivModalContenerFooter = document.createElement('div');
    childDivModalContenerFooter.className="modal-footer";
    childDivModalContent.appendChild(childDivModalContenerFooter);

let childDivModalButtonClose = document.createElement('button');
    childDivModalButtonClose.type="button";
    childDivModalButtonClose.className="btn btn-secondary";
    childDivModalButtonClose.textContent="Fermer";
    childDivModalContenerFooter.appendChild(childDivModalButtonClose);  
    
let childDivModalButtonSave = document.createElement('button');
    childDivModalButtonSave.type="button";
    childDivModalButtonSave.className="btn btn-primary";
    childDivModalButtonSave.textContent="Commander"
    childDivModalContenerFooter.appendChild(childDivModalButtonSave);
    
    
document.querySelector('header').insertAdjacentElement('afterbegin', divParentModal);
// fin de la creation modal panier


// PacMan Menu
var pacman = document.getElementById('#pacman');
pacman.addEventListener('click', function(){
    pacman.className="rotate";

});
// Fin du PacMan Menu



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
        imgcard.src="assets/img/images_articles/"+i+".jpg";
        childDiv.appendChild(imgcard);

        let divContainer = document.createElement('div');
        divContainer.className="card-body";
        childDiv.appendChild(divContainer);

        let title = document.createElement('h5');
        title.className="card-title text-center h5 font-weight-bold text-uppercase";
        title.textContent=articles[i];
        childDiv.appendChild(title);

        let Descript = document.createElement('p');
        Descript.className="card-text font-weight-light";
        Descript.innerHTML="Some quick example text to build on the card title and make up the bulk of the card's content.<br><i><b>Ref.00"+i;
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
        panier.onclick = "" ;
        panier.id="article" + i;
        childDiv.appendChild(panier);
    }
    document.querySelector('main').insertAdjacentElement("afterbegin",divparent );
// fin de la craetion de test 


// jouer un song a chaque fois quil est dans le panier
var audio = new Audio('assets/song/piece.mp3');
var btn = document.querySelectorAll('button')

for (let i = 0; i < 28; i++) {
    btn[i].addEventListener('click', updateBtn);
}
function updateBtn() 
{
    audio.play();
}
// fin de song

var audio1 = new Audio('assets/song/stratup.mp3');
audio1.play();