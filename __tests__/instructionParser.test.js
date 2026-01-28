import InstructionParser from "../layers/input/instructionParser.js";
import { Instructions } from "../layers/types/instructions.js";

const getRandomInstructionStr = (
  len,
  noiseLevel = 0,
  source = Object.values(Instructions).join(""),
  noiseSource = "abcdefghijklmnopqrstuvwxyz +-*/&£%$^!ABCDEFGHIJKNOPQSTUVWXYZ",
) => {
  const getRandomPos = (src) => Math.ceil(Math.random() * src.length) - 1;
  const getNoise = (level) => {
    const pos = getRandomPos(noiseSource);
    return noiseSource.substring(pos, pos + level);
  };

  let output = "";

  for (let i = 0; i < len; i++) {
    output += source[getRandomPos(source)];
    if (noiseLevel > 1 || (noiseLevel === 1 && i % 2 === 0)) {
      output += getNoise(noiseLevel);
    }
  }
  return output;
};

describe("InstructionParser class", () => {
  test("Should have a parseInstruction method", () => {
    const instance = new InstructionParser();

    expect(instance).toHaveProperty("parseInstruction");
    expect(typeof instance.parseInstruction).toBe("function");
  });
  test("parseInstruction method should return an array", () => {
    const instance = new InstructionParser();
    const parsed = instance.parseInstruction("LRM").result;
    console.log(parsed);

    expect(typeof parsed).toBe("object");
    expect(typeof parsed.length).toBe("number");
  });
  test("Should include only allowed characters in the array", () => {
    const instance = new InstructionParser();
    const allowedChars = Object.values(Instructions).join("");
    const result = instance.parseInstruction(
      getRandomInstructionStr(6, 0),
    ).result;
    console.log("result", result);
    const expected = result.filter((char) =>
      allowedChars.split("").includes(char),
    );

    expect(result).toEqual(expected);
  });
  test("Should normalise messy inputs", () => {
    const instance = new InstructionParser();
    const allowedChars = Object.values(Instructions).join("");
    const randomInstr = getRandomInstructionStr(6, 6);
    console.log("messy instruction", randomInstr);
    const result = instance.parseInstruction(randomInstr).result;
    console.log("result", result);
    const expected = result.filter((char) =>
      allowedChars.split("").includes(char),
    );

    expect(result).toEqual(expected);
  });
});
