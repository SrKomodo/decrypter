import { Cipher } from "../ciphers";

const Binary: Cipher = {
  id: "binary",
  name: "Binary",
  options: {},

  filter(input: string) {
    return /[01]{8}/g.test(input);
  },

  decipher(input: string) {
    let output = "";
    let charI = 0;
    let charCode = 0;
    for (const char of input) {
      if (char === "0" || char === "1") {
        charCode += parseInt(char, 10) * Math.pow(2, 7 - charI);
        charI++;
        if (charI === 8) {
          output += String.fromCharCode(charCode);
          charI = charCode = 0;
        }
      }
    }
    return [output];
  },
};

export default Binary;
