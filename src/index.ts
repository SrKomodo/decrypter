import ciphers from "./ciphers";

const input = document.getElementById("input") as HTMLInputElement;
const output = document.getElementById("output") as HTMLPreElement;

input.addEventListener("input", () => {
  output.textContent = "";
  for (const cipher of ciphers) {
    if (cipher.filter(input.value)) {
      output.textContent += cipher.decipher(input.value).join("\n");
    }
  }
});
