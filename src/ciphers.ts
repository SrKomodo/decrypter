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
  decipher: (input: string, options: Options, passwords?: string[]) => string[];
}

import Caesar from "./ciphers/caesar";

const cipherArray: Cipher[] = [
  new Caesar(),
];

const ciphers: {[id: string]: Cipher} = {};
for (const cipher of cipherArray) {
  ciphers[cipher.id] = cipher;
}

export default ciphers;
export { Cipher, Options, Option };
