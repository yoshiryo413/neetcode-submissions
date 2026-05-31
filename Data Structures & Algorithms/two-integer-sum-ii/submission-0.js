class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let rightCount = numbers.length - 1 ;
        let right = numbers[rightCount];   
        let lefCount = 0;
        let left = numbers[lefCount];


        while (lefCount < numbers.length ||  rightCount > 0  ) {

            let sum = right + left;

            if (target ==  sum) {
                return [lefCount + 1, rightCount + 1];

            } else if (sum < target) {
         
                lefCount++;
                left = numbers[lefCount];
                 
            } else {
                rightCount--;
                right = numbers[rightCount];
            }

        }
    }
}
