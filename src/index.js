import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


import { top_bar } from './components/top-bar';
import { header } from './components/header';
import { hero } from './components/hero';
import { why } from './components/why';
import { menu } from './components/menu';
import { book } from './components/book';
import { contact } from './components/contact';
import { footer } from './components/footer';

const container = document.getElementById('content');

container.innerHTML = `
    ${top_bar().outerHTML} 
    ${header().outerHTML}
    ${hero().outerHTML}
    ${why().outerHTML}
    ${menu().outerHTML}
    ${book().outerHTML}
    ${contact().outerHTML}
    ${footer().outerHTML}

 `