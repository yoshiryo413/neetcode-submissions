class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        let temp : number[] = [];
        let map = new Map();

        for (let i = 0; nums.length > i; i++) {
            const complement = target - nums[i]; 

                if (map.has(complement)) {
                    temp.push(map.get(complement));
                    temp.push(i);
                }

                map.set(nums[i], i);
        }

        return temp;
    }
}
