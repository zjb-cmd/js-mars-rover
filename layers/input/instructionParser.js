import { Instructions } from "../types/instructions.js";

class InstructionParser {
  parseInstruction(rawInstruction) {
    const arr = [];
    rawInstruction.split("").forEach((char) => {
      const notSpaceChar = char !== " ";
      const includedInTypes = Object.values(Instructions).includes(
        char.toUpperCase(),
      );
      const normaliseChar = char.toUpperCase();

      if (notSpaceChar && includedInTypes) arr.push(normaliseChar);
    });

    return arr;
  }
}

export default InstructionParser;
