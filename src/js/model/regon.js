import {generateRandomInt, addLeadingZeros} from '../helpers';
const provinceLeadingZeros = 2; // base on regon with 9 digits
const leadingZeros = 6; // base on regon with 9 digits
const controlSumDevider = 11;

export const generateRegon = () => {
  const provinceCode = addLeadingZeros(
    generateRandomInt(0, 48) * 2 + 1,
    provinceLeadingZeros
  );
  const regonRandomPart = addLeadingZeros(generateRandomInt(0, 999999), leadingZeros);
  const core = provinceCode + regonRandomPart + '';
  const controleModulo =
    (core[0] * 8 +
      core[1] * 9 +
      core[2] * 2 +
      core[3] * 3 +
      core[4] * 4 +
      core[5] * 5 +
      core[6] * 6 +
      core[7] * 7) %
    controlSumDevider;
  const controleValue = controleModulo == 10 ? 0 : controleModulo;
  return core + controleValue;
};
