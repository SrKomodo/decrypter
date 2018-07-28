import { Cipher } from "../ciphers";

const Hex: Cipher = {
  id: "hex",
  name: "Hexadecimal",
  options: {},

  filter(input: string) {
    return /[0-9a-f]{2}/gi.test(input);
  },

  decipher(input: string) {
    let output = "";
    let charI = 0;
    let charCode = 0;
    for (const char of input) {
      if (/[0-9a-f]/i.test(char)) {
        charCode += parseInt(char, 16) * Math.pow(16, 1 - charI);
        charI++;
        if (charI === 2) {
          output += String.fromCharCode(charCode);
          charI = charCode = 0;
        }
      }
    }
    return [output];
  },
};

export default Hex;
