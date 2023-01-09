export const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const roundToCents = (num) => Math.round(num * 100) / 100;
export const randInt = (lower, upperInclusive) =>
    Math.floor(Math.random() * (upperInclusive + 1 - lower)) + lower;
