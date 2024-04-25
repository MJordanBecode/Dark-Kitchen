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
        price: "4.8 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Poulet de la famille",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905572-pngegg.png",
        category: ["Plat", "Poulet"],
        price: "17.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
]


const main = document.querySelector("main");
const divContainer = document.createElement('div');
divContainer.classList.add('div-container-menu');
document.body.appendChild(main);
main.appendChild(divContainer)




export function createCard(menu){
   
    const sideMenu = document.querySelectorAll("sidebar-menu")
    const article = document.createElement("article");
    const div = document.createElement("div");
    
    
    article.classList.add("card-container");
    div.classList.add("card");
    article.appendChild(div);
     




    const image = document.createElement("img")
    image.src = menu.image
    div.appendChild(image)

    const h2 = document.createElement("h2")
    h2.textContent = menu.nom
    div.appendChild(h2)

    const p = document.createElement("p")
    p.textContent = menu.description
    div.appendChild(p)



const parentDiv = document.createElement("div");
parentDiv.classList.add("parent-div");


div.appendChild(parentDiv);


const iconsDiv = document.createElement("div");
iconsDiv.classList.add("quantite-content");
parentDiv.appendChild(iconsDiv);


const iconPlus = document.createElement("i");
iconPlus.classList.add("fa-solid", "fa-plus");
iconsDiv.appendChild(iconPlus);

iconPlus.addEventListener("click", function() {
    input.value = parseInt(input.value) + 1; 
});



const input = document.createElement("input")
input.type = "text"
input.value = "1"
input.maxLength = "2"
input.size = "1"

iconsDiv.appendChild(input)
const iconMoins = document.createElement("i");
iconMoins.classList.add("fa-solid", "fa-minus");
iconsDiv.appendChild(iconMoins);

iconMoins.addEventListener("click", function() {
    if (parseInt(input.value) > 1) { // Vérifie si la valeur est supérieure à 0
        input.value = parseInt(input.value) - 1; // Diminue la valeur de 1
    }
});




const contentDiv = document.createElement("div");
contentDiv.classList.add("price-content");
const strong = document.createElement("h5");
strong.textContent = menu.price;
contentDiv.appendChild(strong);

parentDiv.appendChild(contentDiv);


    
   



const a = document.createElement("a")
a.classList.add("shoppingcart")
const img = document.createElement("img")
img.src = "https://uiparadox.co.uk/public/templates/royalfare/assets/media/icons/shopping-cart.png";
a.appendChild(img)
contentDiv.appendChild(a);


a.addEventListener("click", function() {
    // Faites apparaître le menu latéral lorsque le lien est cliqué
    asideElement.style.right = "0px";
});





    return article

}


menus.forEach(menu => {

    const card = createCard(menu);
    divContainer.appendChild(card)


 
});




export function createAside () {
    const aside = document.createElement("aside")
    const h2 = document.createElement("h2")
    h2.textContent = "test"
    aside.classList.add("sidebar-menu")
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    aside.appendChild(h2)
    aside.appendChild(ul)
    ul.appendChild(li)


    



    document.body.appendChild(aside)
    return aside
}

const asideElement = createAside ()



