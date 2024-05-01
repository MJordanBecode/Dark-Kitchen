
import { createCard } from "./card.js";
import { menus } from "./menus.js";
import { createAside } from "./modal.js";


menus.forEach(menu => {
    const card = createCard(menu, menus);
    const parentElement = document.querySelector(".div-container-menu"); 
    parentElement.appendChild(card);
});


createAside(menus);
