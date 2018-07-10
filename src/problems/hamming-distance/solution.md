```
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const hammingDistance = (x, y) => {
  let val = x ^ y;
  let distance;

  for (distance = 0; val > 0; distance++) {
    val = val & (val - 1);
  }
  console.log(`Hamming distance is ${distance}`);
  return distance;
};

hammingDistance(x, y);
```