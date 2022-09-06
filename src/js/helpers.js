import * as $ from './selectors.js';

export const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addLeadingZeros = (intiger, numberOfZeros) =>
  (intiger + '').padStart(numberOfZeros, '0');

export const randomArrayElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const genDataOnElement = (fnName, el) => {
  el.innerHTML = fnName();
};

//TODO : Make  this one more reusable as importing selector and hardcoding it does not look good.
export const copyTextHandler = el => {
  const text = el.target.innerText;

  navigator.clipboard.writeText(text).then(
    () => {
      $.copySuccess.classList.add('show-message');
      setTimeout(() => {
        $.copySuccess.classList.remove('show-message');
      }, 1000);
    },
    () => {
      console.error('Error while writing to the clipboard');
    }
  );
};
