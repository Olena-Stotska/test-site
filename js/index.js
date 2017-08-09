(function() {
  var htmlRoot = document.documentElement;
  var header = document.getElementById('main-header');
  var btnMenu = document.getElementById('btn-menu');
  var menu = document.getElementById('main-menu');

  header.addEventListener('click', function(event) {
    var target = event.target.closest('button[name]');

    if (!target) {
      return
    }

    switch (target.name) {
      case 'showSearch':
        header.classList.add('show-search');
        header.classList.add('min-header');
        btnMenu.classList.add('active');
        header.querySelector('.search-box').focus();
      break;

      case 'showMenuOrCancel':
        if(header.classList.contains('show-search')) {
          header.classList.remove('show-search');
          addScrollingClassToHeader();
        } else {
          menu.classList.toggle('visible');
        }

        btnMenu.classList.toggle('active');
      break;
    }
  });

  window.addEventListener('load', function loading() {
    var loader = document.querySelector('#boot-loader');
    var removeLoader = function() {
      loader.parentNode.removeChild(loader);
    }

    loader.classList.add('fade-out');

    if (htmlRoot.classList.contains('transition')) {
      loader.addEventListener('transitionend', removeLoader);
    } else {
      removeLoader();
    }
  });

  var isScrolled = false;
  function addScrollingClassToHeader() {
    if (header.classList.contains('show-search')) {
      return;
    }

    if (window.pageYOffset <= 50) {
      isScrolled = false;
      header.classList.remove('min-header');
    } else if (!isScrolled) {
      isScrolled = true;
      header.classList.add('min-header');
    }
  }

  var scrollListenerOptions = htmlRoot.classList.contains('passive-listener') ? { passive: true } : false;
  window.addEventListener('scroll', addScrollingClassToHeader, scrollListenerOptions);
  window.addEventListener('touchmove', addScrollingClassToHeader, scrollListenerOptions);
})();
