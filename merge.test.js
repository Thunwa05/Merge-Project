"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
function testMerge() {
    var collection_1 = [1, 3, 5];
    var collection_2 = [2, 4, 6];
    var collection_3 = [9, 8, 7];
    console.log('Expected:', [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log('Result:  ', (0, merge_1.merge)(collection_1, collection_2, collection_3));
}
testMerge();
