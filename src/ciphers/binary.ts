import { Cipher } from "../ciphers";

const Binary: Cipher = {
  id: "binary",
  name: "Binary",
  options: {},

  filter(input: string) {
    return /^(?:[01]{8})+$/g.test(input);
  },

  decipher(input: string) {
    let output = "";
    for (let i = 0; i <= input.length - 8; i += 8) {
      output += String.fromCharCode(parseInt(input.substr(i, 8), 2));
    }
    return [output];
  },
};

export default Binary;
