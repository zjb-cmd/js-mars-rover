import { Instructions } from "../types/instructions.js";

class InstructionParser {
  parseInstruction(rawInstruction) {
    // Should inform user if there's invalid input and give as much details as possible!
    const arr = [];
    const removed = [];
    let err = null;
    rawInstruction.split("").forEach((char) => {
      const notSpaceChar = char !== " ";
      const includedInTypes = Object.values(Instructions).includes(
        char.toUpperCase(),
      );

      if (notSpaceChar && includedInTypes) {
        arr.push(char.toUpperCase());
      } else {
        removed.push(char);
      }
    });

    return {
      result: arr,
      error: err,
      argument: rawInstruction,
      removed: removed,
    };
  }
}

export default InstructionParser;
