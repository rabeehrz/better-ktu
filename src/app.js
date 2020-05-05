const targetContainer = document.getElementsByClassName("navbar-brand")[0];
console.log(targetContainer);
let realToggler = document.createElement("span");

realToggler.setAttribute("class", "glyphicon glyphicon-list");
realToggler.setAttribute("id", "real-sidebar-toggler");
realToggler.setAttribute("aria-hidden", "true");

targetContainer.prepend(realToggler);

realToggler.addEventListener("click", function(e) {
    const sidebar = document.getElementById("sidebar-wrapper");
    sidebar.classList.toggle("toggle-control");
});
