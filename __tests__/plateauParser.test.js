import PlateauParser from "../layers/input/plateauParser";

describe("PlateauParser class, parsePlateauSize() method", () => {
  test("Should return an array of numbers within result prop", () => {
    const inst = new PlateauParser();
    const testSize = "5 5";
    const expected = [5, 5];

    expect(inst.parsePlateauSize(testSize).result).toEqual(expected);
  });
  test("Should return an emtpy array within result prop and an error prop if input is incorrect", () => {
    const inst = new PlateauParser();
    const testSize = "5";
    const expected = [];

    expect(inst.parsePlateauSize(testSize).result).toEqual(expected);
    expect(inst.parsePlateauSize(testSize)).toHaveProperty("error");
  });
  test("Should return an array of numbers within result prop if non standard format passed into it", () => {
    const inst = new PlateauParser();
    const testSize = "(5;5)";
    const expected = [5, 5];

    expect(inst.parsePlateauSize(testSize).result).toEqual(expected);
  });
});
/*********************************************************************** */
describe("PlateauParser class, parseCompassDirection() method", () => {
  test("Should return an array of numbers following direction within result prop", () => {
    const inst = new PlateauParser();
    const testSize = "5 5 N";
    const expected = [5, 5, "N"];

    expect(inst.parseCompassDirections(testSize).result).toEqual(expected);
  });
  test("Should return an emtpy array within result prop and error prop if input is incorrect", () => {
    const inst = new PlateauParser();
    const testSize = "5,5, X";
    const expected = [];

    expect(inst.parseCompassDirections(testSize).result).toEqual(expected);
    expect(inst.parseCompassDirections(testSize)).toHaveProperty("error");
  });
  test("Should return an array of numbers following a direction within result prop if non standard format passed into it", () => {
    const inst = new PlateauParser();
    const testSize = "5,5;N";
    const expected = [5, 5, "N"];

    expect(inst.parseCompassDirections(testSize).result).toEqual(expected);
  });
});
