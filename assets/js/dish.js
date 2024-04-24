let menus = [
    {
        nom: "Chicken Burger",
        image: "https://uiparadox.co.uk/public/templates/royalfare/assets/media/products/p_8.png",
        category: ["Plats", "Poulet"],
        price: "6.99 €",
        description: "A crispy chicken burger with a homemade patty, topped with crisp lettuce, fresh tomato, caramelized onions, and a secret dark sauce. Served with crispy fries.",
    },
    {
        nom: "Tikka Masala",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905559-pngegg-3.png",
        category: ["Plats", "Poulet", "Salade"],
        price: "11.99 €",
        description: "Chicken pieces marinated in a creamy sauce with dark spices and grilled in a tandoor, served with fragrant basmati rice and soft naan bread.",
    },
    {
        nom: "Chicken Drumsticks",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905565-pngegg-5.png",
        category: ["Entrée","Soupe", "Poulet"],
        price: "6.80 €",
        description: "Chicken drumsticks marinated in a blend of dark spices, grilled to perfection for deep flavor and tender texture. Served with a dark dipping sauce and crunchy vegetables.",
    },
    {
        nom: "Family Chicken Dish",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905572-pngegg.png",
        category: ["Plat", "Poulet"],
        price: "13.90 €",
        description: "A generous dish of tender and juicy chicken pieces, slow-cooked with seasonal vegetables in a rich and dark sauce. Served with herbed pilaf rice.",
    },
]


const main = document.createElement("main")
const divContainer = document.createElement('div');
divContainer.classList.add('div-container-menu')
document.body.appendChild(main);
main.appendChild(divContainer)



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
    divContainer.appendChild(card)


 
});


