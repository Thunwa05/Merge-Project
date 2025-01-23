export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0,
    k = collection_3.length - 1;

  while (i < collection_1.length && j < collection_2.length && k >= 0) {
    if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
      result.push(collection_1[i++]);
    } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
      result.push(collection_2[j++]);
    } else {
      result.push(collection_3[k--]);
    }
  }

  while (i < collection_1.length) result.push(collection_1[i++]);
  while (j < collection_2.length) result.push(collection_2[j++]);
  while (k >= 0) result.push(collection_3[k--]);

  return result;
}

if (require.main === module) {
  const collection_1 = [1, 3, 5];
  const collection_2 = [2, 4, 6];
  const collection_3 = [9, 8, 7];

  console.log(merge(collection_1, collection_2, collection_3));
}
