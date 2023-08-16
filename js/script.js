const products_btn= document.querySelector('#pro');
const products_menu= document.querySelector('#product-box');
const nav_section= document.querySelector('#nav-section');
const nav_bar= document.querySelector('#nav-bar');
const drop_down= document.querySelector('#drop-down');

products_menu.remove();
var menuOpen= 1;

products_btn.addEventListener('click',openMenu);

function openMenu(){
    if((menuOpen%2==1)){
        drop_down.appendChild(products_menu);
    }
    else{
        close();
    }
    menuOpen++;
}

function close(){
    products_menu.remove();
}

function closeMenu(event) {
   if(menuOpen%2==0 && !nav_section.contains(event.target)){
        openMenu();
   }
}

document.addEventListener('click', closeMenu, false);
