import { Cipher } from "../ciphers";

const Base64: Cipher = {
  id: "base64",
  name: "Base64",
  options: {},

  filter(input: string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)$/g.test(input);
  },

  decipher(input: string) {
    return [atob(input)];
  },
};

export default Base64;
