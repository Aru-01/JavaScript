var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let big_num = numbers[0];

for (i of numbers) {
  if (big_num < i) {
    big_num = i;
  }
}

console.log(big_num);
