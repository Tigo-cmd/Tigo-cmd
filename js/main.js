/*=====================Toggle navbar ================= */ 

let icon = document.querySelector('#icon');
let navbar = document.querySelector('.navbar')


icon.onclick = () => {
    icon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}