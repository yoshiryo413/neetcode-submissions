class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        let map = new Map();
        let temp = [];
        let v = 0;

        for (let i = 0; nums.length > i; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1);  
            } else {
                map.set(nums[i], map.get(nums[i]) + 1);
            }
        }


        console.log(map);
        /// valueが出現回数
        let val = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
        console.log(val);
        console.log('----');

        if (val.length === 0) return nums;

        while (v < k) {
            temp.push(val[v][0]);
            v++;
        }
    
        return temp;
    }
}
