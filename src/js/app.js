import * as bootstrap from 'bootstrap';
import {generateRegon} from './model/regon';
import {generateNip} from './model/nip';
import * as $ from './selectors';
import {copyTextHandler, genDataOnElement, genDataOnElementPesel} from './helpers';
import {generateIdNumber} from './model/idNumber';
import {generatePesel} from './model/pesel';
import {sex} from './model/peselConfig';

const regon = () => genDataOnElement(generateRegon, $.regonValue);
const nip = () => genDataOnElement(generateNip, $.nipValue);
const idNumber = () => genDataOnElement(generateIdNumber, $.idNumberValue);
const pesel = () => genDataOnElementPesel(generatePesel(sex), $.peselValue);

const init = function () {
  //Base generation to populate each  field with fresh data on reload
  regon();
  nip();
  idNumber();
  pesel();
  //All listeners
  $.genRegonBtn.addEventListener('click', regon);
  $.genNipBtn.addEventListener('click', nip);
  $.genIdNumberBtn.addEventListener('click', idNumber);
  $.genPeselBtn.addEventListener('click', pesel);

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
