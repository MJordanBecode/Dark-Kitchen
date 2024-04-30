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

