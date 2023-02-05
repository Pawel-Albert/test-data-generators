import {generateRandomInt, addLeadingZeros} from '../helpers';
import {PROVINCE_LEADING_ZEROS, LEADING_ZEROS, CONTROL_SUM_DEVIDER} from './regonConfig';

export const generateRegon = () => {
  const provinceCode = addLeadingZeros(
    generateRandomInt(0, 48) * 2 + 1,
    PROVINCE_LEADING_ZEROS
  );
  const regonRandomPart = addLeadingZeros(generateRandomInt(0, 999999), LEADING_ZEROS);
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
    CONTROL_SUM_DEVIDER;
  const controleValue = controlDigit == 10 ? 0 : controlDigit;
  return core + controleValue;
};
