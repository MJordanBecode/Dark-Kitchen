export function calculateTotal(menus) {
    let total = 0;
    menus.forEach(menu => {
        total += parseFloat(menu.price) * menu.quantity;
    });
    return total.toFixed(2); // Retourne le total arrondi à 2 décimales
}
