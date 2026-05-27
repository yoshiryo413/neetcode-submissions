class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    private separator: string = '#';

    encode(strs: string[]): string {
        let str = '';
        for (let i = 0; i < strs.length; i++) {
            str +=  `${strs[i].length}${this.separator}${strs[i]}`;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        const strs = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf(this.separator, i);
            const length = Number(str.substring(i, j));
            strs.push(str.substring(j + 1, j + 1 + length));            
            i = j + 1 + length;
        }
        return strs;
    }
}
