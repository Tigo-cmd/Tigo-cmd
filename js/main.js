/*=====================Toggle navbar ================= */

let icon = document.querySelector('#icon');
let navbar = document.querySelector('.navbar');

icon.onclick = () => {
    icon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*----------------------scroll section active link---------------*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*=============== sticky navbar ===================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*====================== remove toggle icon and navbar ==================*/

    icon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*==============scroll reveal ===============*/
ScrollReveal().reveal('.home_content, .heading', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home_image, .service_container, .portfolio_box, .contact_section form', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home_content h1, .sect_image', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home_content p, .about_content', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 200
});

/*=====================typed texts================*/
const elements = document.querySelectorAll('.multiple_texts');
elements.forEach(element => {
    new Typed(element, {
        strings: ['Software Engineer', 'Full-Stack Engineer', 'AI Prompt Engineer', 'App Developer', 'Cyber Security Expert'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
});




/* ===================theme switching=============*/ 
 document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';


    //apply the current theme from local storage
    document.documentElement.setAttribute('theme', currentTheme);


    //update button based on current theme'
    toggleButton.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';


    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('theme');
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('theme', theme);


        localStorage.setItem('theme', theme);


        toggleButton.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';

    });
 });