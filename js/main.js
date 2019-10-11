document.addEventListener('DOMContentLoaded' , init, false);

function init() {

    let menu = document.getElementById('nav_mobile');
    let item = document.getElementsByClassName("nav_item");

    menu.addEventListener('click', openMenu, false)

    function openMenu(e) {
      e.preventDefault();
      for(var i = 0, length = item.length; i < length; i++) {
        if (item[i].style.display === 'none') {
          item[i].style.display = 'block';
        } else {
          (item[i].style.display = "none");
        }
      }
    }

}
