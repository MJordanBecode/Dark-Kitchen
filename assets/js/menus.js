export const menus = [
    {
        nom: "Burger Chicken",
        image: "https://uiparadox.co.uk/public/templates/royalfare/assets/media/products/p_8.png",
        category: ["Plats", "Poulet"],
        price: "6.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Sundae",
        image: "https://image.noelshack.com/fichiers/2024/17/7/1714332668-82635a.png",
        category: ["Plats", "Poulet", "Salade"],
        price: "4.50 €",
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
        nom: "Menu Supreme Poulet",
        image: "https://image.noelshack.com/fichiers/2024/17/2/1713905572-pngegg.png",
        category: ["Plat", "Poulet"],
        price: "13.90 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Menu Crispy Tenders",
        image: "https://images.ctfassets.net/2iottqjdrp5h/4yjuKdQWD6sxBx52fPLzDx/11da0f20bf1f0ca7f38636d68917aa7c/5_Piece_Crispy_Tenders_Combo.png",
        category: ["Plat", "Poulet"],
        price: "10,99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Dark Nuggets",
        image: "https://image.noelshack.com/fichiers/2024/17/7/1714325326-926505.png",
        category: ["Plat", "Poulet"],
        price: "4.15 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Oreo Shake",
        image: "https://image.noelshack.com/fichiers/2024/17/7/1714325319-926505-3.png",
        category: ["Plat", "Poulet"],
        price: "4.70 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Dark Shake",
        image: "https://image.noelshack.com/fichiers/2024/17/7/1714325323-926505-4.png",
        category: ["Plat", "Poulet"],
        price: "4.70 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Crispy Chicken Salad",
        image: "https://image.noelshack.com/fichiers/2024/17/7/1714325330-926505-2.png",
        category: ["Plat", "Poulet"],
        price: "6.99 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
    {
        nom: "Coca-Cola",
        image: "https://image.noelshack.com/fichiers/2024/17/7/1714325338-pngegg-6.png",
        category: ["Plat", "Poulet"],
        price: "2.30 €",
        description: "Lorem ipsum dolor sit amet consectetur. Ut in vulputate ac odio.",
    },
];

menus.forEach(menu => {
    menu.quantity = 0; // Initialiser la quantité à zéro
});