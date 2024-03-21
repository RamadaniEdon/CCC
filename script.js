window.addEventListener('load', function() {

  if (!sessionStorage.getItem('animationPlayed') && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('home.html'))) {

    const mainLogo = document.getElementById('main-logo');

    mainLogo.addEventListener('animationend', function() {

      mainLogo.style.display = 'none';
      const cParts = document.querySelectorAll('.c-part');

      for (let i = 0; i < cParts.length; i++) {
        cParts[i].style.display = 'block';
        cParts[i].style.animation = `fly-off-${i+1} 1.5s forwards`;
      }

      setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'flex';
        mainContent.style.flexDirection = 'column';
        mainContent.style.animation = 'fadeInContent 1s forwards';
        document.body.style.backgroundColor = '#f1e8e3';
      }, 500);
    });

    sessionStorage.setItem('animationPlayed', 'true');

  } 
  else {

    const mainLogo = document.getElementById('main-logo');

    mainLogo.style.animation = 'spin 1s linear forwards';

    mainLogo.addEventListener('animationend', function() {

      mainLogo.style.display = 'none';
      const cParts = document.querySelectorAll('.c-part');

      for (let i = 0; i < cParts.length; i++) {
        cParts[i].style.display = 'block';
        cParts[i].style.animation = `fly-off-${i+1} 1s forwards`;
      }

      setTimeout(() => {
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'flex';
        mainContent.style.flexDirection = 'column';
        mainContent.style.animation = 'fadeInContent 1s forwards';
        document.body.style.backgroundColor = '#043d70';
      }, 500);
    });
  }

});