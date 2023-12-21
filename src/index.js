import './style.css';
import './particles.css';
import initParticles from './particles.js';
/* import linkNav from './nav-link.js'; */

document.addEventListener('DOMContentLoaded', function () {
    initParticles();
    const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('nav');

        navToggle.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
        });
});


    