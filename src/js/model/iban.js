import {generateRandomInt, addLeadingZeros} from '../helpers';
import {
  BANK_BRANCH_CODE,
  randomBankCode,
  leadingZeros,
  calcControlNumber,
  IBAN_COUNTRY_PREFIX_CODE
} from './IbanConfig';

export const generateIban = () => {
  const bankCodePart = randomBankCode(BANK_BRANCH_CODE);
  const randomPart = addLeadingZeros(
    generateRandomInt(0, 9999999999999999),
    leadingZeros
  );
  //
  const bankAndRandomPart = bankCodePart + randomPart;
  const afterSwitching = bankAndRandomPart + IBAN_COUNTRY_PREFIX_CODE;
  const controlNumber = calcControlNumber(afterSwitching);

  return '' + controlNumber + bankAndRandomPart;
};
