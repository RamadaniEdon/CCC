window.addEventListener('load', function() {
    const mainLogo = document.getElementById('main-logo');
    mainLogo.addEventListener('animationend', function() {
      // Hide the main logo
      mainLogo.style.display = 'none';
  
      // Start animations for each 'C' part
      const cParts = document.querySelectorAll('.c-part');
      for (let i = 0; i < cParts.length; i++) {
        cParts[i].style.display = 'block';
        cParts[i].style.animation = `fly-off-${i+1} 1.5s forwards`;
      }
  
      // After the 'C' parts have flown off the screen, display main content
      setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block';
        mainContent.style.animation = 'fadeInContent 1s forwards';
        // Set the body background back to the original color or make it transparent
        document.body.style.backgroundColor = '#f1e8e3';
      }, 500); // This timeout should match the longest 'fly-off' animation duration
    });
  });
  