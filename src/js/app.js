import * as bootstrap from 'bootstrap';
import {generateRegon} from './model/regon';
import {generateNip} from './model/nip';
import * as $ from './selectors';
import {copyTextHandler, genDataOnElement} from './helpers';
import {generateIdNumber} from './model/idNumber';
import {generatePesel} from './model/pesel';
import {sex} from './model/peselConfig';
import {generateIban} from './model/iban';

const regon = () => genDataOnElement(generateRegon, $.regonValue);
const nip = () => genDataOnElement(generateNip, $.nipValue);
const idNumber = () => genDataOnElement(generateIdNumber, $.idNumberValue);
const pesel = () => genDataOnElement(generatePesel(sex), $.peselValue);
const iban = () => genDataOnElement(generateIban, $.ibanValue);

const init = function () {
  //Base generation to populate each  field with fresh data on reload
  regon();
  nip();
  idNumber();
  pesel();
  iban();
  //All listeners
  $.genRegonBtn.addEventListener('click', regon);
  $.genNipBtn.addEventListener('click', nip);
  $.genIdNumberBtn.addEventListener('click', idNumber);
  $.genPeselBtn.addEventListener('click', pesel);
  $.genIbanBtn.addEventListener('click', iban);

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
