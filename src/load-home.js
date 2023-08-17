import Image from './image.png';

export default function loadHome() {
    console.log("load home0)");
    const dynamicDiv = document.getElementById("dynamic-div");
    while (dynamicDiv.hasChildNodes()) {
        dynamicDiv.removeChild(dynamicDiv.firstChild);
    }    

    const image = document.createElement("img");
    const tagline = document.createElement("p");

    
    dynamicDiv.setAttribute("class", "home");
    dynamicDiv.setAttribute("id", "dynamic-div");
    image.setAttribute("src", `${Image}`);
    image.setAttribute("alt", "Silouhette of a couple dancing.");
    tagline.setAttribute("class", "tagline");
    tagline.innerHTML = ("Come on down to Jum's Jive & Dine - for all your jiving and dining needs!");

    dynamicDiv.appendChild(image);
    dynamicDiv.appendChild(tagline);

    updateNav();
}

//function to update nav-selector classes

const updateNav = () => {
    const homeNav = document.getElementById("home");
    const menuNav = document.getElementById('menu');
    const aboutNav = document.getElementById('about');

    homeNav.setAttribute("class", "nav-selection active")
    menuNav.setAttribute("class", "nav-selection inactive");
    aboutNav.setAttribute("class", "nav-selection inactive");
}
