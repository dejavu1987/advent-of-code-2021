import { input } from './1.input.js';

let singleIncrements = 0;
let windowIncrements = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] < input[i + 1]) {
    singleIncrements++;
  }
}

for (let i = 0; i < input.length - 2; i++) {
  if (
    input[i] + input[i + 1] + input[i + 2] <
    input[i + 1] + input[i + 2] + input[i + 3]
  ) {
    windowIncrements++;
  }
}

console.log({ singleIncrements, windowIncrements });
