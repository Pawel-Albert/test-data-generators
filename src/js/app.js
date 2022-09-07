import * as bootstrap from 'bootstrap';
import {generateRegon} from './model/regon';
import {generateNip} from './model/nip';
import * as $ from './selectors';
import {copyTextHandler, genDataOnElement} from './helpers';
import {generateIdNumber} from './model/idNumber';

const regon = () => genDataOnElement(generateRegon, $.regonValue);
const nip = () => genDataOnElement(generateNip, $.nipValue);
const idNumber = () => genDataOnElement(generateIdNumber, $.idNumberValue);

const init = function () {
  //Base generation to populate each  field with fresh data on reload
  regon();
  nip();
  idNumber();
  //All listeners
  $.genRegonBtn.addEventListener('click', regon);
  $.genNipBtn.addEventListener('click', nip);
  $.genIdNumberBtn.addEventListener('click', idNumber);

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
