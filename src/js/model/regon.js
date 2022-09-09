import {generateRandomInt, addLeadingZeros} from '../helpers';
import {provinceLeadingZeros, leadingZeros, controlSumDevider} from './regonConfig';

export const generateRegon = () => {
  const provinceCode = addLeadingZeros(
    generateRandomInt(0, 48) * 2 + 1,
    provinceLeadingZeros
  );
  const regonRandomPart = addLeadingZeros(generateRandomInt(0, 999999), leadingZeros);
  const core = provinceCode + regonRandomPart + '';
  const controlDigit =
    (core[0] * 8 +
      core[1] * 9 +
      core[2] * 2 +
      core[3] * 3 +
      core[4] * 4 +
      core[5] * 5 +
      core[6] * 6 +
      core[7] * 7) %
    controlSumDevider;
  const controleValue = controlDigit == 10 ? 0 : controlDigit;
  return core + controleValue;
};
