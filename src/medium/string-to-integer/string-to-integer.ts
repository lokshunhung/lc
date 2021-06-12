const signMap: Record<string, boolean> = {
    "+": true,
    "-": false,
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

export function myAtoi(s: string): number {
    let isPositive = true;
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
                isPositive = signMap[char];
                continue;
            } else {
                break;
            }
        }

        if (char in digitMap) {
            isLeading = false;
            let digit = digitMap[char];
            result = result * 10 + digit;

            let limit = 2 ** 31 - (isPositive ? 1 : 0);
            if (result >= limit) {
                result = limit;
                break;
            }

            continue;
        }

        break;
    }

    return (isPositive ? 1 : -1) * result;
}
