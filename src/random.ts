/** Return a random integer between 2 number */
export function random(a: number, b: number) {
  if (b === undefined) {
    return Math.random() * a;
  }
  return a + Math.random() * (b - a);
}
