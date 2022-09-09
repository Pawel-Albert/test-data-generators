import {departmentCodeNumber, leadingZeros, controlSumDevider} from './nipConfig';
import {generateRandomInt, addLeadingZeros, randomArrayElement} from '../helpers';

export const generateNip = () => {
  const deparmentCodeNumber = randomArrayElement(departmentCodeNumber);
  const nipRandomPart = addLeadingZeros(generateRandomInt(0, 999999), leadingZeros);
  const core = deparmentCodeNumber + nipRandomPart;
  const controlDigit =
    (core[0] * 6 +
      core[1] * 5 +
      core[2] * 7 +
      core[3] * 2 +
      core[4] * 3 +
      core[5] * 4 +
      core[6] * 5 +
      core[7] * 6 +
      core[8] * 7) %
    controlSumDevider;
  if (controlDigit == 10) return generateNip();
  return core + controlDigit;
};
