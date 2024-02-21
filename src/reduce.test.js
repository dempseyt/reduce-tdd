import reduce from "./reduce";

describe("reduce", () => {
  it("should reduce an array of numbers to their sum", () => {
    const array = [1, 2, 3, 4];
    function reducer(accumulator, currentItem) {
      return accumulator + currentItem;
    }
    const sumOfNumbersInAnArray = reduce(array, reducer);
    expect(sumOfNumbersInAnArray).toBe(10);
  });
  it("should use initial value as accumulator instead of first element", () => {
    const array = [1, 2, 3, 4];
    const initial = 4;
    function reducer(accumulator, currentItem) {
      return accumulator + currentItem;
    }

    const sumOfNumbersInAnArray = reduce(array, reducer, initial);
    expect(sumOfNumbersInAnArray).toBe(14);
  });
  it("does not modify the original array", () => {
    const array = [1, 2, 3, 4];
    const initialValue = 4;
    function reducer(accumulator, currentItem) {
      return accumulator + currentItem;
    }
    reduce(array, reducer, initialValue);
    expect(array).toStrictEqual([1, 2, 3, 4]);
  });
});
