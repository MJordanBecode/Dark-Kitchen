// {
//     nom: "",
//     image: "",
//     category: [""],
//     price: "17.90 €",
//     description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
// },

let menus = [
    {
        nom: "Burger Chicken",
        image: "https://uiparadox.co.uk/public/templates/royalfare/assets/media/products/p_8.png",
        category: ["Burger"],
        price: "6.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Burger Chicken",
        image: "https://e7.pngegg.com/pngimages/769/392/png-clipart-hamburger-chicken-sandwich-chicken-fingers-chicken-nugget-french-fries-burger-and-sandwich-food-recipe-thumbnail.png",
        category: ["Burger"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Poulet tikka masala",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905559-pngegg-3.png",
        category: ["Salade"],
        price: "11.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "",
        image: "",
        category: [""],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Pilon de Poulet",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905565-pngegg-5.png",
        category: ["Poulet"],
        price: "4.8 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "",
        image: "",
        category: ["Dessert"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Poulet de la famille",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905572-pngegg.png",
        category: ["Poulet"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "",
        image: "",
        category: ["Salade"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Poulet de la famille",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905572-pngegg.png",
        category: ["Tacos"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "",
        image: "",
        category: ["Salade"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
]


const main = document.createElement("main");
const divContainer = document.createElement('div');
divContainer.classList.add("div-container-menu");
document.body.appendChild(main);
main.appendChild(divContainer)




export function createCard(menu){
   
    
    const article = document.createElement("article");
    const div = document.createElement("div");
    
    article.classList.add("card-container");
    div.classList.add("card");
    article.appendChild(div);
     

    div.setAttribute("id", menu.category);


    const image = document.createElement("img")
    image.src = menu.image
    div.appendChild(image)

    const h2 = document.createElement("h2")
    h2.textContent = menu.nom
    div.appendChild(h2)

    const p = document.createElement("p")
    p.textContent = menu.description
    div.appendChild(p)

    

const a = document.createElement("a")
a.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`
div.appendChild(a)

const strong = document.createElement("strong")
strong.textContent = menu.price
div.appendChild(strong)

    return article

}




menus.forEach(menu => {

    const card = createCard(menu);
    divContainer.appendChild(card)

});

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
input_tacos_filter.setAttribute("type", "checkbox"); input_tacos_filter.setAttribute("id", "Poulet"); input_tacos_filter.setAttribute("name", "Poulet"); //add checkBox + id + name
label_tacos.setAttribute("for", "Poulet");
label_tacos.innerText = 'Poulet'; // Text next to the checkbox

//soft
input_soft_filter.setAttribute("type", "checkbox"); input_soft_filter.setAttribute("id", "soft"); input_soft_filter.setAttribute("name", "soft"); //add checkBox + id + name
label_soft.setAttribute("for", "soft");
label_soft.innerText = 'soft'; // Text next to the checkbox

//dessert
input_dessert_filter.setAttribute("type", "checkbox"); input_dessert_filter.setAttribute("id", "dessert"); input_dessert_filter.setAttribute("name", "dessert"); //add checkBox + id + name
label_dessert.setAttribute("for", "dessert");
label_dessert.innerText = 'dessert'; // Text next to the checkbox


//Creation of the filter 
/*
function filter_card(category) {
    let cardContainers = document.querySelectorAll(".card-container")
    let bb = cardContainers.querySelector(".card").getAttribute("id");
console.log(category)
console.log(bb)
bb.forEach(function(cardContainer) {
        if (bb.includes(category)) {
            cardContainer.style.display = "block";
        } else {
            cardContainer.style.display = "none";
        }
    });
}
*/
function filter_card(category) {
    const cardContainers = document.querySelectorAll(".card-container");
    console.log(cardContainers)



    cardContainers.forEach(function(cardContainers) {

        const cardElement = cardContainers.querySelector(".card");
        const kaka = cardElement.getAttribute("id")
        console.log(cardElement)
        console.log(kaka)

        if(category.includes(kaka)){
            
        }else{
            cardContainers.style.display = "none";
        }

       // document.querySelectorAll(".card-container")[1].querySelector(".card").getAttribute("id")
    });
}




//creation event of checkbox 

let burgerCheckBox = document.getElementById("burger");
let saladeCheckBox = document.getElementById("salade");
let tacosCheckBox = document.getElementById("tacos");
let softCheckBox = document.getElementById("soft");
let dessertCheckBox = document.getElementById("dessert");
//add event 
burgerCheckBox.addEventListener('change', function(event){
    if(event.target.checked){
      filter_card("Burger")
    } 
    else{
        cardContainers.style.display = "flex";
    }
       
});
saladeCheckBox.addEventListener('change', function(event){
    if(event.target.checked){
      filter_card("Salade")
    } 
       
});
tacosCheckBox.addEventListener('change', function(event){
    if(event.target.checked){
      filter_card("Poulet")
    } 
       
});
softCheckBox.addEventListener('change', function(event){
    if(event.target.checked){
      filter_card("Soft")
    } 
       
});
dessertCheckBox.addEventListener('change', function(event){
    if(event.target.checked){
      filter_card("Dessert")
    } 
       
});

// let test = filter_card();
// console.log(test);