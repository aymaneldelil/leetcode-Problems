//--------------------------| Steps |----------------------------------//
/*
1- Loop inside Word Array.
2- Filter  
*/

function prefixCount(words: string[], pref: string): number {

    return words.filter(items => items == pref).length-1;
    };

    console.log(prefixCount(["pay","attention","practice","attend"] ,"attend" ));
