import { Cipher, Options } from "../ciphers";

function shift(input: string, offset: number) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if (charCode < 65 || charCode > 90) {
      output += String.fromCharCode(charCode);
    } else {
      output += String.fromCharCode((charCode - 65 + offset) % 26 + 65);
    }
  }
  return output;
}

export default class Caesar implements Cipher {
  name = "Caesar Cipher";
  id = "caesar";
  options = {
    allOffsets: {
      enabled: true,
      name: "Try all offsets",
    },
  };

  filter(input: string) {
    return /[A-Z]+/gi.test(input);
  }

  decipher(input: string, options: Options) {
    input = input.toUpperCase();
    const results = [];

    if (options.allOffsets.enabled) {
      for (let i = 0; i < 26; i++) {
        results.push(shift(input, i));
      }
    } else {
      results.push(shift(input, 23));
    }
    return results;
  }
}
