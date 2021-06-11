const signMap: Record<string, 1 | -1> = {
    "+": 1,
    "-": -1,
};

const digitMap: Record<string, number> = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
};

const LIMIT_LO = -(2 ** 31);
const LIMIT_HI = 2 ** 31 - 1;

export function myAtoi(s: string): number {
    let sign: -1 | 1 = 1;
    let isLeading = true;
    let result = 0;

    for (let i = 0; i < s.length; ++i) {
        let char = s[i];

        if (char === " " && isLeading) {
            continue;
        }

        if (char in signMap) {
            if (isLeading) {
                isLeading = false;
                sign = signMap[char];
                continue;
            } else {
                break;
            }
        }

        if (char in digitMap) {
            isLeading = false;
            let digit = digitMap[char];
            result = result * 10 + sign * digit;
            if (result <= LIMIT_LO) {
                result = LIMIT_LO;
                break;
            } else if (result >= LIMIT_HI) {
                result = LIMIT_HI;
                break;
            }
            continue;
        }

        break;
    }

    return result;
}
