function search() {
    //declare une fonction js search() qui sera appler lorsque un event sera declancher par l'utilisateur.
    
    let input = document.getElementById('searchbar').value
    //récupere la valeur saisie dans un element HTML avec l'ID pour la stoker dans une variable input

    input=input.toLowerCase();
// Converti la valeur saisie dans la barre de recherche pour rendre la recherche insensible à la casse.

    let x = document.getElementsByClassName('Search');
    // "Récupérer tous les éléments HTML de classe CSS 'Search' et les stocker dans une variable nommée 'x'. 
      
    for (i = 0; i < x.length; i++) { 
        //boucle for qui parcourt tous les element stocké dans la variable x

    
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            // "Vérifie si le contenu textuel de l'élément actuel (x[i].textContent.toLowerCase()) contient la valeur de recherche (input) en utilisant la méthode includes(), qui renvoie true si la valeur de recherche est trouvée dans le contenu, sinon false."
            
            x[i].style.display="none";
           
            // Si la valeur de recherche n'est pas trouvée dans le contenu de l'élément le rende invisible sur la page.
        }
        else {
            x[i].style.display="list-item";
            // Si la valeur recherchée est trouvée dans le contenu de l'élément, rentre visible sur la page.
        }
    }
}