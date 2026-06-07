class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {

        let check = new Map();
        let check2 = new Map();
        let temp = []
        let x = 0;

        for (let i = 0; i < s1.length; i++) {
             if (!check.has(s1[i])) {
                check.set(s1[i] , 1);
             } else {
                check.set(s1[i] ,check.get(s1[i]) + 1);
             }
        }

        for (let v = 0; v < s2.length; v++) {
           
            if (temp.length < s1.length) {
                temp.push(s2[v]);
            } else {
                temp.shift();
                temp.push(s2[v]);
            }

            if (temp.length == s1.length) {
                while (x < temp.length) {
                    if (check.has(temp[x])) {
                       check2.set(temp[x], (check2.get(temp[x]) ?? 0) + 1);
                    } else {
                        break;
                    }
                     x++;
                }

               let ans = [...check].every(([key, val]) => check2.get(key) === val);
               if (ans) return true;
                /// 初期化
                check2 = new Map();
                x = 0;
            }       
        }
        return false;
    }
}

