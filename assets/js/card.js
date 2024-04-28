// card.js

import { updateAside } from './modal.js';

export function createCard(menu) {
    const article = document.createElement("article");
    const div = document.createElement("div");
    article.classList.add("card-container");
    div.classList.add("card");
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
            updateAside(menus); // Mettre à jour la barre latérale après modification de la quantité
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
        updateAside(menus); // Mettre à jour la barre latérale après modification de la quantité
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