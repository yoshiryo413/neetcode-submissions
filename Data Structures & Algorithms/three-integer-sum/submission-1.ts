class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {

        let zero = 0;
        let temp = [];
        let val = nums.sort((a, b) => a - b);

        for (let i = 0; i < val.length; i++) {
            let left = i + 1;
            let right = val.length - 1;

            if ( i > 0 && val[i] == val[i -1]) continue;
      
            while (left < right) {
                let sum = val[i] + val[left] + val[right];
                if (sum == zero) {
                    temp.push([val[i], val[left], val[right]]);
                    left++;
                    right--; 
                while (left < right && val[left] === val[left - 1]) left++;
                while (left < right && val[right] === val[right + 1]) right--;
                
                } else if (sum < zero) {
                    left++;
                } else {
                    right--; 
                }
            }
        }
        return temp;
    }
}
