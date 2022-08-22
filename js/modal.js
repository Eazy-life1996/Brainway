  // Modal

  const modal = document.querySelector('.modal'),
    buttons = document.querySelectorAll('[data-modal]'),
    buttonModalClose = document.querySelector('[data-modal-close]');

  const openModal = function () {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = function () {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  };

  const timerForModal = setTimeout(() => {
    openModal();
  }, 7000);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal();
      clearInterval(timerForModal);
    });
  });

  buttonModalClose.addEventListener('click', () => {
    closeModal();
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  });