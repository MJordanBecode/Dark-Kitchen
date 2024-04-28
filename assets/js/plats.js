let menus = [
    {
        nom: "Burger Chicken",
        image: "https://uiparadox.co.uk/public/templates/royalfare/assets/media/products/p_8.png",
        category: ["Plats", "Poulet"],
        price: "6.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Poulet tikka masala",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905559-pngegg-3.png",
        category: ["Plats", "Poulet", "Salade"],
        price: "11.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Pilon de Poulet",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905565-pngegg-5.png",
        category: ["Entrée","Soupe", "Poulet"],
        price: "9.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Poulet de la famille",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905572-pngegg.png",
        category: ["Plat", "Poulet"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
];

menus.forEach(menu => {
    menu.quantity = 0; // Initialiser la quantité à zéro
});

const main = document.querySelector("main");
const divContainer = document.createElement('div');
divContainer.classList.add('div-container-menu');
document.body.appendChild(main);
main.appendChild(divContainer);

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

menus.forEach(menu => {
    const card = createCard(menu);
    divContainer.appendChild(card);
});


export function createAside(menus) {
    // Supprimez la barre latérale existante s'il y en a une
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
    h6Total.textContent = "total";
    const h6Price = document.createElement("h6")
    h6Price.textContent = calculateTotal(menus)+ " €"

    aside.appendChild(divShop);
    divShop.appendChild(h2);
    divShop.appendChild(iconClosure);
    aside.appendChild(divBorder);

    // Créez une liste pour les articles avec une quantité de 1
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
            const input = document.createElement("input");
            input.type = "text";
            input.value = menu.quantity;
            input.maxLength = "2";
            input.size = "1";

            const iconPlus = document.createElement("i");
            iconPlus.classList.add("fa-solid", "fa-plus");

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
            // Le aside est fermé, retirez le filtre noir s'il existe
            const modalFilter = document.querySelector(".modal-filter");
            if (modalFilter) {
                modalFilter.remove();
            }
        }
    });
}

function calculateTotal(menus) {
    let total = 0;
    menus.forEach(menu => {
        total += parseFloat(menu.price) * menu.quantity;
    });
    return total.toFixed(2); // Retourne le total arrondi à 2 décimales
}







// Fonction pour mettre à jour la barre latérale avec les nouvelles quantités
function updateAside(menus) {
    const asideElement = document.querySelector(".sidebar-menu");
    if (asideElement) {
        createAside(menus);
    }
}


const asideElement = createAside(menus);
