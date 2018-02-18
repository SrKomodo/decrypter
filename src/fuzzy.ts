function fuzzy(pattern: string, input: string) {
  let j = 0;
  for (const letter of input) {
    if (pattern[j] === letter) {
      j++;
    }
    if (j === pattern.length) {
      return true;
    }
  }
  return false;
}

export default fuzzy;
