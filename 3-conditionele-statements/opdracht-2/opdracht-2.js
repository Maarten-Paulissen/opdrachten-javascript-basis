function maximum(a, b, c) {
  let grootste = a;
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(maximum(10, 20, 15));
