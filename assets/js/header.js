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

