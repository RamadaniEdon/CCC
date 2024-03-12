window.onload = function () {
  const children = document.getElementById("sherbimet").querySelectorAll("*");
  const iframe = document.getElementById("television");
  const startingInfo = document.getElementById("startingInfo");
  
  const handler = function() {
    startingInfo.classList.add("displayNone");
    startingInfo.classList.remove("displayBlock");
    iframe.classList.remove("displayNone");
    iframe.classList.add("displayBlock");

    for(let j = 0; j < children.length; j++){
      children[j].removeEventListener("click", handler);
    }
  }

  for (let i = 0; i < children.length; i++) {
    children[i].addEventListener("click", handler);
  }


  var visibleSideBar = false;
  const sideBar = document.getElementById("sherbimeContainer");
  const sideBarButton = document.getElementById("showSideBarBtn");
  const handler2 = function(){
    if(!visibleSideBar){
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
  for(let i = 0; i < children.length; i++){
    children[i].addEventListener("click", handler2);
  }

  document.addEventListener('click', function(event) {
    if (visibleSideBar && !sideBarButton.contains(event.target) && !sideBar.contains(event.target)) {
      handler2();
    }
  });
}



