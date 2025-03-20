const nums = [3, 5, 1, 4, 8];

const target = 5;

// let twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

//better time complexity

let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (rest === nums[j]) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
