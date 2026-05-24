class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let map = new Map();

        for (let i = 0; strs.length > i ; i++) {

            /// ここで文字列sort
            const anagram =  strs[i].split("").sort().join("");

            if (!map.has(anagram)) {
                map.set(anagram, [strs[i]]);
            } else {
                map.get(anagram).push(strs[i]);
            }

        }

        console.log(Array.from(map.values()));

        return Array.from(map.values());
    }
}
