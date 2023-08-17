import Map from "./map.png"

export default function loadAbout() {
    console.log("load aout')");
    const dynamicDiv = document.getElementById("dynamic-div");
    while (dynamicDiv.hasChildNodes()) {
        dynamicDiv.removeChild(dynamicDiv.firstChild);
    }    

    dynamicDiv.setAttribute("class", "about");
    const tagline = document.createElement('h3');
    const map = document.createElement('img');
    tagline.innerHTML = "Come find us, smack bang in the middle of Australia."
    map.setAttribute('src', Map)
    dynamicDiv.appendChild(tagline);
    dynamicDiv.appendChild(map);
    updateNav();
}

//function to update nav-selector classes

const updateNav = () => {
    const homeNav = document.getElementById("home");
    const menuNav = document.getElementById('menu');
    const aboutNav = document.getElementById('about');

    homeNav.setAttribute("class", "nav-selection inactive")
    menuNav.setAttribute("class", "nav-selection inactive");
    aboutNav.setAttribute("class", "nav-selection active");
}



