import { Cipher } from "../ciphers";

function shift(charCode: number, offset: number) {
  if (charCode < 65 || charCode > 90) {
    return String.fromCharCode(charCode);
  }
  return String.fromCharCode((charCode - 65 + offset) % 26 + 65);
}

export default class Caesar implements Cipher {
  filter(input: string) {
    return /[A-Z]+/gi.test(input);
  }

  decipher(input: string) {
    input = input.toUpperCase();
    const results = [];

    for (let i = 0; i < 26; i++) {
      const result = [];
      for (let j = 0; j < input.length; j++) {
        result.push(shift(input.charCodeAt(j), i));
      }
      results.push(result.join(""));
    }

    return results;
  }
}
