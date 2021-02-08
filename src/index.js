import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import header from './components/header';
import hero from './components/hero';
import why from './components/why';
import menu from './components/menu';
import book from './components/book';
import contact from './components/contact';
import footer from './components/footer';


const container = document.getElementById('content');

container.innerHTML = `
    ${header().outerHTML}
    ${hero().outerHTML}
    ${why().outerHTML}
    ${menu().outerHTML}
    ${book().outerHTML}
    ${contact().outerHTML}
    ${footer().outerHTML}
 `;