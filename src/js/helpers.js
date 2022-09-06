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

export const copyTextHandler = (element, selectedEl) => {
  const text = element.innerText;

  navigator.clipboard.writeText(text).then(
    () => {
      selectedEl.classList.add('show-message');
      setTimeout(() => {
        selectedEl.classList.remove('show-message');
      }, 900);
    },
    () => {
      console.error('Error while writing to the clipboard');
    }
  );
};
