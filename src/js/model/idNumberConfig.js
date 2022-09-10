const keys = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const values = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35
];
const createObjectTwoArrays = (keys, values) => {
  return Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
};
export const letersToIntigiersMap = createObjectTwoArrays(keys, values);

export const controlSumDevider = 10;
export const numberOfLeters = 3; // Proper Id contains 3 letters at the beginning

export const leadingZeros = 5;
