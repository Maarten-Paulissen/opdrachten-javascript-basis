function telOp(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const result = telOp([5, 10, 15]);

console.log(result);
