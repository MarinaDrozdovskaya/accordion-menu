let allMenuItems = document.querySelectorAll('.menu-item');

allMenuItems.forEach(function(item, allMenuItems){
    let subMenu = item.querySelector('.menu-item__sub');
    item.onclick = function() {
        subMenu.classList.toggle('opened');
    };
});