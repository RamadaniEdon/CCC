window.onload = function () {
  const children = document.getElementById("sherbimet").querySelectorAll("*");
  const iframe = document.getElementById('television');

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
  const handler = function () {
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
      // if (window.innerWidth < 768) return;
      handler2();
    }
  });

  var startX;
  var startY;
  var distX;
  var distY;
  var threshold = 50; // Minimum distance required for a swipe
  var restraint = 100; // Maximum distance allowed at the same time in perpendicular direction
  var allowedTime = 300; // Maximum time allowed to travel that distance

  document.body.addEventListener('touchstart', function (e) {
    var touch = e.changedTouches[0];
    startX = touch.pageX;
    startY = touch.pageY;
  }, false);

  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault(); // Prevent scrolling while swiping
  }, false);

  document.body.addEventListener('touchend', function (e) {
    var touch = e.changedTouches[0];
    distX = touch.pageX - startX;
    distY = touch.pageY - startY;
    var startTime = e.timeStamp;
    var endTime = performance.now();
    var elapsedTime = endTime - startTime;

    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        if (distX > 0 && !visibleSideBar) {
          handler()
        } else if (visibleSideBar) {
          // Swipe left
          handler(); // Call your handler function
        }
      }
    }
  }, false);


  window.addEventListener('message', function (event) {
    // Check if the message is from the iframe and contains click event data
    // if (event.source === iframe.contentWindow && event.data.type === 'loaded') {
    //   iframe.style.visibility = 'visible';
    // }
    if (event.source === iframe.contentWindow && event.data.type === 'click') {
      // Handle the click event in the parent page
      if (visibleSideBar) {
        // if (window.innerWidth < 768) return;
        handler2();
      }
    }
    else if (event.source === iframe.contentWindow && event.data.type === 'swipe') {
      // Check if the swipe direction is to the right
      if (event.data.direction === 'right' && !visibleSideBar) {
        // Call the handler function for right swipe
        handler();
      } else if(event.data.direction === 'left' && visibleSideBar) {
        handler();
      }
    }
  });


  const links = document.querySelectorAll('.side-list-group-item');

  // Add click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', function() {
      // Remove 'clicked' class from all links
      links.forEach(link => {
        link.classList.remove('clicked');
      });
      
      // Add 'clicked' class to the clicked link
      this.classList.add('clicked');
    });
  });
}



