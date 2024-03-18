window.onload = function () {
  const children = document.getElementById("sherbimet").querySelectorAll("*");

  document.getElementById('television').style.visibility = 'visible';

  var visibleSideBar = false;
  const sideBar = document.getElementById("sherbimeContainer");
  const sideBarButton = document.getElementById("showSideBarBtn");
  const handler2 = function () {
    if (window.innerWidth > 768) return;

    if (!visibleSideBar) {
      sideBar.classList.add("moveRight");
      sideBar.classList.remove("moveLeft");
      sideBarButton.classList.add("rotate180");
      visibleSideBar = true;
    }
    else {
      sideBar.classList.remove("moveRight");
      sideBar.classList.add("moveLeft");
      sideBarButton.classList.remove("rotate180");
      visibleSideBar = false;
    }
  }
  sideBarButton.addEventListener("click", handler2);
  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("click", handler2);
  }

  document.addEventListener('click', function (event) {
    if (visibleSideBar && !sideBarButton.contains(event.target) && !sideBar.contains(event.target)) {
      handler2();
    }
  });
}



