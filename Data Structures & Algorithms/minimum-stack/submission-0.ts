class MinStack {

    private stack: number[] = [];
    private minStack: number[] = [];

    constructor() {}
    
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        
        if (this.minStack.length != 0 && this.stack.length != 0) {
            
            /// 最小値が入る
           if (val > this.minStack[this.minStack.length - 1]) {     
                   this.minStack.push(this.minStack[this.minStack.length - 1]);
                   this.stack.push(val);
            } else {
                this.minStack.push(val)
                this.stack.push(val);
            }
         
        } else {
            this.stack.push(val);
            this.minStack.push(val);
        }

    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length -1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length -1];
    }
}
