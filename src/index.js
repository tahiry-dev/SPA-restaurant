import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import header from './components/header';
import hero from './components/hero';
import why from './components/why';
import menu from './components/menu';
import book from './components/book';
import contact from './components/contact';
import footer from './components/footer';



const homePage = () => {
    const parent = document.createElement('div');
    parent.innerHTML = `
        ${header().outerHTML}
        ${hero().outerHTML}
        ${why().outerHTML}
        ${footer().outerHTML}
        
    `
    return parent
}

const parentElement = document.getElementById("content")

parentElement.appendChild(homePage());


document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'menu-link') {

        parentElement.innerHTML = `
            ${header().outerHTML}
            ${menu().outerHTML}
            ${footer().outerHTML}
        `
    } else if (e.target && e.target.id == 'contact-link') {

        parentElement.innerHTML = `
            ${header().outerHTML}
            ${contact().outerHTML}
            ${footer().outerHTML}
        `
    } else if (e.target && e.target.id == 'booking') {
        parentElement.innerHTML = `
            ${header().outerHTML}
            ${book().outerHTML}
            ${footer().outerHTML}
        `
    } else if (e.target && e.target.id == 'home') {
        parentElement.innerHTML = `
            ${header().outerHTML}
            ${hero().outerHTML}
            ${why().outerHTML}
            ${footer().outerHTML}
        `
    }

});







