import { Cipher, Options } from "../ciphers";
import { shiftChar } from "./caesar";

function vigenereShift(charCode: number, passwordCharCode: number) {
  if (passwordCharCode < 65 || passwordCharCode > 90) {
    return String.fromCharCode(charCode);
  }
  console.log(passwordCharCode - 65);
  return shiftChar(charCode, 26 - (passwordCharCode - 65));
}

export default class Vigenere implements Cipher {
  name = "Vigenere Cipher";
  id = "vigenere";
  options = {
    countAll: {
      enabled: false,
      name: "Count all characters",
    },
  };

  filter(input: string) {
    return /[A-Z]+/gi.test(input);
  }

  decipher(input: string, options: Options, passwords: string[]) {
    input = input.toUpperCase();
    const results = [];
    for (let password of passwords) {
      password = password.toUpperCase();
      let result = "";
      let offset = 0;
      for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        if (!options.countAll.enabled && (charCode < 65 || charCode > 90)) {
          offset++;
        }
        result += vigenereShift(
          charCode,
          password.charCodeAt((i - offset) % password.length),
        );
      }
      results.push(result);
    }
    return results;
  }
}
