import { start } from "repl";

function reduce(array, reducer, initialValue) {
  let accumulator;
  let startPoint;
  if (initialValue === undefined) {
    accumulator = array[0];
    startPoint = 1;
  } else {
    accumulator = initialValue;
    startPoint = 0;
  }
  for (let i = startPoint; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }
  return accumulator;
}

export default reduce;
