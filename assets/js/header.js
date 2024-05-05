//------------------------------------------------------js menu------------------------------------

const header = document.createElement("header");
const nav = document.createElement("nav");
const logo = document.createElement("img");
const divmenu = document.createElement("div");
const divLogo = document.createElement("div")
const Qualite = document.createElement("a");
const Contact = document.createElement("a");
const NosMenu = document.createElement("a");
const modebouton = document.createElement("button");
document.body.appendChild(modebouton);

logo.setAttribute("src", "https://debadarkkitchen.com/wp-content/uploads/2023/10/deba-dark-kitchen-home-page-logo.png");
logo.classList.add("logo"); //ajouter des classes à élément html en dom


Qualite.setAttribute("href","#");//ajouter des liens hypertext
Qualite.innerText='Menu';

Contact.setAttribute("href","#");//ajouter des liens hypertext
Contact.innerText='Deals';

NosMenu.setAttribute("href","#");//ajouter des liens hypertext
NosMenu.innerText='Restaurants';

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

