document.addEventListener('DOMContentLoaded', function() {

    let inp = this.documentElement.querySelector('.adv__inp');
    let timerId = null;
    let btn = document.querySelector('.btn_black');
    const deadline = new Date('2025-02-25T14:30:00');
    const elDays = document.querySelector('.timer__days');
    const elHours = document.querySelector('.timer__hours');
    const elMinutes = document.querySelector('.timer__minutes');
    const elSeconds = document.querySelector('.timer__seconds');

    elDays.dataset.title = 'days';
    elHours.dataset.title = 'hours';
    elMinutes.dataset.title = 'minutes';
    elSeconds.dataset.title = 'seconds';

    const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    if (diff === 0) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  function onClick() {
    if (timerId !== null){
        clearInterval(timerId);
        timerId = null;
    }
    else {
        updateTimer();
        timerId = setInterval(updateTimer, 1000*inp.value);
    }
  }
  btn.addEventListener('click', onClick);
});