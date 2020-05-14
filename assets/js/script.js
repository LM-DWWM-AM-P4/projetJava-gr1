let body = document.querySelector('body');
let nav = document.createElement('nav');

document.getElementById('header').insertAdjacentElement('afterbegin', nav);

let logo = document.createElement('a');

document.querySelector('nav').insertAdjacentElement('afterbegin', logo);

let name = document.createElement('h1');
name.textContent = 'GEEK-Wear\'s';
document.querySelector('a').insertAdjacentElement('afterbegin', name);


var img1 = document.createElement("img");
img1.src="https://img.icons8.com/cotton/64/000000/sneakers--v2.png";






var menu = document.createElement('ul');
let anchor = [img1,'Sweat','Chaussures','Accessoires', 'Art-Print','Nous contacter']
let list = ['#tee-shirt','#sweat','#shoes','#accessories', '#art-print','#nous_contacter']
for (let i = 0; i < list.length; i++) {
    var menuList = document.createElement('a');

     menuList.href=list[i];
    //  menuList.textContent=anchor[i];

    menu.appendChild(menuList);
}
document.querySelector('a').insertAdjacentElement('afterend', menu);
// document.get('a').insertAdjacentElement('afterend', menu);
// var img1 = document.createElement("img");
// img1.src="https://img.icons8.com/cotton/64/000000/sneakers--v2.png";
// document.getElementsByTagName("a[href='#shoes']").insertAdjacentElement('afterend',img1);

