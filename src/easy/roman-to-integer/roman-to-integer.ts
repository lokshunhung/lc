const romanValue: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInt(s: string): number {
    let result = 0;
    let lastIncreasingValue = 1;

    for (let i = s.length - 1; i >= 0; --i) {
        let char = s[i];
        let value = romanValue[char];
        if (value < lastIncreasingValue) {
            result -= value;
        } else {
            result += value;
            lastIncreasingValue = value;
        }
    }

    return result;
}
