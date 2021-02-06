import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import { top_bar } from './components/top-bar';
import { header } from './components/header';
import { hero } from './components/hero';

const container = document.getElementById('content');

container.innerHTML = `
    ${top_bar().outerHTML} 
    ${header().outerHTML}
    ${hero().outerHTML}

 `