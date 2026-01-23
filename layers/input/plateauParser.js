import { compassDirections } from "../types/compassDirections";

export default class PlateauParser {
  parsePlateauSize(inputStr) {
    const arr = inputStr.match(/[\d]{1,3}/gm).slice(0, 2); // Get only the first two numbers, up to 3 digits each
    const numberifiedArr = arr.map((coor) => parseInt(coor));

    return numberifiedArr.length === 2 ?
        { result: numberifiedArr }
      : { result: [], error: "Invalid plateau size" };
  }

  parseCompassDirections(inputStr) {
    const arr = inputStr.match(/^[\d{1,3}]|[\d]|[A-Za-z]$/gim).slice(0, 3);
    const availableDirectionsArr = Object.values(compassDirections);
    const isDirectionValid = (direction) =>
      availableDirectionsArr.includes(direction);

    if (arr.length < 3 || !isDirectionValid(arr[2]))
      return { result: [], error: "Invalid compass directions" };
    const normlisedArr = arr.map((item, index) => {
      return index < 2 ? parseInt(item) : item.toUpperCase();
    });

    return { result: normlisedArr };
  }
}

const inst = new PlateauParser();
