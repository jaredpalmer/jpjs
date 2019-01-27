/**
 * Shuffle the elements array and return it. (mutative)
 * @see http://bost.ocks.org/mike/shuffle/
 */
export function shuffle<T>(array: T[]) {
  var m = array.length;
  // While there remain elements to shuffle…
  while (m > 0) {
    // Pick a remaining element…
    var i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    var t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
