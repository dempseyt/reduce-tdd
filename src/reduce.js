import { start } from "repl";

function reduce(array, reducer, initialValue) {
  let accumulator;
  let startPoint;
  if (initialValue === undefined) {
    if (array.length === 0) {
      throw new Error(
        "An initial value must be provided when reducing over an empty array",
      );
    }
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
