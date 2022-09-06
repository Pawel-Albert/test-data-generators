import * as bootstrap from 'bootstrap';
import {generateRegon} from './model/regon';
import {generateNip} from './model/nip';
import * as $ from './selectors.js';
import {copyTextHandler, genDataOnElement} from './helpers';

const regon = () => genDataOnElement(generateRegon, $.regonValue);
const nip = () => genDataOnElement(generateNip, $.nipValue);

// Start initialization
const init = function () {
  regon();
  nip();

  $.genRegonBtn.addEventListener('click', regon);
  $.genNipBtn.addEventListener('click', nip);
  [
    $.regonValue,
    $.peselValue,
    $.nipValue,
    $.regonValue,
    $.idNumberValue,
    $.ibanValue
  ].forEach(element => element.addEventListener('click', copyTextHandler));
};

init();
