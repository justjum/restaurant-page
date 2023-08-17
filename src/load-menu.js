export default function loadMenu() {
    console.log("ooad menu");
    const dynamicDiv = document.getElementById("dynamic-div");
    while (dynamicDiv.hasChildNodes()) {
        dynamicDiv.removeChild(dynamicDiv.firstChild);
    }    
    
    const menuHeading = document.createElement('h2');
    menuHeading.innerHTML = "Dine";
    menuHeading.setAttribute("class", "menu-heading");
    const menuItems = document.createElement("ul");
    const menuPrices = document.createElement("ul");
    menuItems.setAttribute("class", "menu-items");
    menuPrices.setAttribute("class", "menu-prices");
    // Dummy menu.  Idea would be to set up a loop to read below array from a csv or similar, making updates simpler.
    const menuArray = [["fried eggs", "$1.99"],["double-fried eggs", "$2.99"],["snags & eggs","$4.99"],["the kit caboodle", "$7.99"]];
    console.table(menuArray);
    for (let x = 0; x < menuArray.length; x++) {
        const addItem = document.createElement("li");
        const addPrice = document.createElement("li");
        addItem.innerHTML = menuArray[x][0];
        addPrice.innerHTML = menuArray[x][1];
        menuItems.appendChild(addItem);
        menuPrices.appendChild(addPrice);
    }
    dynamicDiv.setAttribute("class", "menu")
    dynamicDiv.appendChild(menuHeading);
    dynamicDiv.appendChild(menuItems);
    dynamicDiv.appendChild(menuPrices);

    updateNav();
}


//function to update nav-selector classes

const updateNav = () => {
    const homeNav = document.getElementById("home");
    const menuNav = document.getElementById('menu');
    const aboutNav = document.getElementById('about');

    homeNav.setAttribute("class", "nav-selection inactive")
    menuNav.setAttribute("class", "nav-selection active");
    aboutNav.setAttribute("class", "nav-selection inactive");
}