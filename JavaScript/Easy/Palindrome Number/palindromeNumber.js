// 10/22/2022
    var isPalindrome = (x)=> {
        let palindrome = x.toString() ;
        let reversePalindrome = palindrome.split("").reverse().join("")
        if(reversePalindrome ==palindrome ){
            return (true) 
        }
        else{
            return false
        }
    };


// Runtime: 160 ms, faster than 98.46% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 51.2 MB, less than 43.41% of JavaScript online submissions for Palindrome Number.

