export function countAndSay(n: number): string {
    if (n === 1) {
        return "1";
    }
    let s = countAndSay(n - 1);
    let result: Array<[string, number]> = [];
    let last: [string, number] | null = null;
    for (let digit of s) {
        if (last === null) {
            last = [digit, 1];
        } else if (last[0] === digit) {
            ++last[1];
        } else {
            result.push(last);
            last = [digit, 1];
        }
    }
    result.push(last!);
    return result.map(([digit, cnt]) => `${cnt}${digit}`).join("");
}
