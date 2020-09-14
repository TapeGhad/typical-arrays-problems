
exports.min = function min (array) {
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  return array.reduce((minimal, elem) => {
    if (elem < minimal) return elem;
    else return minimal;
  }, array[0]);
}

exports.max = function max (array) {
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  return array.reduce((maximal, elem) => {
    if (elem > maximal) return elem;
    else return maximal;
  }, array[0]);
}

exports.avg = function avg (array) {
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  let sum = array.reduce((avg, elem) => {
    return avg + elem;
  }, 0);
  return sum / array.length;
}
