// aside.js

import { calculateTotal } from './calcule.js';





export function createAside(menus) {
    const existingAside = document.querySelector(".sidebar-menu");
    if (existingAside) {
        existingAside.remove();
    }

    // Créez une nouvelle barre latérale
    const aside = document.createElement("aside");
    const divBorder = document.createElement("div");
    divBorder.classList.add("border-grey");
    aside.classList.add("sidebar-menu");
    const divShop = document.createElement("div");
    divShop.classList.add("text-shop");
    const h2 = document.createElement("h2");
    h2.textContent = "Shop";
    const iconClosure = document.createElement("i");
    iconClosure.classList.add("fa-solid", "fa-xmark");
    iconClosure.addEventListener("click", function() {
        aside.style.right = "-100%";
    });
    const divTotal = document.createElement("div");
    divTotal.classList.add("total");
    const h6Total = document.createElement("h6");
    h6Total.textContent = "TOTAL";
    const h6Price = document.createElement("h6");
    const divButton = document.createElement("div")
    divButton.classList.add("checkout-button")
    const a = document.createElement("a")
    a.addEventListener("click", function(){

        alert("Votre Dark Kitchen commande a été prise !")
    })

    a.classList.add("outline-a")
    const iconChicken = document.createElement("i")
    iconChicken.classList.add("fa-solid", "fa-drumstick-bite" , "fa-bounce")
    const h5 = document.createElement("h5")
    h5.textContent = "Checkout"

    // Fonction pour mettre à jour le prix total dans la barre latérale
    function updateTotalPrice() {
        h6Price.textContent = calculateTotal(menus) + " €";
    }

    aside.appendChild(divShop);
    divShop.appendChild(h2);
    divShop.appendChild(iconClosure);
    aside.appendChild(divBorder);

    // Créez une liste pour les articles avec une quantité
    const ul = document.createElement("ul");
    menus.forEach(menu => {
        if (menu.quantity >= 1) {
            const li = document.createElement("li");
            const image = document.createElement("img");
            image.src = menu.image;
            image.alt = menu.nom;
            const liBorder = document.createElement("li");
            liBorder.classList.add("border-div-li");
            const div = document.createElement("div");
            const newDiv = document.createElement("div");
            newDiv.classList.add("prix");
            const h2 = document.createElement("h2");
            div.classList.add("text-produit");
            h2.textContent = menu.nom;
            const h5 = document.createElement("h5");
            h5.textContent = menu.price;

            const iconsDiv = document.createElement("div");
            iconsDiv.classList.add("quantite-content");

            const iconMoins = document.createElement("i");
            iconMoins.classList.add("fa-solid", "fa-minus");
            iconMoins.addEventListener("click", function(){
                const input = iconsDiv.querySelector("input");
                if (parseInt(input.value) > 0) {
                    input.value = parseInt(input.value) - 1;
                    input.dataset.quantity = input.value;
                    menu.quantity = parseInt(input.value);
                    updateTotalPrice(); 
                }
            });



            
            const input = document.createElement("input");
            input.type = "text";
            input.value = menu.quantity;
            input.maxLength = "2";
            input.size = "1";

            const iconPlus = document.createElement("i");
            iconPlus.classList.add("fa-solid", "fa-plus");
            iconPlus.addEventListener("click", function(){
                input.value = parseInt(input.value) + 1;
                input.dataset.quantity = input.value;
                menu.quantity = parseInt(input.value);
                updateTotalPrice(); 
            });

            li.appendChild(image);
            li.appendChild(div);
            div.appendChild(h2);
            div.appendChild(newDiv);
            iconsDiv.appendChild(iconMoins);
            iconsDiv.appendChild(input);
            iconsDiv.appendChild(iconPlus);
            newDiv.appendChild(iconsDiv);
            newDiv.appendChild(h5);
            ul.appendChild(li);
            ul.appendChild(liBorder);
        }
    });

    aside.appendChild(ul);
    document.body.appendChild(aside);
    aside.appendChild(divTotal);
    divTotal.appendChild(h6Total);
    divTotal.appendChild(h6Price);
    aside.appendChild(divButton)
    divButton.appendChild(a)
    a.appendChild(h5)
    a.appendChild(iconChicken)

    // Ajoutez un gestionnaire d'événements pour détecter quand le aside est ouvert
    aside.addEventListener("transitionend", function() {
        if (aside.style.right === "0px") {
            // Le aside est ouvert, ajoutez le filtre noir
            const modalFilter = document.createElement("div");
            modalFilter.classList.add("modal-filter");
            document.body.appendChild(modalFilter);

            // Ajoutez un gestionnaire d'événements pour fermer le aside lorsque le filtre est cliqué
            modalFilter.addEventListener("click", function() {
                aside.style.right = "-100%";
                modalFilter.remove();
            });
        } else {
            const modalFilter = document.querySelector(".modal-filter");
            if (modalFilter) {
                modalFilter.remove();
            }
        }
    });

   
    updateTotalPrice();
}





export function updateAside(menus) {
    const asideElement = document.querySelector(".sidebar-menu");
    if (asideElement) {
       
        asideElement.remove();
        
       
        createAside(menus);
    }
}