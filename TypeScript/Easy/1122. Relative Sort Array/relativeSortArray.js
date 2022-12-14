function relativeSortArray(arr1, arr2) {
    var outputArray = [];
    arr2.map(function (itemArray2) { return arr1.filter(function (itemArray1) { return itemArray1 == itemArray2 ? outputArray.push(itemArray1) : "7"; }); });
    return outputArray;
}
;
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
