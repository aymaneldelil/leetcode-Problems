function maxProduct(nums: number[]): number {
    nums.sort( (a,b) => a - b)
    return --nums[nums.length -1] * --nums[nums.length -2]
};
console.log(maxProduct([3,4,5,2]));
///===================================================================///
///==========================12/14/2022===============================///
//Runtime75 ms, Beats 89.13%
// Memory45.1 MB , Beat 8.70%


