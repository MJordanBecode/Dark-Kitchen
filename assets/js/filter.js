let menu = [
    {
        nom: "Burger Chicken",
        image: "https://uiparadox.co.uk/public/templates/royalfare/assets/media/products/p_8.png",
        category: ["Plats", "Poulet"],
        price: "6.99",
        description: "p lorem",
    },
    {
        nom: "Salade de poulet",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713863344-nourriture-restaurant-removebg-preview.png ",
        category: ["Plats", "Poulet", "Salade","vegan"],
        price: "11.99",
        description: "p lorem",
    },
    {
        nom: "Plateau rustique entre amis",
        image: "./assets/img/Plateau-rustique-friends.png",
        category: ["Entrée","Soupe", "Poulet"],
        price: "4.8",
        description: "p lorem",
    },
    {
        nom: "Poulet de la famille",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713863695-top-view-cooked-spiced-chicken-dark-surface-removebg-preview.png ",
        category: ["Plat", "Poulet"],
        price: "17.9",
        description: "p lorem",
    },
]



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

const div_tacos = document.createElement('div'); // div gonna contain all element of burger
const input_tacos_filter = document.createElement('input'); 
const label_tacos = document.createElement('label');

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

//Tacos 
form_filter.appendChild(div_tacos);
div_tacos.appendChild(input_tacos_filter);
div_tacos.appendChild(label_tacos);

//Boisson 
form_filter.appendChild(div_soft);
div_soft.appendChild(input_soft_filter);
div_soft.appendChild(label_soft);

//Dessert 
form_filter.appendChild(div_dessert);
div_dessert.appendChild(input_dessert_filter);
div_dessert.appendChild(label_dessert);

document.body.appendChild(asideElement); // add asideElement in the body

//################# add text in differents elements ###########################
h2_filter.innerHTML = 'Filter';
legend_filter.innerHTML = 'Availability';
legend_filter.classList.add('legend_filter');


input_burger_filter.setAttribute("type", "checkbox"); input_burger_filter.setAttribute("id", "burger"); input_burger_filter.setAttribute("name", "burger"); //add checkBox + id + name
label_burger.setAttribute("for", "burger");
label_burger.classList.add('burger');
label_burger.innerText = 'Burger'; // Text next to the checkbox

//salade
input_salade_filter.setAttribute("type", "checkbox"); input_salade_filter.setAttribute("id", "salade"); input_salade_filter.setAttribute("name", "salade"); //add checkBox + id + name
label_salade.setAttribute("for", "salade");
label_salade.innerText = 'Salade'; // Text next to the checkbox

//tacos
input_tacos_filter.setAttribute("type", "checkbox"); input_tacos_filter.setAttribute("id", "tacos"); input_tacos_filter.setAttribute("name", "tacos"); //add checkBox + id + name
label_tacos.setAttribute("for", "tacos");
label_tacos.innerText = 'tacos'; // Text next to the checkbox

//soft
input_soft_filter.setAttribute("type", "checkbox"); input_soft_filter.setAttribute("id", "soft"); input_soft_filter.setAttribute("name", "soft"); //add checkBox + id + name
label_soft.setAttribute("for", "soft");
label_soft.innerText = 'soft'; // Text next to the checkbox

//dessert
input_dessert_filter.setAttribute("type", "checkbox"); input_dessert_filter.setAttribute("id", "dessert"); input_dessert_filter.setAttribute("name", "dessert"); //add checkBox + id + name
label_dessert.setAttribute("for", "dessert");
label_dessert.innerText = 'dessert'; // Text next to the checkbox


//Creation of the filter 

//Variables declarations 


function filter() {
    let categorySafe = [];
    // Cette boucle va parcourir les différentes entrées du tableau "menus"
    for (let i = 0; i < menus.length; i++) {
        // Ajouter la catégorie actuelle à "categorySafe"
        categorySafe.push(menus[i].category);
    }
    // Afficher les catégories pour vérification
    console.log(categorySafe);
    
    // Parcourir les catégories
    for (let j = 0; j < categorySafe.length; j++) {
        // Afficher chaque catégorie avec l'index actuel
        console.log("test = " + categorySafe[j]);
    }
    // Retourner le tableau des catégories
    return categorySafe;
}


filter ();

