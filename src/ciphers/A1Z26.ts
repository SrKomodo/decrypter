import { Cipher } from "../ciphers";

const A1Z26: Cipher = {
  id: "a1z26",
  name: "A1Z26",
  options: {},

  filter(input: string) {
    return /([^\d]|^)(?:2[0-6]|1[0-9]|[0-9])([^\d]|$)/g.test(input);
  },

  decipher(input: string) {
    let output = "";
    let currentNumber = "";
    for (let i = 0; i < input.length; i++) {
      const letter = input.charCodeAt(i);
      const next = i === input.length - 1 ? "" : input.charCodeAt(i + 1);

      if (letter >= 48 && letter <= 57) {
        currentNumber += input[i];
        if (next < 48 || next > 57) {
          output += String.fromCharCode(64 + parseInt(currentNumber, 10));
          currentNumber = "";
        }
      } else {
        output += input[i] !== "-" ? input[i] : "";
      }
    }
    return [output];
  },
};

export default A1Z26;
