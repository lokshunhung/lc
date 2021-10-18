const OFFSET_CODE_POINT = "A".codePointAt(0)!;

function getChar(num: number): string {
    return String.fromCodePoint(num + OFFSET_CODE_POINT);
}

export function convertToTitle(columnNumber: number): string {
    let result = "";
    while (columnNumber > 0) {
        result = getChar((columnNumber - 1) % 26) + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return result;
}
