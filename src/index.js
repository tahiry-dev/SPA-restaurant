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


const defaultPage = (variablePage = hero) => {
  const parent = document.createElement('div');
  parent.innerHTML = `
        ${header().outerHTML}
        ${variablePage().outerHTML}
        ${why().outerHTML}
        ${footer().outerHTML}
    `;
  return parent;
};

const container = document.getElementById('content');

container.appendChild(defaultPage());


document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'menu-link') {
    container.innerHTML = ` ${defaultPage(menu).outerHTML} `;
  } else if (e.target && e.target.id === 'contact-link') {
    container.innerHTML = ` ${defaultPage(contact).outerHTML} `;
  } else if (e.target && e.target.id === 'booking') {
    container.innerHTML = ` ${defaultPage(book).outerHTML}`;
  } else if (e.target && e.target.id === 'home') {
    container.innerHTML = ` ${defaultPage(hero).outerHTML}`;
  }
});
