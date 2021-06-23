const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);

function addChars(c1: string, c2: string): [string, boolean] {
    let result = c1.charCodeAt(0) + c2.charCodeAt(0) - ZERO;
    if (result > NINE) {
        return [String.fromCharCode(result - 10), true];
    } else {
        return [String.fromCharCode(result), false];
    }
}

export function addStrings(num1: string, num2: string): string {
    if (num1.length === 0) {
        return num2;
    }
    if (num2.length === 0) {
        return num1;
    }
    let [result, carry] = addChars(num1.slice(-1), num2.slice(-1));
    let num1Head = num1.slice(0, -1);
    let num2Head = num2.slice(0, -1);
    if (carry) {
        num1Head = addStrings(num1Head, "1");
    }
    return `${addStrings(num1Head, num2Head)}${result}`;
}
