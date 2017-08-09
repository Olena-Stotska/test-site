(function() {
  var isTransitionSupported = document.documentElement.classList.contains('transition');

  document.addEventListener('click', function(event) {
    var toggler = event.target.closest('[data-toggle=modal]');
    var targetSelector = toggler ? toggler.getAttribute('data-target') : '';
    var target = targetSelector ? document.querySelector(targetSelector) : null;

    if (!toggler || !targetSelector || !target) {
      return;
    }

    showModal(target);
  }, false);

  document.addEventListener('click', function(event) {
    var toggler = event.target.closest('[data-toggle=dismiss]');
    var target = toggler ? toggler.closest('.modal') : null;

    if (!toggler || !target) {
      return;
    }

    hideModal(target);
  }, false);

  function showModal(modal) {
    modal.style.display = 'block';

    setTimeout(function() {
      modal.classList.add('in');
    }, 0);
  }

  function hideModal(modal) {
    modal.classList.remove('in');

    if (isTransitionSupported) {
      modal.addEventListener('transitionend', function detach() {
        modal.removeEventListener('transitionend', detach);
        modal.style.display = '';
      });
    } else {
      modal.style.display = '';
    }
  }
})();
