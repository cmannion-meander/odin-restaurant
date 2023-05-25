import _ from 'lodash';
import './style.css';
import home from './load.js';
import header from './header.js';

const navbar = document.querySelector('#header');

navbar.appendChild(header());

const content = document.querySelector('#content');

content.appendChild(home());
// content.appendChild(menu());