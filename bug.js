function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause a bug if a or b are undefined
  }
  return a + b;
}