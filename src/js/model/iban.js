import {generateRandomInt, addLeadingZeros} from '../helpers';
import {
  bankBranchCode,
  randomBankCode,
  leadingZeros,
  calcControlNumber,
  ibanCountryPrefixCode
} from './IbanConfig';

export const generateIban = () => {
  const bankCodePart = randomBankCode(bankBranchCode);
  const randomPart = addLeadingZeros(
    generateRandomInt(0, 9999999999999999),
    leadingZeros
  );
  //
  const bankAndRandomPart = bankCodePart + randomPart;
  const afterSwitching = bankAndRandomPart + ibanCountryPrefixCode;
  const controlNumber = calcControlNumber(afterSwitching);

  return '' + controlNumber + bankAndRandomPart;
};
