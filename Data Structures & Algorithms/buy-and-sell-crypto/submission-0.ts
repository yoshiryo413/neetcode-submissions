class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {

        let result = 0;
        let buy = 0;
        for (let sell = 1; sell  < prices.length; sell++) {
                if (prices[sell] < prices[buy]) {
                   buy = sell;
                } else {
                  let sum =  prices[sell] - prices[buy];
                  result = Math.max(result, sum);
                } 
        }
        return result;
    }
}
