export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const substract = (a, b) => a - b;

export default (function doSomeMath() {
  return {
    add,
    multiply,
    substract,
  };
})();
