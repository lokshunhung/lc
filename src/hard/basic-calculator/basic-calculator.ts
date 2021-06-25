const DIGITS = {
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

const SIGNS = {
    "-": -1,
    "+": 1,
};

const BRACKETS = {
    "(": "(",
    ")": ")",
};

export function tokenize(s: string): string[] {
    let tokens: string[] = [];
    let token = "";
    for (let i = 0; i < s.length; ++i) {
        let c = s[i];
        if (c === " ") {
            continue;
        } else if (c in BRACKETS || c in SIGNS) {
            if (token !== "") {
                tokens.push(token);
                token = "";
            }
            tokens.push(c);
        } else {
            // digit
            token += c;
        }
    }
    if (token !== "") {
        tokens.push(token);
        token = "";
    }
    return tokens;
}

export function computeValue(tokens: readonly string[], l: number, h: number): number {
    let i = l;
    let result = 0;
    let sign: 1 | -1 = 1;
    while (i < h) {
        if (tokens[i] === "(") {
            let openBrackets = 1;
            let j = i + 1;
            while (openBrackets !== 0) {
                if (tokens[j] === "(") ++openBrackets;
                else if (tokens[j] === ")") --openBrackets;
                ++j;
            }
            let val = computeValue(tokens, i + 1, j - 1);
            result += val * sign;
            sign = 1;
            i = j;
            continue;
        }
        if (tokens[i] in SIGNS) {
            sign *= SIGNS[tokens[i] as "+" | "-"];
        } else {
            // digit
            result += Number(tokens[i]) * sign;
            sign = 1;
        }
        ++i;
    }
    return result;
}

export function calculate(s: string): number {
    let tokens = tokenize(s);
    let result = computeValue(tokens, 0, tokens.length);
    return result;
}
