import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
console.log('izitoast');

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const { state, delay } = form.elements;
  const selectedState = Array.from(state).find(radio => radio.checked);
  console.log(selectedState);
  getPromise(delay.value, selectedState.value)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}

function getPromise(delay, selectedState) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
