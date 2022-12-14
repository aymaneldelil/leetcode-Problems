//--------------------------| Steps |----------------------------------//
/*
1- Loop inside Word Array.
2- Filter
*/
function prefixCount(words, pref) {
    return words.filter(function (items) { return items == pref; }).length - 1;
}
;
console.log(prefixCount(["pay", "attention", "practice", "attend"], "attend"));
