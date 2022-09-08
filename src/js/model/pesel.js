import {generateRandomInt, addLeadingZeros} from '../helpers';
import {
  randomTimeStamp,
  getDatePartPesel,
  timeStampToLocaleDate,
  controlDigit,
  peselControlConstants
} from './peselConfig';
const leadingZeros = 3;

export const generatePesel = sex => {
  const genTimeStamp = randomTimeStamp();
  const datePart = getDatePartPesel(timeStampToLocaleDate(genTimeStamp));
  const genRandomPart = addLeadingZeros(generateRandomInt(0, 999), leadingZeros);
  const genSexFieldPart =
    sex === 'both'
      ? generateRandomInt(0, 9)
      : sex === 'male'
      ? generateRandomInt(0, 4) * 2 + 1
      : generateRandomInt(0, 4) * 2;
  const controlDigitValue = controlDigit(
    peselControlConstants,
    datePart + genRandomPart + genSexFieldPart
  );
  return datePart + genRandomPart + genSexFieldPart + controlDigitValue;
};
