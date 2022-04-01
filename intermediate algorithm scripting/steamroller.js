function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, {}, [3, [[4]]]]);
// steamrollArray([1, [2], [3, [[4]]]])
