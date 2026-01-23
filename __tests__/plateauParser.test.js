import PlateauParser from "../layers/input/plateauParser";

describe("PlateauParser class, parsePlateauSize() method", () => {
  test("Should return an array of numbers", () => {
    const inst = new PlateauParser();
    const testSize = "5 5";
    const expected = [5, 5];

    expect(inst.parsePlateauSize(testSize)).toEqual(expected);
  });
  test("Should return an emtpy array if input is incorrect", () => {
    const inst = new PlateauParser();
    const testSize = "5";
    const expected = [];

    expect(inst.parsePlateauSize(testSize)).toEqual(expected);
  });
  test("Should return an array of numbers if non standard format passed into it", () => {
    const inst = new PlateauParser();
    const testSize = "(5;5)";
    const expected = [5, 5];

    expect(inst.parsePlateauSize(testSize)).toEqual(expected);
  });
});
