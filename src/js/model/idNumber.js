import {generateRandomInt, addLeadingZeros, getRandomKey} from '../helpers';
import {letersToIntigiersMap} from './idNumberConfig';

const controlSumDevider = 10;
const numberOfLeters = 3; // Proper Id contains 3 leters at the beginign
const leadingZeros = 5;

export const generateIdNumber = () => {
  let randomThreeLeters = [];
  for (let i = 1; i <= numberOfLeters; i++) {
    randomThreeLeters.push(getRandomKey(letersToIntigiersMap));
  }
  const idNumberRandomPart = addLeadingZeros(generateRandomInt(0, 99999), leadingZeros);
  const controlDigit =
    (7 * letersToIntigiersMap[randomThreeLeters[0]] +
      3 * letersToIntigiersMap[randomThreeLeters[1]] +
      1 * letersToIntigiersMap[randomThreeLeters[2]] +
      7 * idNumberRandomPart[0] +
      3 * idNumberRandomPart[1] +
      1 * idNumberRandomPart[2] +
      7 * idNumberRandomPart[3] +
      3 * idNumberRandomPart[4]) %
    controlSumDevider;
  return randomThreeLeters.join('') + controlDigit + idNumberRandomPart + '';
};
const test = generateIdNumber();

console.log(test);
