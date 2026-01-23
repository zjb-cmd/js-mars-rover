export default class PlateauParser {
  parsePlateauSize(inputStr) {
    const arr = inputStr.match(/[\d]{1,3}/gm).slice(0, 2); // Get only the first two numbers, up to 3 digits each
    const numberifiedArr = arr.map((coor) => parseInt(coor));

    return numberifiedArr.length === 2 ? numberifiedArr : [];
  }

  parseCompassDirections(inputStr) {
    return [];
  }
}

const inst = new PlateauParser();
