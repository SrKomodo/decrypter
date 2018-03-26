import { Cipher, Options } from "../ciphers";

export default class Binary implements Cipher {
  name = "Binary";
  id = "binary";
  options = {};

  filter(input: string) {
    return /^(?:[01]{8})+$/g.test(input);
  }

  decipher(input: string) {
    let output = "";
    for (let i = 0; i <= input.length - 8; i += 8) {
      output += String.fromCharCode(parseInt(input.substr(i, 8), 2));
    }
    return [output];
  }
}
