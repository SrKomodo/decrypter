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
import Base64 from "./ciphers/base64";
import Binary from "./ciphers/binary";
import Caesar from "./ciphers/caesar";
import Vigenere from "./ciphers/vigenere";

const cipherArray: Cipher[] = [
  Caesar,
  Vigenere,
  Atbash,
  A1Z26,
  Binary,
  Base64,
];

const ciphers: {[id: string]: Cipher} = {};
for (const cipher of cipherArray) {
  ciphers[cipher.id] = cipher;
}

export default ciphers;
export { Cipher, Options, Option };
