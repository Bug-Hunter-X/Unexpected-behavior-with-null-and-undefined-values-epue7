function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values by returning 0
  }
  return a + b;
}