import codes from "./data/codes.json"

export const find = (code: string) => {
  if (code) {
    const result = codes[code.replace(/-/, '')];
    return result;
  }
  return null;
};
