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
    
    let describ = [`Tee shirt addict 100% coton, fabriqué en France <br> -Les mythiques 3 bandes <br>Logo brodé.<br> Conseils d\'entretien:<br>- Lavable en machine 30° max<br>- Lavage à l'envers<br>- Pas de séchage en machine ou de lavage à sec<br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`, 
    `Tee shirt Air 100% coton, fabriqué en France. <br>Logo brodé. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle`,
    `Tee shirt champignon 100% coton, fabriqué en France. <br>Logo brodé. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Tee shirt Dino Sportif 100% coton, fabriqué en France <br>Mieux qu'un coq ... un Dino sportif <br>Logo brodé. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Tee shirt Geek F 100% coton, fabriqué en France <br>Logo brodé. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Tee shirt reeplay 100% coton, fabriqué en France. <br>Logo brodé. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Sweat-shirt Alice (We Are Geeks) 100% coton, fabriqué en France. <br>Alice intègre le cercle très fermé de notre série We Are Geeks qui a déjà accueilli Chuck Norris, Tom Selleck ou encore Monsieur Spock. <br>Le personnage créé par Lewis Carroll porte haut les couleurs du pays des merveilles... <br>Et les couleurs d'Otaku. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Sweat-shirt Comme des Fuckingeeks 100% coton, fabriqué en France. <br>Le sweat-shirt Comme des Fuckingeeks est la parodie du slogan d'une célèbre marque japonaise qui aime utiliser des expressions françaises. <br>Vous avez trouvé de qui il s'agit ? <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Sweat-shirt Mario Pocket (Here we go) 100% coton, fabriqué au France. <br>Sweat-shirt pocket à la gloire de Mario qui vous motivera tout au long de la journée du fond de votre poche. <br>Here we go ! <br>Et puis avoir un plombier sur soi en permanence, ça peut servir. <br>On ne sait jamais... <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle.`,
    `Sweat-shirt DONKEY POCKET WEED 100% coton, fabriqué au France. <br>Ce sweat-shirt représente un Donkey Kong très décontracté (lunettes de soleil, collier de fleurs, chemise hawaïenne...) bien caché derrière une forêt un peu particulière... <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle`,
    `Sweat-shirt crew SNOW WHITE 100% coton, fabriqué en France. <br>Blanche Neige aime les jeux vidéo ! Vous l'ignoriez ? <br>Pourtant, on voit bien sur ce sweat-shirt que l'héroïne imaginée par Disney kiffe sa Nintendo DS. <br>We are geeks et on en est super fiers. <br>Logo brodé. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle`,
    `Sweat-shirt crew WW 100% coton, fabriqué en France. <br>Logo brodé. <br>Détournement du logo Walt Disney qui devient le symbole de la toute puissance de Walter White, le héros de la série culte Breaking Bad. <br>Un sweat-shirt pour les fans d'Heisenberg. <br>Conseils d'entretien: <br>- Lavable en machine 30° max <br>- Lavage à l'envers <br>- Pas de séchage en machine ou de lavage à sec <br>- Repassage à l'envers en évitant le visuel <br>Nous vous conseillons de prendre votre taille habituelle`,
    `Découvrez les chaussures à l’effigie de vos super-héros préférez ! <br>Chaussures CAPTAIN AMERICA. <br>Du 38 au 45. <br>COMPOSITION : <br>- Tige : Cuir <br>-  Doublure : Synthétique <br>-  Semelle int. : Textile <br>-  Semelle ext. : Caoutchouc <br>Fabriquées en Allemagne.`,
    `Découvrez les chaussures à l’effigie de vos super-héros préférez ! <br>Chaussures BATMAN. <br>Du 38 au 45. <br>COMPOSITION : <br>- Tige : Cuir <br>-  Doublure : Synthétique <br>-  Semelle int. : Textile <br>-  Semelle ext. : Caoutchouc <br>Fabriquées en Allemagne.`,
    `Découvrez les chaussures à l’effigie de vos super-héros préférez ! <br>Chaussures FLASH. <br>Du 38 au 45. <br>COMPOSITION : <br>- Tige : Cuir <br>-  Doublure : Synthétique <br>-  Semelle int. : Textile <br>-  Semelle ext. : Caoutchouc <br>Fabriquées en Allemagne.`,
    `Découvrez les chaussures à l’effigie de vos super-héros préférez ! <br>Chaussures FLASH2. <br>Du 38 au 45. <br>COMPOSITION : <br>- Tige : Cuir <br>-  Doublure : Synthétique <br>-  Semelle int. : Textile <br>-  Semelle ext. : Caoutchouc <br>Fabriquées en Allemagne.`,
    `Découvrez les chaussures à l’effigie de vos super-héros préférez ! <br>Chaussures IRONMAN. <br>Du 38 au 45. <br>COMPOSITION : <br>- Tige : Cuir <br>-  Doublure : Synthétique <br>-  Semelle int. : Textile <br>-  Semelle ext. : Caoutchouc <br>Fabriquées en Allemagne.`,
    `Découvrez les chaussures à l’effigie de vos super-héros préférez ! <br>Chaussures SUPERMAN. <br>Du 38 au 45. <br>COMPOSITION : <br>- Tige : Cuir <br>-  Doublure : Synthétique <br>-  Semelle int. : Textile <br>-  Semelle ext. : Caoutchouc <br>Fabriquées en Allemagne.`,
    `Collaboration Starter Mush. <br>Casquette snapback avec le mush (champignon) inspiré de l’univers de Mario mais en version très vénère !!! <br>Casquette snapback brodée MUSH VNR. <br>Taille unique.`, 
    `Une casquette 5 panel en hommage à Pac Man. <br>Casquette Five Panel snapback brodée LOVE. <br>Taille unique.`, 
    `Une casquette pour les (nombreux) fans de Mario et du motif camouflage. <br>Casquette snapback Mario Camo. <br>Taille unique.`, 
    `La casquette de Mario, le célèbbre plombier de Nintendo. <br>Casquette snapback brodée LOGO MARIO. <br>Taille unique.`,
    `ART PRINT APPLE JUICE <br>Impression au format 40x50cm avec une marge blanche de 2cm sur papier haute qualité satiné.`,
    `ART PRINT COOKING TIME <br>Impression au format 40x50cm avec une marge blanche de 2cm sur papier haute qualité satiné.`,
    `ART PRINT LINK FLOYD <br>Impression au format 40x50cm avec une marge blanche de 2cm sur papier haute qualité satiné.`,
    `ART PRINT APPLE MSOCIETY <br>Impression au format 40x50cm avec une marge blanche de 2cm sur papier haute qualité satiné.`,
    `ART PRINT LINK THE WALKING DEAD <br>Impression au format 40x50cm avec une marge blanche de 2cm sur papier haute qualité satiné.`,
    `ART PRINT APPLE WISE MONKEY <br>Impression au format 40x50cm avec une marge blanche de 2cm sur papier haute qualité satiné.`];
    var prices = ['19.99','19.99','19.99','19.99','19.99','19.99','34.99','34.99','34.99','34.99','34.99','34.99','124.99','124.99','124.99','124.99','124.99','124.99','25.99','25.99','25.99','25.99','39.99','39.99','39.99','39.99','39.99','39.99']
    let articles = ["Tee-shirt Addict", "Tee-shirt Air", "Tee-shirt Champignon", "Tee-shirt Dino", "Tee-shirt Geek", "Tee-shirt Replay", "Sweat Alice", "Sweat Geek", "Sweat Mario", "Sweat Donkey kong", "Sweat Blanche Neige", "Sweat Breaking Bad", "Basket America", "Basket Batman", "Basket Flash", "Basket Flash2", "Basket Ironman", "Basket Superman", "Casquette Champignon", "Casquette Love", "Casquette Mario noire", "Casquette Mario rouge", "Art-Print Apple Juice", "Art-Print Cooking Time", "Art-Print Link Floyd", "Art-Print Msociety", "Art-Print TWD", "Art-Print Wise Monkey"];
    // boucle for pour insérer les articles
    for (var ref = 0; ref <= 27; ref++) {
        
        var childDiv = document.createElement('div');
        childDiv.className="card mt-5 mr-5";
        childDiv.id=ref;
        childDiv.style.width="18rem";
        divparent.appendChild(childDiv);

        let imgcard = document.createElement('img');
        imgcard.className="card-img-top";
        imgcard.src="assets/img/images_articles/"+ref+".jpg";
        childDiv.appendChild(imgcard);

        let divContainer = document.createElement('div');
        divContainer.className="card-body";
        childDiv.appendChild(divContainer);

        var title = document.createElement('h5');
        title.className="card-title text-center h5 font-weight-bold text-uppercase";
        title.textContent=articles[ref];
        childDiv.appendChild(title);

        let Descript = document.createElement('p');
        Descript.className="card-text font-weight-light";
        Descript.innerHTML=describ[ref] + "<br><i><b>Ref.00"+ref;
        childDiv.appendChild(Descript);

        let price = document.createElement('p');
        price.className="card-text d-flex";
        price.textContent=prices[ref] + "€";
        price.style.marginLeft="80%";
        price.style.fontSize="15px";
        price.style.fontWeight="bold";
        childDiv.appendChild(price);

        var panier = document.createElement('button');
        panier.className="btn btn-primary mb-3 border_yellow";
        panier.style.width="80%";
        panier.style.margin="auto";
        panier.textContent="Ajouter au panier !";
        panier.setAttribute('onclick','updateBtn()');
        panier.id="article" + ref;
        childDiv.appendChild(panier);
     

        

        if (ref == 0) {
            childDiv.id = "tee-shirt";
        }

        if (ref == 6) {
            childDiv.id = "sweat";
        }

        if (ref == 12) {
            childDiv.id = "shoes";
        }

        if (ref == 18) {
            childDiv.id = "accessories";
        }

        if (ref == 22) {
            childDiv.id = "art-print";
        }

    }
    document.querySelector('main').insertAdjacentElement("afterend",divparent );
// fin de la création des card
document.getElementById('#tee-shirt').addEventListener('click',function(){
    
    document.getElementById('sweat').className="hidden";
    document.getElementById('7').className="hidden";
    document.getElementById('8').className="hidden";
    document.getElementById('9').className="hidden";
    document.getElementById('10').className="hidden";
    document.getElementById('11').className="hidden";
    document.getElementById('shoes').className="hidden";
    document.getElementById('13').className="hidden";
    document.getElementById('14').className="hidden";
    document.getElementById('15').className="hidden";
    document.getElementById('16').className="hidden";
    document.getElementById('17').className="hidden";
    document.getElementById('accessories').className="hidden";
    document.getElementById('19').className="hidden";
    document.getElementById('20').className="hidden";
    document.getElementById('21').className="hidden";
    document.getElementById('art-print').className="hidden";
    document.getElementById('23').className="hidden";
    document.getElementById('24').className="hidden";
    document.getElementById('25').className="hidden";
    document.getElementById('26').className="hidden";
    document.getElementById('27').className="hidden";

    

});

document.getElementById('#sweat').addEventListener('click',function(){
    
    document.getElementById('tee-shirt').className="hidden";
    document.getElementById('1').className="hidden";
    document.getElementById('2').className="hidden";
    document.getElementById('3').className="hidden";
    document.getElementById('4').className="hidden";
    document.getElementById('5').className="hidden";
    document.getElementById('shoes').className="hidden";
    document.getElementById('13').className="hidden";
    document.getElementById('14').className="hidden";
    document.getElementById('15').className="hidden";
    document.getElementById('16').className="hidden";
    document.getElementById('17').className="hidden";
    document.getElementById('accessories').className="hidden";
    document.getElementById('19').className="hidden";
    document.getElementById('20').className="hidden";
    document.getElementById('21').className="hidden";
    document.getElementById('art-print').className="hidden";
    document.getElementById('23').className="hidden";
    document.getElementById('24').className="hidden";
    document.getElementById('25').className="hidden";
    document.getElementById('26').className="hidden";
    document.getElementById('27').className="hidden";

    

});
document.getElementById('#shoes').addEventListener('click',function(){
    
    document.getElementById('tee-shirt').className="hidden";
    document.getElementById('1').className="hidden";
    document.getElementById('2').className="hidden";
    document.getElementById('3').className="hidden";
    document.getElementById('4').className="hidden";
    document.getElementById('5').className="hidden";
    document.getElementById('sweat').className="hidden";
    document.getElementById('7').className="hidden";
    document.getElementById('8').className="hidden";
    document.getElementById('9').className="hidden";
    document.getElementById('10').className="hidden";
    document.getElementById('11').className="hidden";
    document.getElementById('accessories').className="hidden";
    document.getElementById('19').className="hidden";
    document.getElementById('20').className="hidden";
    document.getElementById('21').className="hidden";
    document.getElementById('art-print').className="hidden";
    document.getElementById('23').className="hidden";
    document.getElementById('24').className="hidden";
    document.getElementById('25').className="hidden";
    document.getElementById('26').className="hidden";
    document.getElementById('27').className="hidden";

    

});
document.getElementById('#accessories').addEventListener('click',function(){
    
    document.getElementById('tee-shirt').className="hidden";
    document.getElementById('1').className="hidden";
    document.getElementById('2').className="hidden";
    document.getElementById('3').className="hidden";
    document.getElementById('4').className="hidden";
    document.getElementById('5').className="hidden";
    document.getElementById('sweat').className="hidden";
    document.getElementById('7').className="hidden";
    document.getElementById('8').className="hidden";
    document.getElementById('9').className="hidden";
    document.getElementById('10').className="hidden";
    document.getElementById('11').className="hidden";
    document.getElementById('shoes').className="hidden";
    document.getElementById('13').className="hidden";
    document.getElementById('14').className="hidden";
    document.getElementById('15').className="hidden";
    document.getElementById('16').className="hidden";
    document.getElementById('17').className="hidden";
    document.getElementById('art-print').className="hidden";
    document.getElementById('23').className="hidden";
    document.getElementById('24').className="hidden";
    document.getElementById('25').className="hidden";
    document.getElementById('26').className="hidden";
    document.getElementById('27').className="hidden";

    

});
document.getElementById('#art-print').addEventListener('click',function(){
    
    document.getElementById('tee-shirt').className="hidden";
    document.getElementById('1').className="hidden";
    document.getElementById('2').className="hidden";
    document.getElementById('3').className="hidden";
    document.getElementById('4').className="hidden";
    document.getElementById('5').className="hidden";
    document.getElementById('sweat').className="hidden";
    document.getElementById('7').className="hidden";
    document.getElementById('8').className="hidden";
    document.getElementById('9').className="hidden";
    document.getElementById('10').className="hidden";
    document.getElementById('11').className="hidden";
    document.getElementById('shoes').className="hidden";
    document.getElementById('13').className="hidden";
    document.getElementById('14').className="hidden";
    document.getElementById('15').className="hidden";
    document.getElementById('16').className="hidden";
    document.getElementById('17').className="hidden";
    document.getElementById('accessories').className="hidden";
    document.getElementById('19').className="hidden";
    document.getElementById('20').className="hidden";
    document.getElementById('21').className="hidden";

    

});
// condition pour ajouter au pannier 
    // jouer un song a chaque fois quil est dans le panier plus ajout 
    var btn = document.querySelectorAll('button');
    // tableau images

imgArticles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg'];

// formulaire
let contact = document.createElement('p');
contact.className = "contact text-white text-center h3 mb-2 mt-5";
contact.id = "nous_contacter";
contact.style.marginBottom = "0px"
contact.style.fontWeight="bold";
contact.textContent = "Pour nous contacter, merci de remplir le formulaire :";
document.querySelector('footer').insertAdjacentElement("afterbegin", contact);

let classLabel = ['Nom', 'Prénom', 'Email']

let form = document.createElement('form');
form.id="form";
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
// les articles dans le panier
    if(articles[0])
    {

    let childDivModalContenerArticles = document.createElement('div');
        childDivModalContenerArticles.className="modal-body";
        childDivModalContenerArticles.textContent=articles[0] +" "+prices[0] +" "+"X"+ qte;
        childDivModalContenerShop.appendChild(childDivModalContenerArticles);
    
    let upQuantite  = document.createElement('button');
        upQuantite.className = "btn btn-success";
        upQuantite.style.width="10px";
        upQuantite.textContent="+";
        upQuantite.setAttribute('onclick','up()');
        childDivModalContenerShop.appendChild(upQuantite);



        if (i > 1)
        {
            console.log(i);
            childDivModalContenerArticles.className="hidden";
            upQuantite.className="hidden";
            childDivModalContenerArticlesTotal.className="hidden";
        }
    } 
 
    let childDivModalContenerArticlesTotal = document.createElement('div');
        childDivModalContenerArticlesTotal.className="modal-body";
        childDivModalContenerArticlesTotal.textContent="Prix du panier total :" + Math.round(i*prices[0]) ;
        childDivModalContenerFooter.appendChild(childDivModalContenerArticlesTotal);
}


// jouer un son à chaque ajout au panier
    // création de span pour les notifications article/panier
    var notify = document.createElement('span');
    notify.id='notify';
    modalButton.appendChild(notify);
    // fin de la création de notification 

var audio1 = new Audio('assets/song/stratup.mp3');
audio1.play();




