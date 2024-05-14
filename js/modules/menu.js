export default class Menu {
    constructor() {
        var menu = document.getElementById("myMenu");
        var btn = document.querySelector(".hamburger-menu");
        var span = document.getElementsByClassName("close")[0];

        function openMenu() {
            menu.style.display = "block";
            menu.classList.add('menu-slide-in-right'); 
            document.body.classList.add('no-scroll');
        }
        
        function closeMenu() {
            menu.classList.add('menu-slide-out-right'); 
            setTimeout(function() {
                menu.style.display = "none";
                menu.classList.remove('menu-slide-out-right'); 
            }, 500);
            document.body.classList.remove('no-scroll');
        }

        btn.onclick = openMenu; 
        span.onclick = closeMenu;

        window.onclick = function(event) {
            if (event.target == menu) {
                closeMenu();
            }
        }
    }
}
