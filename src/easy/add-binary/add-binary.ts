const ZERO_CODE_POINT = "0".codePointAt(0)!;

export function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result: number[] = [];
    while (i >= 0 || j >= 0 || carry) {
        let aa = i >= 0 ? a[i].codePointAt(0)! - ZERO_CODE_POINT : 0;
        let bb = j >= 0 ? b[j].codePointAt(0)! - ZERO_CODE_POINT : 0;
        let sum = aa + bb + carry;
        result.push(sum % 2);
        carry = +(sum > 1);
        --i;
        --j;
    }
    return result.reverse().join("");
}
