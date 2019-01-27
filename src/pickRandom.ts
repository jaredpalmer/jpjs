/** Randomly pick an element of an array */
export function pickRandom<T>(array: T[]) {
  // tslint:disable-next-line:no-bitwise
  var i = ~~(Math.random() * array.length);
  return array[i];
}
