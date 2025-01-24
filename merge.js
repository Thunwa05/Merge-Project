"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    var result = [];
    var i = 0, j = 0, k = collection_3.length - 1;
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        if (i < collection_1.length && (j >= collection_2.length || collection_1[i] <= collection_2[j]) && (k < 0 || collection_1[i] <= collection_3[k])) {
            result.push(collection_1[i++]);
        }
        else if (j < collection_2.length && (i >= collection_1.length || collection_2[j] <= collection_1[i]) && (k < 0 || collection_2[j] <= collection_3[k])) {
            result.push(collection_2[j++]);
        }
        else if (k >= 0) {
            result.push(collection_3[k--]);
        }
    }
    return result;
}
if (require.main === module) {
    var collection_1 = [1, 3, 5];
    var collection_2 = [2, 4, 6];
    var collection_3 = [9, 8, 7];
    console.log(merge(collection_1, collection_2, collection_3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
