export const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addLeadingZeros = (intiger, numberOfZeros) =>
  (intiger + '').padStart(numberOfZeros, '0');

export const randomArrayElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};

export const genDataOnElement = (fnName, el) => {
  el.innerHTML = typeof fnName === 'string' ? fnName : fnName();
};

export const getRandomKey = object => {
  const keys = Object.keys(object);
  return keys[Math.floor(Math.random() * keys.length)];
};

export const copyTextHandler = (selectedEl, displayedElement) => {
  const text = selectedEl.innerText;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => {
        displayedElement.classList.add('show-message');
        setTimeout(() => {
          displayedElement.classList.remove('show-message');
        }, 900);
      },
      () => {
        console.error('Error while writing to the clipboard');
      }
    );
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    displayedElement.classList.add('show-message');
    setTimeout(() => {
      displayedElement.classList.remove('show-message');
    }, 900);
  }
};
