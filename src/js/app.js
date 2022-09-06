import * as bootstrap from 'bootstrap';
import {generateRegon} from './model/regon';
import {generateNip} from './model/nip';
import * as $ from './selectors';
import {copyTextHandler, genDataOnElement} from './helpers';

const regon = () => genDataOnElement(generateRegon, $.regonValue);
const nip = () => genDataOnElement(generateNip, $.nipValue);

const init = function () {
  //Base generation to populate each  field with fresh data on reload
  regon();
  nip();

  //All listeners
  $.genRegonBtn.addEventListener('click', regon);
  $.genNipBtn.addEventListener('click', nip);
  [
    $.regonValue,
    $.peselValue,
    $.nipValue,
    $.regonValue,
    $.idNumberValue,
    $.ibanValue
  ].forEach(
    element =>
      element.addEventListener('click', function () {
        copyTextHandler(element, $.copySuccess);
      }),
    false
  );
};

init();
