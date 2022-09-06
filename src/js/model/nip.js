import {departmentCodeNumber} from './nipConfig';
import {generateRandomInt, addLeadingZeros, randomArrayElement} from '../helpers';

const leadingZeros = 6; // Base on regon with 9 digits
const controlSumDevider = 11; // Constant value provided by goverment

export const generateNip = () => {
  const randomDeparmentCodeNumber = randomArrayElement(departmentCodeNumber);
  const nipRandomPart = addLeadingZeros(generateRandomInt(0, 999999), leadingZeros);
  const core = randomDeparmentCodeNumber + nipRandomPart;
  const controleModulo =
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
  if (controleModulo == 10) return generateNip();
  return core + controleModulo;
};
