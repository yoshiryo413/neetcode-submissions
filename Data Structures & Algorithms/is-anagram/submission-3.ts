class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        let map = new Map();
        let map2 = new Map();

        for (let i = 0; i < s.length; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], 1);
            } else {
                map.set(s[i], map.get(s[i])+1);
            }
        }

         for (let i = 0; i < t.length; i++) {
            if (!map2.has(t[i])) {
                 map2.set(t[i],1);
            } else {
                map2.set(t[i], map2.get(t[i])+1);
            }
        }

        const keys1 = Array.from(map.keys()).sort().join(",");
        const keys2 = Array.from(map2.keys()).sort().join(",");
        const vals1 = Array.from(map.values()).sort().join(",");
        const vals2 = Array.from(map2.values()).sort().join(",");

        return keys1 === keys2 && vals1 === vals2;
    }
}
