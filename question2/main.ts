export function findOutlier(integers: number[]): number {
    var i: number,
    len = integers.length,
    odd: number, // odd index
    even: number, // even index
    oddCount = 0,
    evenCount = 0;

    for (i = 0; i < len; i++) {
      if (integers[i] % 2 === 0) {
        even = i;
        evenCount++;
      }
      else {
        odd = i;
        oddCount++;
      }

      // found odd outlier
      if (evenCount >= 2 && oddCount === 1) {
        return integers[odd];
      }

      // found even outlier
      if (oddCount >= 2 && evenCount === 1) {
        return integers[even];
      }
    }
}