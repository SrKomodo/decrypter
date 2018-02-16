interface Cipher {
  filter: (input: string) => boolean;
  decipher: (input: string, passwords?: string[]) => string[];
}

import Caesar from "./ciphers/caesar";

const ciphers: Cipher[] = [
  new Caesar(),
];

export default ciphers;
export { Cipher };
