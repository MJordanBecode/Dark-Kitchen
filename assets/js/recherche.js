//------------------------------------------------------js menu------------------------------------

const header = document.createElement("header");
const nav = document.createElement("nav");
const logo =document.createElement("img");
const divmenu=document.createElement("div");
const divLogo=document.createElement("div")
const Qualite =document.createElement("a");
const Contact =document.createElement("a");
const NosMenu =document.createElement("a");
const modebouton =document.createElement("button");
document.body.appendChild(modebouton);

logo.setAttribute("src", "./assets/logo2.png");
logo.classList.add("logo"); //ajouter des classes à élément html en dom


Qualite.setAttribute("href","#");//ajouter des liens hypertext
Qualite.innerText='Qualité';

Contact.setAttribute("href","#");//ajouter des liens hypertext
Contact.innerText='Contact';

NosMenu.setAttribute("href","#");//ajouter des liens hypertext
NosMenu.innerText='Nos menu ';

divLogo.classList.add("Div-logo");

divmenu.classList.add("Div-menu");
modebouton.setAttribute("id","classClic");

header.appendChild(nav);
nav.appendChild(logo);
nav.appendChild(divLogo);
divLogo.appendChild(logo);
nav.appendChild(divmenu);
divmenu.appendChild(Qualite);
divmenu.appendChild(Contact);
divmenu.appendChild(NosMenu);
nav.appendChild(modebouton);

document.body.appendChild(header);


//----------Dark mode-------------------------

  modebouton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
})

// //---------------------------------------------- js barre de recherche----------------------------------------------
// function search() {
//     //declare une fonction js search() qui sera appler lorsque un event sera declancher par l'utilisateur.
    
//     let input = document.getElementById('searchbar').value
//     //récupere la valeur saisie dans un element HTML avec l'ID pour la stoker dans une variable input

//     input=input.toLowerCase();
// // Converti la valeur saisie dans la barre de recherche pour rendre la recherche insensible à la casse.

//     let x = document.getElementsByClassName('Search');
//     // "Récupérer tous les éléments HTML de classe CSS 'Search' et les stocker dans une variable nommée 'x'. 
      
//     for (i = 0; i < x.length; i++) { 
//         //boucle for qui parcourt tous les element stocké dans la variable x

    
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             // "Vérifie si le contenu textuel de l'élément actuel (x[i].textContent.toLowerCase()) contient la valeur de recherche (input) en utilisant la méthode includes(), qui renvoie true si la valeur de recherche est trouvée dans le contenu, sinon false."
            
//             x[i].style.display="none";
           
//             // Si la valeur de recherche n'est pas trouvée dans le contenu de l'élément le rende invisible sur la page.
//         }
//         else {
//             x[i].style.display="list-item";
//             // Si la valeur recherchée est trouvée dans le contenu de l'élément, rentre visible sur la page.
//         }
//     }
// }