import Image from './image.png';

const content = document.getElementById("content");

function buildNav() {
        const navBar = document.createElement("div");
        const intro = document.createElement("div");
        const menu = document.createElement("div");
        const about = document.createElement("div");


        navBar.setAttribute("class", "nav-bar");
        navBar.setAttribute("id", "nav-bar");
        intro.setAttribute("class", "intro");

        navBar.appendChild(intro);

        content.appendChild(navBar);

}

function buildContainer() {

        
        const heading = document.createElement("h1");
        const image = document.createElement("img");
        const tagline = document.createElement("p");

        heading.innerHTML = "Jum's Jive & Dive";
        image.setAttribute("alt", "Silouhette of a couple dancing.");
        image.setAttribute("src", `${Image}`);
        tagline.innerHTML = ("Come on down to Jum's Jive & Dive - for all your jiving (and diving) needs!");
   
        content.appendChild(heading);
        content.appendChild(image);
        content.appendChild(tagline);


}

function buildFooter() {
        const copyright = document.createElement("p");
        copyright.innerHTML = "&copy Jum Ryan 2023"
        content.appendChild(copyright);
}

function buildPage() {
        buildNav();
        buildContainer();
        buildFooter();
        

}

export default buildPage();
