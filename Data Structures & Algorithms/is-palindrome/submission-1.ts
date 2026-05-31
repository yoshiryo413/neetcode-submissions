class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let right = '';
        let left = '';
        let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let length = str.length;

         console.log(str);

        for (let i = 0; i < str.length /2 ; i++) {
            
            left = str[i];
            right = str[length - 1 - i];
            if (left != right) {
                return false;
            }
        }
        return true;

    }
}
