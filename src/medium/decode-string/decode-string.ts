const DIGITS = {
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
    "0": true,
};

export function decodeString(s: string): string {
    if (s.length === 0) {
        return "";
    }

    if (!(s[0] in DIGITS)) {
        return s[0] + decodeString(s.slice(1));
    }

    let startIndex = 0;
    let digitBuffer: string[] = [];
    for (; s[startIndex] in DIGITS; ++startIndex) {
        digitBuffer.push(s[startIndex]);
    }
    let repeatCount = digitBuffer.reduce((acc, cur): number => acc * 10 + Number(cur), 0);

    let endIndex = startIndex + 1;
    for (let numOpenBrackets = 1; numOpenBrackets !== 0; ++endIndex) {
        if (s[endIndex] === "[") {
            ++numOpenBrackets;
        } else if (s[endIndex] === "]") {
            --numOpenBrackets;
        }
    }
    let repeatSlice = s.slice(startIndex + 1, endIndex - 1);
    return new Array(repeatCount).fill(decodeString(repeatSlice)).join("") + decodeString(s.slice(endIndex));
}
