import home from './load.js'
import menu from './menu.js';
import contact from './contact.js';

export default function header() {
    const element = document.createElement('div');
    const homeBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const contactBtn = document.createElement('div');

    homeBtn.textContent = "Home";
    homeBtn.classList.add('menuButton');
    homeBtn.addEventListener("click", selectHome, false);

    menuBtn.textContent = "Menu";
    menuBtn.classList.add('menuButton');
    menuBtn.addEventListener("click", selectMenu, false);

    contactBtn.textContent = "Contact";
    contactBtn.classList.add('menuButton');
    contactBtn.addEventListener("click", selectContact, false);
 
    element.appendChild(homeBtn);
    element.appendChild(menuBtn);
    element.appendChild(contactBtn);

    element.classList.add('navBar');
    return element;
  }

function selectHome() {
    clearContent();
    const content = document.querySelector('#content');
    content.appendChild(home());
}

function selectMenu() {
    clearContent();
    const content = document.querySelector('#content');
    content.appendChild(menu());
}

function selectContact() {
    clearContent();
    const content = document.querySelector('#content');
    content.appendChild(contact());
}

function clearContent() {
    const myElement = document.getElementById("content");
    for (const child of myElement.children) {
        child.remove();
    };
}