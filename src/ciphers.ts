interface Option {
  name: string;
  enabled: boolean;
}

interface Options {
  [id: string]: Option;
}

interface Cipher {
  name: string;
  id: string;
  options: Options;
  filter: (input: string) => boolean;
  decipher: (input: string, options: Options, passwords: string[]) => string[];
}

import A1Z26 from "./ciphers/A1Z26";
import Atbash from "./ciphers/atbash";
import Binary from "./ciphers/binary";
import Caesar from "./ciphers/caesar";
import Vigenere from "./ciphers/vigenere";

const cipherArray: Cipher[] = [
  new Caesar(),
  new Vigenere(),
  new Atbash(),
  new A1Z26(),
  new Binary(),
];

const ciphers: {[id: string]: Cipher} = {};
for (const cipher of cipherArray) {
  ciphers[cipher.id] = cipher;
}

export default ciphers;
export { Cipher, Options, Option };
