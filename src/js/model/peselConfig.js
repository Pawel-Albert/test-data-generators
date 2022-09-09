import {generateRandomInt} from '../helpers';
export const sex = 'both'; // Hardcoded, later when UI will be changed this will not be static value
export const leadingZeros = 3;
//TODO : For learning purposes later implement few options on UI to let user pick age, exact date sex etc.

export const randomTimeStamp = () =>
  new Date() - generateRandomInt(568036800000, 3155760000000); // Placeholder hardcoded value for age beetwen 18 and 100 years

export const timeStampToLocaleDate = timeStamp => {
  return new Date(timeStamp).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

//First 6 digits are from birth date - no need for 19 and 22 century cases at they are not possible either way
export const getDatePartPesel = date => {
  const digitOneFromYear = date.slice(8, 9);
  const digitTwoFromyear = date.slice(9, 10);
  const milenialPartFromYear = date.slice(6, 8);

  const digitThreeFromyear =
    milenialPartFromYear == 20 ? parseInt(date.slice(3, 4)) + 2 : date.slice(3, 4);
  const digitFourFromyear = date.slice(4, 5);
  const digitFiveFromyear = date.slice(0, 1);
  const digitSixFromyear = date.slice(1, 2);
  return (
    digitOneFromYear +
    digitTwoFromyear +
    digitThreeFromyear +
    digitFourFromyear +
    digitFiveFromyear +
    digitSixFromyear
  );
};

export const peselControlConstants = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

export const controlDigit = (weights, string) => {
  const stringToArray = [...string];
  let controlSum = 0;
  for (let i = 0; i < stringToArray.length; i++) {
    controlSum += stringToArray[i] * weights[i];
  }
  const controlSumDigitValue = controlSum % 10;
  const controlDigitValue = 10 - controlSumDigitValue;
  return controlDigitValue == 10 ? '0' : controlDigitValue;
};
