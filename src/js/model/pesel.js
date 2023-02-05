import {generateRandomInt, addLeadingZeros} from '../helpers';
import {
  randomTimeStamp,
  getDatePartPesel,
  timeStampToLocaleDate,
  controlDigit,
  PESEL_CONTROL_CONSTANTS,
  LEADING_ZEROS
} from './peselConfig';

export const generatePesel = sex => {
  const timeStamp = randomTimeStamp();
  const datePart = getDatePartPesel(timeStampToLocaleDate(timeStamp));
  const randomPart = addLeadingZeros(generateRandomInt(0, 999), LEADING_ZEROS);
  const sexFieldPart =
    sex === 'both'
      ? generateRandomInt(0, 9)
      : sex === 'male'
      ? generateRandomInt(0, 4) * 2 + 1
      : generateRandomInt(0, 4) * 2;
  const controlDigitValue = controlDigit(
    PESEL_CONTROL_CONSTANTS,
    datePart + randomPart + sexFieldPart
  );
  return datePart + randomPart + sexFieldPart + controlDigitValue;
};
