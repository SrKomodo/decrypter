import { Cipher, Options } from "../ciphers";

export default class Atbash implements Cipher {
  name = "Atbash Cipher";
  id = "atbash";
  options = {};

  filter(input: string) {
    return /[A-Z]+/gi.test(input);
  }

  decipher(input: string) {
    input = input.toUpperCase();
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const charCode = input.charCodeAt(i);
      if (charCode < 65 || charCode > 90) {
        result += input[i];
      } else {
        result += String.fromCharCode(25 - (charCode - 65) + 65);
      }
    }
    return [result];
  }
}
