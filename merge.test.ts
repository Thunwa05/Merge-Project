import { merge } from './merge';

function testMerge() {
  const collection_1 = [1, 3, 5];
  const collection_2 = [2, 4, 6];
  const collection_3 = [9, 8, 7];

  console.log('Expected:', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log('Result:  ', merge(collection_1, collection_2, collection_3));
}

testMerge();
