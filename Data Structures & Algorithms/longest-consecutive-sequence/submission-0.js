class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numSet = new Set(nums);
        let max = 0;

        for (const num of numSet) {
         
            if (!numSet.has(num - 1)) {
            
                let count = 1;
                let current = num;

                while (numSet.has(current + 1)) {
                    current++;
                    count++;
                }

                max = Math.max(max, count);
            }
        }

        return max;
    }
}
