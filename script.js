window.addEventListener('load', function () {

  if (!sessionStorage.getItem('animationPlayed') && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname.endsWith('home.html'))) {

    const mainLogo = document.getElementById('main-logo');

    mainLogo.addEventListener('animationend', function () {

      mainLogo.style.display = 'none';
      const cParts = document.querySelectorAll('.c-part');

      for (let i = 0; i < cParts.length; i++) {
        cParts[i].style.display = 'block';
        cParts[i].style.animation = `fly-off-${i + 1} 1.5s forwards`;
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

    mainLogo.addEventListener('animationend', function () {

      mainLogo.style.display = 'none';
      const cParts = document.querySelectorAll('.c-part');

      for (let i = 0; i < cParts.length; i++) {
        cParts[i].style.display = 'block';
        cParts[i].style.animation = `fly-off-${i + 1} 1s forwards`;
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

  var currentPhoto = 1;

  const indexStart = document.getElementById('index-image-div');
  const indexStartMobile = document.getElementById('index-photo-mobile');

  const changeIndexPhoto = () => {
    currentPhoto = currentPhoto === 3 ? 1 : currentPhoto + 1;
    if (window.innerWidth > 660) {
      indexStart.style.opacity = 0;
      this.setTimeout(() => {
        indexStart.style.backgroundImage = `url('./img/indexPhoto${currentPhoto}.png')`;
        indexStart.style.opacity = 1;
      }, 600)
    }
    else {
      indexStartMobile.style.opacity = '0'; // Set opacity to 0 for fade out effect
      setTimeout(function () {
        indexStartMobile.src = `./img/indexPhoto${currentPhoto}.png`;
        indexStartMobile.style.opacity = '1'; // Set opacity back to 1 for fade in effect
      }, 600);
    }
  }

  setInterval(changeIndexPhoto, 5000);

});