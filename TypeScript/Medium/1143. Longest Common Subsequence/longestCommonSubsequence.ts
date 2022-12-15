/*
STEPS :
1- Create "Counter" Variable
2- Search in the stirng 1 for each value of the string 2
*/


function longestCommonSubsequence(text1: string, text2: string): number {
    let counter: number = 0;
    text2.split("").map(character => text1.includes(character) ? counter++ :"")
    return counter;
};
console.log(longestCommonSubsequence("ezupkr", "ubmrapg"));
/*
15-12-2022
RESULT :
Wrong Answer
12 / 45 testcases passed
nputtext1= "ezupkr"
text2    = "ubmrapg"
Output   : 3
Expected : 2
/////////////////////////
Note:
* Need learnning dynamic prgramming technique
//////////////////////////

*/
