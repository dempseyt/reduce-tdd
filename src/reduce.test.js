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
  describe("Given an initial value", () => {
    it("calls the reducer once per element in the array", () => {
      const mockReducer = jest.fn();
      const array = [1, 2, 3, 4];
      const initialValue = 4;
      reduce(array, mockReducer, initialValue);
      expect(mockReducer).toHaveBeenCalledTimes(array.length);
    });
    describe("and an empty array", () => {
      it("returns the initial value", () => {
        const array = [];
        const initialValue = 4;
        function reducer(accumulator, currentItem) {
          return accumulator + currentItem;
        }

        const reducedValue = reduce(array, reducer, initialValue);
        expect(reducedValue).toEqual(initialValue);
      });
    });
  });
  describe("Given no initial value", () => {
    it("calls the reducer n-1 times for an array with n elements", () => {
      const mockReducer = jest.fn();
      const array = [1, 2, 3, 4];

      reduce(array, mockReducer);
      expect(mockReducer).toHaveBeenCalledTimes(array.length - 1);
    });
    describe("and an empty array", () => {
      it("throws an error", () => {
        const array = [];
        function reducer(accumulator, currentItem) {
          return accumulator + currentItem;
        }
        expect(() => reduce(array, reducer)).toThrow(
          "An initial value must be provided when reducing over an empty array",
        );
      });
    });
  });
});
