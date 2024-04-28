// Import des fonctionnalités
import { createCard } from "./card.js";
import { menus } from "./menus.js";
import { createAside } from "./modal.js";

// Création des cartes pour chaque menu
menus.forEach(menu => {
    const card = createCard(menu, menus);
    const parentElement = document.querySelector(".div-container-menu"); // Assurez-vous de sélectionner l'élément parent correctement
    parentElement.appendChild(card);
});

// Création de la barre latérale avec les menus ayant une quantité > 0
createAside(menus);
