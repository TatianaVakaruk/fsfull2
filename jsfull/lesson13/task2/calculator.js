export const getSquaredArray = (arr) => {
  return arr.map((num) => {
    return num * num;
  });
};
export const getOddNumbers = (arr) => {
  return arr.filter((num) => {
    return num % 2 === 1;
  });
};
export default (a, b) => {
  return a + b;
};
