class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {

        let max = 0;
        let left = 0;
        let frequent = 0;
        let check = new Map();


        for (let i = 0; i < s.length; i++) {
             
             /// mapでカウント
             if (!check.has(s[i])) {
                check.set(s[i] , 1);
             } else {
                check.set(s[i] ,check.get(s[i]) + 1);
             }

             /// 頻出の文字列の回数を取得
             frequent = Math.max(frequent, check.get(s[i]));

            while ((i - left + 1) -  frequent > k) {
                check.set(s[left] ,check.get(s[left]) - 1);
                left++;
            }
             max = Math.max(max, i - left + 1);
        }

   
        return max;

    }
}
