/* on click class 'opened' is added to element with class 'menu-item__sub' which is nested in the element clicked 
element.classList.toggle("opened");
if class = opened content is shown otherwise no 
 */

let menuItem = document.getElementById('first-item');
let subMenu = menuItem.querySelector('.menu-item__sub');

menuItem.onclick = function() {
    subMenu.classList.toggle('opened');
};


