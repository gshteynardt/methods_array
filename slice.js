import { name } from './const.js';

const copy = name.slice();
const villains = name.slice(2);

console.log(copy === name);
console.log({ villains });
