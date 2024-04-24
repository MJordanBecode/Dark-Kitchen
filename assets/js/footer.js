const footer = document.createElement("footer");
footer.id = 'footer';

const slogan = document.createElement("h2");
slogan.textContent = "Dark Secrets, Bright Flavors!";

const socialContainer = document.createElement('div');
const contactContainer = document.createElement('div');
const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');
footerContainer.appendChild(socialContainer);
footerContainer.appendChild(contactContainer);

const socialTitle = document.createElement("h3");
socialTitle.textContent = "Suivez-nous";
socialContainer.appendChild(socialTitle);

const socialIcons = [
    {
        link: "https://www.instagram.com",
        iconClass: "fa-instagram",
    },
    {
        link: "https://www.facebook.com",
        iconClass: "fa-facebook",
    },
    {
        link: "https://www.twitter.com",
        iconClass: "fa-twitter",
    },
    {
        link: "https://www.github.com",
        iconClass: "fa-github",
    },
]

for (const icon of socialIcons) {
    const iconLink = document.createElement("a");
    iconLink.href = icon.link;
    const iconFont = document.createElement("i");
    iconFont.classList.add("fa-brands");
    iconFont.classList.add(icon.iconClass);
    iconLink.appendChild(iconFont);
    socialContainer.appendChild(iconLink);
}

const contactTitle = document.createElement("h3");
contactTitle.textContent = "Contactez-nous";
contactContainer.appendChild(contactTitle);

const contactLink = document.createElement("a");
contactLink.href = "https://www.google.com/intl/fr/gmail/about/";

const contactIcon = document.createElement("i");
contactIcon.classList.add("fa-solid");
contactIcon.classList.add("fa-envelope");

contactLink.appendChild(contactIcon);
contactContainer.appendChild(contactLink);

document.body.appendChild(footer);
footer.appendChild(slogan);

footer.appendChild(footerContainer);

// Add dark mode button:
const darkModeButton = document.createElement("button");
darkModeButton.id = "darkMode";
const darkIcon = document.createElement("i");
darkIcon.id = "iconMode";
darkIcon.classList.add("fa-solid");
darkIcon.classList.add("fa-sun");
darkIcon.classList.add("fa-beat");
darkModeButton.appendChild(darkIcon);
document.body.appendChild(darkModeButton);


darkModeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')){
    darkIcon.classList.remove('fa-sun');
    darkIcon.classList.add('fa-moon');  
  } else{
    darkIcon.classList.remove('fa-moon');
    darkIcon.classList.add('fa-sun');
  }
});