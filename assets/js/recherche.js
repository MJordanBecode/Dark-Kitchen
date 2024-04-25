//------------------------------------------------------js menu------------------------------------

const header = document.createElement("header");

const nav = document.createElement("nav");
const logo =document.createElement("img");
const Qualité =document.createElement("a");
const Contact =document.createElement("a");
const NosMenu =document.createElement("a");


logo.setAttribute("src", "./assets/logo2.png");
logo.classList.add("logo"); //ajouter des classes à élément html en dom

Qualité.setAttribute("href","#");//ajouter des liens hypertext
// Contact.setAttribute("href","#");//ajouter des liens hypertext
// NosMenu.setAttribute("href","#");//ajouter des liens hypertext
 

// debut de a verifier
// const logoImg = document.createElement("img");
// const containerDiv = document.createElement("div");
// const button1=document.createElement("button1");
// const link1=document.createElement("a");
// const button2=document.createElement("button2");
// const link2=document.createElement("a");
// const button3=document.createElement("button3");
// const link3=document.createElement("a");
// const searchInput = document.createElement("input");


// logo.className = "logo";


// logoImg.src = "assets/logo2.png";
// logoImg.alt = "Logo"; 


// containerDiv.className = "container";
// link1.href = "#";
// link1.textContent = "Nos menu";

// link2.href="#";
// link2.textContent="Qualité";

// link3.href="#";
// link3.textContent="Nous contacter";



// searchInput.type = "text";
// searchInput.name = "search";
// searchInput.placeholder = "Search";


// searchInput.addEventListener("keyup", search);



// // Obtenir le body du document
// const body = document.getElementsByTagName("body")[0];

// // Insérer le header au début du body
// body.insertBefore(header, body.firstChild);

// logo.appendChild(logoImg);
// button1.appendChild(link1);
// button2.appendChild(link2);
// button3.appendChild(link3);
// containerDiv.appendChild(button1);
// containerDiv.appendChild(button2);
// containerDiv.appendChild(button3);
// nav.appendChild(containerDiv);
// nav.appendChild(logo);
// nav.appendChild(containerDiv);
// nav.appendChild(searchInput);

// fin de a verifier
header.appendChild(nav);
nav.appendChild(Qualité);
nav.appendChild(Contact);
nav.appendChild(NosMenu);
nav.appendChild(logo);
nav.appendChild(Qualité);

document.body.appendChild(header);



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