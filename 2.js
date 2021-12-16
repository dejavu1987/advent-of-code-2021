import { moves } from './2.input.js';
let horizontal = 0;
let depth = 0;

for (let i = 0; i < moves.length; i++) {
  switch (moves[i][0]) {
    case 'forward':
      horizontal += moves[i][1];
      break;
    case 'down':
      depth += moves[i][1];
      break;
    default:
      depth -= moves[i][1];
      break;
  }
}

console.log({ result: depth * horizontal });
