import {generateRandomInt, addLeadingZeros} from '../helpers';
import {
  randomTimeStamp,
  getDatePartPesel,
  timeStampToLocaleDate,
  controlDigit,
  peselControlConstants,
  leadingZeros
} from './peselConfig';

export const generatePesel = sex => {
  const timeStamp = randomTimeStamp();
  const datePart = getDatePartPesel(timeStampToLocaleDate(timeStamp));
  const randomPart = addLeadingZeros(generateRandomInt(0, 999), leadingZeros);
  const sexFieldPart =
    sex === 'both'
      ? generateRandomInt(0, 9)
      : sex === 'male'
      ? generateRandomInt(0, 4) * 2 + 1
      : generateRandomInt(0, 4) * 2;
  const controlDigitValue = controlDigit(
    peselControlConstants,
    datePart + randomPart + sexFieldPart
  );
  return datePart + randomPart + sexFieldPart + controlDigitValue;
};
