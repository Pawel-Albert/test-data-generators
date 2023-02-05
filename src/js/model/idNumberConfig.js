const KEYS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const VALUES = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35
];
const createObjectTwoArrays = (KEYS, VALUES) => {
  return Object.fromEntries(KEYS.map((_, i) => [KEYS[i], VALUES[i]]));
};
export const letersToIntigiersMap = createObjectTwoArrays(KEYS, VALUES);

export const CONTROL_SUM_DEVIDER = 10;
export const NUMBER_OF_LETERS = 3; // Proper Id contains 3 letters at the beginning

export const LEADING_ZEROS = 5;
