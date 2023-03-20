let nums=[3,2,4];
let target = 9;
function twoSum(nums, target) {
    for(i = 0; i <= nums.length; i++){
        if(nums[i] >= target){
            nums.splice(i);
        }
    }
    var sum = 0;
   nums.forEach(function(z) {
    sum += z;
   })
   console.log(`this ${sum}`)
   if(sum = target){
    return(nums)
   }
};

console.log(twoSum(nums, target));