import './style.css';

function createElement_NavBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    navBar.textContent="Restaurant Page";

    return navBar;
    
}



function page_load() {
    const content = document.querySelector('#content');

    content.appendChild(createElement_NavBar());
    
}

export { page_load };