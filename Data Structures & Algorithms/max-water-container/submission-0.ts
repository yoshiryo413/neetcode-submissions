class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result = 0;
        let left = 0;
        let right = heights.length - 1;

            while (left < right) {
                /// 幅
                let length = right - left;

                /// 水
                let sum =  Math.min(heights[left], heights[right]) * length;

                if (heights[left] < heights[right]) {
                   left++; 
                } else {
                  right--; 
                }
                result = Math.max(result, sum);
               
            }        

        return result;
    }
}
