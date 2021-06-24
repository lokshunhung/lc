export function convert(s: string, numRows: number): string {
    if (numRows <= 1) {
        return s;
    }
    let l = s.length;
    let d = numRows * 2 - 2;
    let result = "";
    for (let i = 0; i < numRows; ++i) {
        let prev = -1;
        for (let j = 0, k = i; k < l; ++j) {
            if (k !== prev) {
                result += s[k];
            }
            prev = k;
            k += j % 2 === 0 ? d - 2 * i : 2 * i;
        }
    }
    return result;
}
