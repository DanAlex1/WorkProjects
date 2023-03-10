let nums=[2,7,11,15];
let target = 9;
function twoSum(nums, target) {
    for(i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            nums.splice(i, 1);
        }
    }
    return(nums)
};

console.log(twoSum(nums, target))