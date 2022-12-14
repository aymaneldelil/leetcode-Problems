

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let outputArray: number[] = []

    arr2.map(itemArray2 => arr1.filter(itemArray1 => itemArray1 == itemArray2 ? outputArray.push(itemArray1) :"7"))
    return outputArray
};



console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]));



