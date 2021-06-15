const romanComp: Record<number, number[]> = {
    "0": [],
    "1": [1],
    "2": [1, 1],
    "3": [1, 1, 1],
    "4": [1, 5],
    "5": [5],
    "6": [5, 1],
    "7": [5, 1, 1],
    "8": [5, 1, 1, 1],
    "9": [1, 10],
};

const expRoman: Record<number, string[]> = {
    "1": ["I", "X", "C", "M"],
    "5": ["V", "L", "D"],
};

function toExpRoman(digit: number, exp: number): string {
    let result = "";
    let comps = romanComp[digit];
    for (let comp of comps) {
        let char: string;
        if (comp === 10) {
            char = expRoman[1][exp + 1];
        } else {
            char = expRoman[comp][exp];
        }
        result += char;
    }
    return result;
}

export function intToRoman(num: number): string {
    let result = "";
    let exp = 0;
    let init = num;
    let last: number;

    while (init !== 0) {
        last = init % 10;
        init = ~~(init / 10);
        result = `${toExpRoman(last, exp)}${result}`;
        ++exp;
    }

    return result;
}
