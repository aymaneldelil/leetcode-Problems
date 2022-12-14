function smallerNumbersThanCurrent(nums: number[]): number[] {
    const smallerNumbersThanCurrent: number[] = [];
    nums.map((item) => {
        smallerNumbersThanCurrent.push(nums.filter(anotherItem => anotherItem < item).length)
    })
    return smallerNumbersThanCurrent
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));


