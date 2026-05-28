class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        const n = nums.length;
        const left = new Array(n).fill(1);
        const right = new Array(n).fill(1);
        const temp = [];

        // 左側の積リストを作成
        for (let i = 1; i < n; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }

        // 右側の積リストを作成
        for (let i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }

        // 掛け合わせる
        for (let i = 0; i < n; i++) {
            temp[i] = left[i] * right[i];
        }

        return temp;

    }
}
