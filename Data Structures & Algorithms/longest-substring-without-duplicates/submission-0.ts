class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        let check = new Set();
        let index = 0;
        let max = 0;

        for (let i = 0; i < s.length; i++) {

            while (check.has(s[i])) {
                check.delete(s[index]);
                index++;
            }
            check.add(s[i]);
            max = Math.max(max, check.size); 
        }
        return max;
    }
}
