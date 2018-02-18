import { Cipher, Options } from "../ciphers";

export default class Atbash implements Cipher {
  name = "Base64";
  id = "base64";
  options = {};

  filter(input: string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)$/g.test(input);
  }

  decipher(input: string) {
    return [atob(input)];
  }
}
