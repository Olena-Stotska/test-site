(function() {
  function isPassiveListenerSupported() {
    var isSupported = false;

    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function() {
          isSupported = true;
        }
      });

      window.addEventListener('test', null, options);
    } catch(err) {}

    return isSupported;
  }

  function isTransitionSupported() {
    return typeof document.body.style.transition !== 'undefined';
  }

  var html = document.documentElement;

  if (isPassiveListenerSupported()) {
    html.classList.add('passive-listener');
  }

  if (isTransitionSupported()) {
    html.classList.add('transition');
  }
})();
