window.onload = function () {
  window.addEventListener('click', function (event) {
    // Send click event data to parent page
    parent.postMessage({
      type: 'click',
      coordinates: { x: event.clientX, y: event.clientY }
    }, '*');
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
        if (distX > 0) {
          parent.postMessage({ type: 'swipe', direction: 'right' }, '*');
        } else {
          parent.postMessage({ type: 'swipe', direction: 'left' }, '*');
        }
      }
    }
  }, false);
}