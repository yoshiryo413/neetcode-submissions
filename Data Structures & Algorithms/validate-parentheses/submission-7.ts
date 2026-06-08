class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        if (s.length < 2) return false

        let temp = []
        const pair = new Map([
            [')', '('],
            [']', '['],
            ['}', '{'],
        ]);

        for (let i = 0; i < s.length; i++) {

            if (!pair.has(s[i])) {
                temp.push(s[i]);
            /// 最初に閉じ括弧が来た場合
            } else if (pair.has(s[i]) && temp.length == 0) {
                return false;
            } else if (pair.has(s[i]) && temp.length != 0) {
                let val = pair.get(s[i]);
                let stack = temp[temp.length - 1];
                if (val == stack) {
                    temp.pop();
                } else {
                    return false;
                }
            } 
        
        }
        
        return temp.length == 0;
    }
}
