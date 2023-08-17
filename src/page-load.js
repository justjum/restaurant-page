import loadHome from './load-home.js';
import loadMenu from './load-menu.js';
import loadAbout from './load-about.js';

const content = document.getElementById("content");

// function to build the nav bar
function buildNav() {

        const header = document.createElement("div");
        const heading = document.createElement("h1");
        const navBar = document.createElement("div");
        const homeNav = document.createElement("div");
        const menuNav = document.createElement("div");
        const aboutNav = document.createElement("div");

        header.setAttribute("class", "header");
        heading.innerHTML = "Jum's Jive & Dine";
        navBar.setAttribute("class", "nav-bar");
        navBar.setAttribute("id", "nav-bar");
        homeNav.setAttribute("id", "home");
        homeNav.setAttribute("class", "nav-selection active")
        menuNav.setAttribute("id", "menu");
        menuNav.setAttribute("class", "nav-selection inactive");
        aboutNav.setAttribute("id", "about");
        aboutNav.setAttribute("class", "nav-selection inactive");
        homeNav.innerHTML = "HOME";
        menuNav.innerHTML = "MENU";
        aboutNav.innerHTML = "ABOUT";

        content.appendChild(header);
        header.appendChild(heading);
        navBar.appendChild(homeNav);
        navBar.appendChild(menuNav);
        navBar.appendChild(aboutNav);

        header.appendChild(navBar);

        const navButtons = document.querySelectorAll(".nav-selection");
        console.table(navButtons);
        navButtons.forEach((navButton) => {
                navButton.addEventListener("click", function(navButton) {
                        console.log(navButton.target.id);
                        switch(navButton.target.id) {
                                case 'home': return loadHome();
                                case 'menu': return loadMenu();
                                case 'about': return loadAbout();
                                default: loadHome();
                        }
                });
        }); 

};

//function to build the main container
function buildContainer() {

        
        
        // div to be modified via onclick of nav items
        const dynamicDiv = document.createElement("div");
        dynamicDiv.setAttribute("class", "home");
        dynamicDiv.setAttribute("id", "dynamic-div");
        content.appendChild(dynamicDiv);
   
        loadHome();



}

function buildFooter() {
        const footer = document.createElement("div");
        const copyright = document.createElement("p");
        footer.setAttribute("class", "footer");
        copyright.innerHTML = "&copy Jum Ryan 2023"
        copyright.setAttribute("class", "copyright");
        content.appendChild(footer);
        footer.appendChild(copyright);
}

function buildPage() {
        buildNav();
        buildContainer();
        buildFooter();
        
}



export default buildPage;

