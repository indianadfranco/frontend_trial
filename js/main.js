document.addEventListener('DOMContentLoaded' , init, false);

function init() {

    let menu = document.getElementById('nav_mobile');
    let x = document.getElementsByClassName("nav_item");

    menu.addEventListener('click', openMenu, false)

    function openMenu(e) {
      e.preventDefault();
      for(var i = 0, length = x.length; i < length; i++) {
        if (x[i].style.display === 'none') {
          x[i].style.display = 'block';
        } else {
          (x[i].style.display = "none");
        }
      }
    }
}
