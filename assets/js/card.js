// card.js

import { updateAside } from './modal.js';
import { menus } from './menus.js';


export function createCard(menu, menus) {
    const article = document.createElement("article");
    const div = document.createElement("div");
    article.classList.add("card-container");
    div.classList.add("card");
    div.setAttribute("id", menu.category); 
    article.appendChild(div);

    const image = document.createElement("img");
    image.src = menu.image;
    div.appendChild(image);

    const h2 = document.createElement("h2");
    h2.textContent = menu.nom;
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = menu.description;
    div.appendChild(p);

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parent-div");
    div.appendChild(parentDiv);

    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add("quantite-content");
    parentDiv.appendChild(iconsDiv);

    const iconMoins = document.createElement("i");
    iconMoins.classList.add("fa-solid", "fa-minus");
    iconsDiv.appendChild(iconMoins);

    iconMoins.addEventListener("click", function() {
        const input = iconsDiv.querySelector("input");
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
            input.dataset.quantity = input.value;
            menu.quantity = parseInt(input.value);
            updateAside(menus); 
        }
    });

    const input = document.createElement("input");
    input.type = "text";
    input.value = "0";
    input.maxLength = "2";
    input.size = "1";
    input.dataset.quantity = "0";
    iconsDiv.appendChild(input);

    const iconPlus = document.createElement("i");
    iconPlus.classList.add("fa-solid", "fa-plus");
    iconsDiv.appendChild(iconPlus);

    iconPlus.addEventListener("click", function() {
        input.value = parseInt(input.value) + 1; 
        input.dataset.quantity = input.value; 
        menu.quantity = parseInt(input.value); 
        updateAside(menus); 
    });

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("price-content");
    const h5 = document.createElement("h5");
    h5.textContent = menu.price;
    contentDiv.appendChild(h5);
    parentDiv.appendChild(contentDiv);

    const a = document.createElement("a");
    a.classList.add("shoppingcart");
    const img = document.createElement("img");
    img.src = "https://uiparadox.co.uk/public/templates/royalfare/assets/media/icons/shopping-cart.png";
    a.appendChild(img);
    contentDiv.appendChild(a);

    a.addEventListener("click", function() {
        // Récupérer la barre latérale et la faire apparaître
        const aside = document.querySelector(".sidebar-menu");
        if (aside) {
            aside.style.right = "0px";
        }
    });

    return article;
}






// filer 

const asideElement = document.createElement('aside');
const h2_filter = document.createElement('h2');
const legend_filter = document.createElement('legend');
const form_filter = document.createElement('form');

const div_burger = document.createElement('div'); // div gonna contain all element of burger
const input_burger_filter = document.createElement('input');
const label_burger = document.createElement('label');

const div_salade = document.createElement('div'); // div gonna contain all element of burger
const input_salade_filter = document.createElement('input');
const label_salade = document.createElement('label');



const div_soft = document.createElement('div'); // div gonna contain all element of burger
const input_soft_filter = document.createElement('input');
const label_soft = document.createElement('label');

const div_dessert = document.createElement('div'); // div gonna contain all element of burger
const input_dessert_filter = document.createElement('input');
const label_dessert = document.createElement('label');

// Ajoute les éléments dans l'aside
asideElement.appendChild(h2_filter);// add h2_filter in the man
form_filter.appendChild(legend_filter);
asideElement.appendChild(form_filter); // add form in the aside 

//burger 
form_filter.appendChild(div_burger);
div_burger.appendChild(input_burger_filter); // add input in div_burger
div_burger.appendChild(label_burger); // add label in  div_burger

//salade
form_filter.appendChild(div_salade);
div_salade.appendChild(input_salade_filter);
div_salade.appendChild(label_salade);



//Boisson 
form_filter.appendChild(div_soft);
div_soft.appendChild(input_soft_filter);
div_soft.appendChild(label_soft);

//Dessert 
form_filter.appendChild(div_dessert);
div_dessert.appendChild(input_dessert_filter);
div_dessert.appendChild(label_dessert);

const mainElement = document.querySelector('main');
mainElement.appendChild(asideElement); // add asideElement in the body

//################# add text in differents elements ###########################
h2_filter.innerHTML = 'Filter';
legend_filter.classList.add('legend_filter');


input_burger_filter.setAttribute("type", "checkbox"); input_burger_filter.setAttribute("id", "burger"); input_burger_filter.setAttribute("name", "burger"); //add checkBox + id + name
label_burger.setAttribute("for", "burger");
label_burger.classList.add('burger');
label_burger.innerText = 'Burger'; // Text next to the checkbox

//salade
input_salade_filter.setAttribute("type", "checkbox"); input_salade_filter.setAttribute("id", "salade"); input_salade_filter.setAttribute("name", "salade"); //add checkBox + id + name
label_salade.setAttribute("for", "salade");
label_salade.innerText = 'Salade'; // Text next to the checkbox


//soft
input_soft_filter.setAttribute("type", "checkbox"); input_soft_filter.setAttribute("id", "soft"); input_soft_filter.setAttribute("name", "soft"); //add checkBox + id + name
label_soft.setAttribute("for", "soft");
label_soft.innerText = 'soft'; // Text next to the checkbox

//dessert
input_dessert_filter.setAttribute("type", "checkbox"); input_dessert_filter.setAttribute("id", "dessert"); input_dessert_filter.setAttribute("name", "dessert"); //add checkBox + id + name
label_dessert.setAttribute("for", "dessert");
label_dessert.innerText = 'dessert'; // Text next to the checkbox



function filter_card(category) {
    const cardContainers = document.querySelectorAll(".card-container");



    cardContainers.forEach(function(cardContainers) {

        const cardElement = cardContainers.querySelector(".card");
        const idFilter = cardElement.getAttribute("id")


        if(idFilter === category){
            cardContainers.style.display = "block"
            
        }else{
            cardContainers.style.display = "none";
        }
       // document.querySelectorAll(".card-container")[1].querySelector(".card").getAttribute("id")
    });
}


function afficherToutesLesCartes() {
    const cardContainers = document.querySelectorAll(".card-container");
    cardContainers.forEach(cardContainer => {
        cardContainer.style.display = "block";
    });
}


//creation event of checkbox 

let burgerCheckBox = document.getElementById("burger");
let saladeCheckBox = document.getElementById("salade");
let softCheckBox = document.getElementById("soft");
let dessertCheckBox = document.getElementById("dessert");

//add event 
burgerCheckBox.addEventListener('change', function(event){
    if(event.target.checked){

      filter_card("Burger");
         
    } else{
        //traitement 
        afficherToutesLesCartes();
    }
});

saladeCheckBox.addEventListener('change', function(event){
    if(event.target.checked){

      filter_card("Salade");

    } else{
        //traitement 
        afficherToutesLesCartes();
    }
});



softCheckBox.addEventListener('change', function(event){
    if(event.target.checked){

      filter_card("Soft");

    } else{
        //traitement 
        afficherToutesLesCartes();
    }
});


dessertCheckBox.addEventListener('change', function(event){
    if(event.target.checked){

      filter_card("Dessert");

    } else{
        //traitement 
        afficherToutesLesCartes();
    }
});