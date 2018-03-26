import { Cipher, Options } from "../ciphers";

function shiftChar(charCode: number, offset: number) {
  if (charCode < 65 || charCode > 90) {
    return String.fromCharCode(charCode);
  } else {
    return String.fromCharCode((charCode - 65 + offset) % 26 + 65);
  }
}

function shift(input: string, offset: number) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    output += shiftChar(input.charCodeAt(i), offset);
  }
  return output;
}

export { shiftChar };
const Caesar: Cipher = {
  id: "caesar",
  name: "Caesar Cipher",
  options: {
    allOffsets: {
      enabled: true,
      name: "Try all offsets",
    },
  },

  filter(input: string) {
    return /[A-Z]+/gi.test(input);
  },

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
  },
};

export default Caesar;
