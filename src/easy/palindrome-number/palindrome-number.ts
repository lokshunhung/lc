export function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    let halfLength = Math.floor(Math.log10(x) + 1) / 2;
    let count = 0;
    let stack: number[] = [];
    let init: number = x;
    let last: number;
    while (init !== 0) {
        ++count;
        last = init % 10;
        init = ~~(init / 10);
        if (count <= halfLength) {
            stack.push(last);
        } else if (count > Math.ceil(halfLength)) {
            let popped = stack.pop();
            if (last !== popped) {
                return false;
            }
        }
    }
    return true;
}
