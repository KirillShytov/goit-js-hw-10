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
}
