// démarrage du site
var audio1 = new Audio('assets/song/stratup.mp3');
audio1.play();
// fin démarrage du site 

// création de la nav-bar 
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

    menuList.href = list[i];
    menuList.id = list[i]; 

    menu.appendChild(menuList);
}
document.querySelector('a').insertAdjacentElement('afterend', menu);
// fin nav-bar

// static
function static(){
    document.getElementById('modal-panier').className="btn btn-primary mb-3 static";
}
// fin static
function nostatic(){
    document.getElementById('modal-panier').className="btn btn-primary mb-3 noStatic";
}
// -----------------------------------------------------------------------------------

// création du bouton modal pour le panier 
let modalButton = document.createElement('button');
modalButton.className="btn btn-primary mb-3";
modalButton.dataset.toggle = 'modal';
modalButton.dataset.target = '#exampleModalLong';
modalButton.id='modal-panier';
modalButton.setAttribute('onclick','static()');
menu.appendChild(modalButton);
document.querySelector('ul').insertAdjacentElement('afterend', menu);
// fin de la création du bouton 

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
    childDivModalContent.id="panier";
    childDivModal.appendChild(childDivModalContent)

let childDivModalHeader = document.createElement('div');
    childDivModalHeader.className="modal-header";
    childDivModalContent.appendChild(childDivModalHeader);

let childDivModalH5 = document.createElement('h5');
    childDivModalH5.className="modal-title";
    childDivModalH5.id="exampleModalLongTitle";
    
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
    childDivModalSpan.setAttribute('onclick','nostatic()');
    childDivModalButton.appendChild(childDivModalSpan);

let childDivModalContenerShop = document.createElement('div');
    childDivModalContenerShop.className="modal-body";
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
// fin de la création modal panier


// PacMan Menu
var pacman = document.getElementById('#pacman');
pacman.addEventListener('click', function(){
    pacman.className="rotate";
});
// Fin du PacMan Menu

// gameboy
let gameboy = document.createElement('div');
gameboy.className = 'gameboy';
gameboy.style.marginTop = "200px";
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
// fin gameboy

// let articles = ["Tee-shirt Addict", "Tee-shirt Air", "Tee-shirt Champignon", "Tee-shirt Dino", "Tee-shirt Geek", "Tee-shirt Replay", "Sweat Alice", "Sweat Geek", "Sweat Mario", "Sweat Donkey kong", "Sweat Blanche Neige", "Sweat Breaking Bad", "Basket America", "Basket Batman", "Basket Flash", "Basket Flash2", "Basket Ironman", "Basket Superman", "Casquette Champignon", "Casquette Love", "Casquette Mario noire", "Casquette Mario rouge", "Art-Print Apple Juice", "Art-Print Cooking Time", "Art-Print Link Floyd", "Art-Print Msociety", "Art-Print TWD", "Art-Print Wise Monkey"];

// création des card en js  
    // initialiser une variable div
    let divparent = document.createElement('div');
    divparent.className="row d-flex justify-content-center";
    divparent.style.marginTop="30px";
    divparent.style.marginBottom="30px";
    let articles = ["Tee-shirt Addict", "Tee-shirt Air", "Tee-shirt Champignon", "Tee-shirt Dino", "Tee-shirt Geek", "Tee-shirt Replay", "Sweat Alice", "Sweat Geek", "Sweat Mario", "Sweat Donkey kong", "Sweat Blanche Neige", "Sweat Breaking Bad", "Basket America", "Basket Batman", "Basket Flash", "Basket Flash2", "Basket Ironman", "Basket Superman", "Casquette Champignon", "Casquette Love", "Casquette Mario noire", "Casquette Mario rouge", "Art-Print Apple Juice", "Art-Print Cooking Time", "Art-Print Link Floyd", "Art-Print Msociety", "Art-Print TWD", "Art-Print Wise Monkey"];
    // boucle for pour insérer les articles
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

        var title = document.createElement('h5');
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

        var panier = document.createElement('button');
        panier.className="btn btn-primary mb-3 border_yellow";
        panier.style.width="80%";
        panier.style.margin="auto";
        panier.textContent="Ajouter au panier !";
        panier.setAttribute('onclick','updateBtn()');
        panier.id="article" + i;
        childDiv.appendChild(panier);
     
        if (i == 0) {
            childDiv.id = "tee-shirt";
        }

        if (i == 6) {
            childDiv.id = "sweat";
        }

        if (i == 12) {
            childDiv.id = "shoes";
        }

        if (i == 18) {
            childDiv.id = "accessories";
        }

        if (i == 22) {
            childDiv.id = "art-print";
        }

    }
    document.querySelector('main').insertAdjacentElement("afterend",divparent );
// fin de la création des card

// condition pour ajouter au pannier 
    // jouer un song a chaque fois quil est dans le panier plus ajout 
    var btn = document.querySelectorAll('button');
    // tableau images

imgArticles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg'];

// formulaire
let contact = document.createElement('p');
contact.className = "contact";
contact.id = "nous_contacter";
contact.textContent = "Pour nous contacter, merci de remplir le formulaire :";
document.querySelector('footer').insertAdjacentElement("afterbegin", contact);

let classLabel = ['Nom', 'Prénom', 'Email']

let form = document.createElement('form');
document.querySelector('footer').insertAdjacentElement("beforeend", form);

for (let i = 0; i <= 3; i++) {

    if (i <= 2) {
    let formGroup = document.createElement('div');
    formGroup.className = "form-group";
    form.appendChild(formGroup);
    
    let label = document.createElement('label');
    label.textContent = classLabel[i];
    formGroup.appendChild(label);

    let input = document.createElement('input');
    formGroup.appendChild(input);
    }

    if (i == 3) {
        let formGroup = document.createElement('div');
        formGroup.className = "form-group";
        form.appendChild(formGroup);

        let label = document.createElement('label');
        label.textContent = "Objet";
        formGroup.appendChild(label);
        let textarea = document.createElement('textarea');
        formGroup.appendChild(textarea);
    }
}

let formBtn = document.createElement('button');
formBtn.className = "form-btn";
formBtn.textContent = "Envoyer !";
form.appendChild(formBtn);
// fin de formulaire

// fonction pour ajouter au panier
    // ajout  d'un son
    var audio = new Audio('assets/song/piece.mp3');
    // fin de son

var i = 0;
childDivModalH5.textContent="Votre Panier (" + i +" Articles Dans votre panier )" ;
function updateBtn() 
{
    audio.play();
    
    i++;
    childDivModalH5.textContent="Votre Panier (" + i +" Articles Dans votre panier )" ;
    notify.textContent = i;


    if (i > 0)
    {
        notify.className ="notifyTrue";
    }

     if ( i > 100 ) 
    {
        console.log('+99');
        notify.textContent = "99+";
    }
    if(title.textContent == "Tee-shirt Addict")
    {

        let childDivModalContenerArticles = document.createElement('div');
        childDivModalContenerArticles.className="modal-body";
        childDivModalContenerArticles.textContent="Tee-shirt Addict 15,00€"
        childDivModalContenerShop.appendChild(childDivModalContenerArticles);
    }
}

// jouer un son à chaque ajout au panier
    // création de span pour les notifications article/panier
    var notify = document.createElement('span');
    notify.id='notify';
    modalButton.appendChild(notify);
    // fin de la création de notification 

var audio1 = new Audio('assets/song/stratup.mp3');
audio1.play();
