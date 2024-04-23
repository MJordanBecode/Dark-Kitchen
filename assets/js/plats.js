let menus = [
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
        category: ["Plats", "Poulet", "Salade"],
        price: "11.99",
        description: "p lorem",
    },
    {
        nom: "Plateau rustique entre amis",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713863556-top-view-tasty-shrimp-soup-removebg-preview.png",
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




function createCard(menu){
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

const strong = document.createElement("strong")
strong.textContent = menu.price
div.appendChild(strong)

    return article

}

menus.forEach(menu => {

    const card = createCard(menu);
    document.body.appendChild(card)
 
});
