export const menus = [
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
        nom: "Chicken DrumStick",
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
    {
        nom: "Menu Special Crispy Tenders",
        image: "https://images.ctfassets.net/2iottqjdrp5h/4yjuKdQWD6sxBx52fPLzDx/11da0f20bf1f0ca7f38636d68917aa7c/5_Piece_Crispy_Tenders_Combo.png",
        category: ["Plat", "Poulet"],
        price: "20.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
];

menus.forEach(menu => {
    menu.quantity = 0; // Initialiser la quantité à zéro
});