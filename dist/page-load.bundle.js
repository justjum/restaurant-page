/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/load-about.js":
/*!***************************!*\
  !*** ./src/load-about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.png */ "./src/map.png");


function loadAbout() {
    console.log("load aout')");
    const dynamicDiv = document.getElementById("dynamic-div");
    while (dynamicDiv.hasChildNodes()) {
        dynamicDiv.removeChild(dynamicDiv.firstChild);
    }    

    dynamicDiv.setAttribute("class", "about");
    const tagline = document.createElement('h3');
    const map = document.createElement('img');
    tagline.innerHTML = "Come find us, smack bang in the middle of Australia."
    map.setAttribute('src', _map_png__WEBPACK_IMPORTED_MODULE_0__)
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





/***/ }),

/***/ "./src/load-home.js":
/*!**************************!*\
  !*** ./src/load-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.png */ "./src/image.png");


function loadHome() {
    console.log("load home0)");
    const dynamicDiv = document.getElementById("dynamic-div");
    while (dynamicDiv.hasChildNodes()) {
        dynamicDiv.removeChild(dynamicDiv.firstChild);
    }    

    const image = document.createElement("img");
    const tagline = document.createElement("p");

    
    dynamicDiv.setAttribute("class", "home");
    dynamicDiv.setAttribute("id", "dynamic-div");
    image.setAttribute("src", `${_image_png__WEBPACK_IMPORTED_MODULE_0__}`);
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


/***/ }),

/***/ "./src/load-menu.js":
/*!**************************!*\
  !*** ./src/load-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
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

/***/ }),

/***/ "./src/image.png":
/*!***********************!*\
  !*** ./src/image.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "835c8d763696d6d1666c.png";

/***/ }),

/***/ "./src/map.png":
/*!*********************!*\
  !*** ./src/map.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ca97d939f18ba56ee1e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _load_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-home.js */ "./src/load-home.js");
/* harmony import */ var _load_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-menu.js */ "./src/load-menu.js");
/* harmony import */ var _load_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-about.js */ "./src/load-about.js");




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
                                case 'home': return (0,_load_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
                                case 'menu': return (0,_load_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
                                case 'about': return (0,_load_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
                                default: (0,_load_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
   
        (0,_load_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();



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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildPage);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1sb2FkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7O0FBRVo7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFDQUFHO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVDQUFLLENBQUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCc0M7QUFDQTtBQUNFOztBQUV4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx5REFBUTtBQUM1RCxvREFBb0QseURBQVE7QUFDNUQscURBQXFELDBEQUFTO0FBQzlELHlDQUF5Qyx5REFBUTtBQUNqRDtBQUNBLGlCQUFpQjtBQUNqQixTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVE7Ozs7QUFJaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWFib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLWhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWQtbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFwIGZyb20gXCIuL21hcC5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJsb2FkIGFvdXQnKVwiKTtcbiAgICBjb25zdCBkeW5hbWljRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLWRpdlwiKTtcbiAgICB3aGlsZSAoZHluYW1pY0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZHluYW1pY0Rpdi5yZW1vdmVDaGlsZChkeW5hbWljRGl2LmZpcnN0Q2hpbGQpO1xuICAgIH0gICAgXG5cbiAgICBkeW5hbWljRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWJvdXRcIik7XG4gICAgY29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdGFnbGluZS5pbm5lckhUTUwgPSBcIkNvbWUgZmluZCB1cywgc21hY2sgYmFuZyBpbiB0aGUgbWlkZGxlIG9mIEF1c3RyYWxpYS5cIlxuICAgIG1hcC5zZXRBdHRyaWJ1dGUoJ3NyYycsIE1hcClcbiAgICBkeW5hbWljRGl2LmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuICAgIGR5bmFtaWNEaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgICB1cGRhdGVOYXYoKTtcbn1cblxuLy9mdW5jdGlvbiB0byB1cGRhdGUgbmF2LXNlbGVjdG9yIGNsYXNzZXNcblxuY29uc3QgdXBkYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG4gICAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcblxuICAgIGhvbWVOYXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtc2VsZWN0aW9uIGluYWN0aXZlXCIpXG4gICAgbWVudU5hdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1zZWxlY3Rpb24gaW5hY3RpdmVcIik7XG4gICAgYWJvdXROYXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtc2VsZWN0aW9uIGFjdGl2ZVwiKTtcbn1cblxuXG5cbiIsImltcG9ydCBJbWFnZSBmcm9tICcuL2ltYWdlLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnNvbGUubG9nKFwibG9hZCBob21lMClcIik7XG4gICAgY29uc3QgZHluYW1pY0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHluYW1pYy1kaXZcIik7XG4gICAgd2hpbGUgKGR5bmFtaWNEaXYuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGR5bmFtaWNEaXYucmVtb3ZlQ2hpbGQoZHluYW1pY0Rpdi5maXJzdENoaWxkKTtcbiAgICB9ICAgIFxuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIFxuICAgIGR5bmFtaWNEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lXCIpO1xuICAgIGR5bmFtaWNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkeW5hbWljLWRpdlwiKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYCR7SW1hZ2V9YCk7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2lsb3VoZXR0ZSBvZiBhIGNvdXBsZSBkYW5jaW5nLlwiKTtcbiAgICB0YWdsaW5lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFnbGluZVwiKTtcbiAgICB0YWdsaW5lLmlubmVySFRNTCA9IChcIkNvbWUgb24gZG93biB0byBKdW0ncyBKaXZlICYgRGluZSAtIGZvciBhbGwgeW91ciBqaXZpbmcgYW5kIGRpbmluZyBuZWVkcyFcIik7XG5cbiAgICBkeW5hbWljRGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBkeW5hbWljRGl2LmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xuXG4gICAgdXBkYXRlTmF2KCk7XG59XG5cbi8vZnVuY3Rpb24gdG8gdXBkYXRlIG5hdi1zZWxlY3RvciBjbGFzc2VzXG5cbmNvbnN0IHVwZGF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICAgIGNvbnN0IGFib3V0TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XG5cbiAgICBob21lTmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LXNlbGVjdGlvbiBhY3RpdmVcIilcbiAgICBtZW51TmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LXNlbGVjdGlvbiBpbmFjdGl2ZVwiKTtcbiAgICBhYm91dE5hdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1zZWxlY3Rpb24gaW5hY3RpdmVcIik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9vYWQgbWVudVwiKTtcbiAgICBjb25zdCBkeW5hbWljRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkeW5hbWljLWRpdlwiKTtcbiAgICB3aGlsZSAoZHluYW1pY0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZHluYW1pY0Rpdi5yZW1vdmVDaGlsZChkeW5hbWljRGl2LmZpcnN0Q2hpbGQpO1xuICAgIH0gICAgXG4gICAgXG4gICAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVIZWFkaW5nLmlubmVySFRNTCA9IFwiRGluZVwiO1xuICAgIG1lbnVIZWFkaW5nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1oZWFkaW5nXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBtZW51UHJpY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG1lbnVJdGVtcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtaXRlbXNcIik7XG4gICAgbWVudVByaWNlcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtcHJpY2VzXCIpO1xuICAgIC8vIER1bW15IG1lbnUuICBJZGVhIHdvdWxkIGJlIHRvIHNldCB1cCBhIGxvb3AgdG8gcmVhZCBiZWxvdyBhcnJheSBmcm9tIGEgY3N2IG9yIHNpbWlsYXIsIG1ha2luZyB1cGRhdGVzIHNpbXBsZXIuXG4gICAgY29uc3QgbWVudUFycmF5ID0gW1tcImZyaWVkIGVnZ3NcIiwgXCIkMS45OVwiXSxbXCJkb3VibGUtZnJpZWQgZWdnc1wiLCBcIiQyLjk5XCJdLFtcInNuYWdzICYgZWdnc1wiLFwiJDQuOTlcIl0sW1widGhlIGtpdCBjYWJvb2RsZVwiLCBcIiQ3Ljk5XCJdXTtcbiAgICBjb25zb2xlLnRhYmxlKG1lbnVBcnJheSk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBtZW51QXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgYWRkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGFkZEl0ZW0uaW5uZXJIVE1MID0gbWVudUFycmF5W3hdWzBdO1xuICAgICAgICBhZGRQcmljZS5pbm5lckhUTUwgPSBtZW51QXJyYXlbeF1bMV07XG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChhZGRJdGVtKTtcbiAgICAgICAgbWVudVByaWNlcy5hcHBlbmRDaGlsZChhZGRQcmljZSk7XG4gICAgfVxuICAgIGR5bmFtaWNEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51XCIpXG4gICAgZHluYW1pY0Rpdi5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG4gICAgZHluYW1pY0Rpdi5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuICAgIGR5bmFtaWNEaXYuYXBwZW5kQ2hpbGQobWVudVByaWNlcyk7XG5cbiAgICB1cGRhdGVOYXYoKTtcbn1cblxuXG4vL2Z1bmN0aW9uIHRvIHVwZGF0ZSBuYXYtc2VsZWN0b3IgY2xhc3Nlc1xuXG5jb25zdCB1cGRhdGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgICBjb25zdCBhYm91dE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuXG4gICAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1zZWxlY3Rpb24gaW5hY3RpdmVcIilcbiAgICBtZW51TmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LXNlbGVjdGlvbiBhY3RpdmVcIik7XG4gICAgYWJvdXROYXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtc2VsZWN0aW9uIGluYWN0aXZlXCIpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9sb2FkLWhvbWUuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbG9hZC1tZW51LmpzJztcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSAnLi9sb2FkLWFib3V0LmpzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gZnVuY3Rpb24gdG8gYnVpbGQgdGhlIG5hdiBiYXJcbmZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkp1bSdzIEppdmUgJiBEaW5lXCI7XG4gICAgICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1iYXJcIik7XG4gICAgICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdi1iYXJcIik7XG4gICAgICAgIGhvbWVOYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICAgICAgICBob21lTmF2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LXNlbGVjdGlvbiBhY3RpdmVcIilcbiAgICAgICAgbWVudU5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gICAgICAgIG1lbnVOYXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXYtc2VsZWN0aW9uIGluYWN0aXZlXCIpO1xuICAgICAgICBhYm91dE5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuICAgICAgICBhYm91dE5hdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdi1zZWxlY3Rpb24gaW5hY3RpdmVcIik7XG4gICAgICAgIGhvbWVOYXYuaW5uZXJIVE1MID0gXCJIT01FXCI7XG4gICAgICAgIG1lbnVOYXYuaW5uZXJIVE1MID0gXCJNRU5VXCI7XG4gICAgICAgIGFib3V0TmF2LmlubmVySFRNTCA9IFwiQUJPVVRcIjtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVOYXYpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudU5hdik7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dE5hdik7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICAgICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LXNlbGVjdGlvblwiKTtcbiAgICAgICAgY29uc29sZS50YWJsZShuYXZCdXR0b25zKTtcbiAgICAgICAgbmF2QnV0dG9ucy5mb3JFYWNoKChuYXZCdXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBuYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKG5hdkJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmF2QnV0dG9uLnRhcmdldC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2gobmF2QnV0dG9uLnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdob21lJzogcmV0dXJuIGxvYWRIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21lbnUnOiByZXR1cm4gbG9hZE1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWJvdXQnOiByZXR1cm4gbG9hZEFib3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGxvYWRIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyBcblxufTtcblxuLy9mdW5jdGlvbiB0byBidWlsZCB0aGUgbWFpbiBjb250YWluZXJcbmZ1bmN0aW9uIGJ1aWxkQ29udGFpbmVyKCkge1xuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gZGl2IHRvIGJlIG1vZGlmaWVkIHZpYSBvbmNsaWNrIG9mIG5hdiBpdGVtc1xuICAgICAgICBjb25zdCBkeW5hbWljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZHluYW1pY0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWVcIik7XG4gICAgICAgIGR5bmFtaWNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkeW5hbWljLWRpdlwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkeW5hbWljRGl2KTtcbiAgIFxuICAgICAgICBsb2FkSG9tZSgpO1xuXG5cblxufVxuXG5mdW5jdGlvbiBidWlsZEZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvb3RlclwiKTtcbiAgICAgICAgY29weXJpZ2h0LmlubmVySFRNTCA9IFwiJmNvcHkgSnVtIFJ5YW4gMjAyM1wiXG4gICAgICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvcHlyaWdodFwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbn1cblxuZnVuY3Rpb24gYnVpbGRQYWdlKCkge1xuICAgICAgICBidWlsZE5hdigpO1xuICAgICAgICBidWlsZENvbnRhaW5lcigpO1xuICAgICAgICBidWlsZEZvb3RlcigpO1xuICAgICAgICBcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkUGFnZTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9