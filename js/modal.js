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

  // const timerForModal = setTimeout(() => {
  //   openModal();
  // }, 7000);

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

  // GET/PUT 

  const form = document.querySelector('.modal__form');

  const messages = {
    load: "Loading",
    success: "We have received your message. We'll reply as soon as we can.",
    fail: "Error",
    title: "Thank you",
    titleFail: "Unknown error"
  };

  bindPost(form);

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        'Content-type': 'application/json'
      }
    });

    return await res.json();
  };

  function bindPost(form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.textContent = messages.load;
      form.append(statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(messages.success, messages.title);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(messages.fail, messages.titleFail);
        }).finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message, title) {
    const firstModal = document.querySelector('.modal__dialog');
    firstModal.style.display = 'none';

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <h2 class="modal__title">
      ${title}
    </h2>
    <p class="modal__p">
      ${message}
    </p>
    `;

    const parentBlock = document.querySelector('.modal__block');
    parentBlock.append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      firstModal.style.display = 'block';
    }, 3000);
  }