window.addEventListener('load', function() {

  if (!sessionStorage.getItem('animationPlayed')) {

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
        mainContent.style.display = 'block';
        mainContent.style.animation = 'fadeInContent 1s forwards';
        document.body.style.backgroundColor = '#f1e8e3';
      }, 500);
    });

    sessionStorage.setItem('animationPlayed', 'true');

  } 
  else {

    document.getElementById('main-logo').style.display = 'none';
    const cParts = document.querySelectorAll('.c-part');
    cParts.forEach(part => part.style.display = 'none');

    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    mainContent.style.opacity = 1;
    document.body.style.backgroundColor = '#f1e8e3';

  }

});