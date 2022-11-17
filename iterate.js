import { nums } from './const.js';

const multiply = num => {
  return num * num;
};

const print = num => {
  console.log(`${num}`, multiply(num));
};

nums.forEach(num => {
  if(num % 2 === 0) {
    print(num);
  }
  return;
});

for(const num of nums) {
  if(num >= 7) {
    break;
  }

  if(num % 2 === 0) {
    print(num);
  }
}
