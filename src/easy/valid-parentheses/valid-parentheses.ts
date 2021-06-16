const openBracket: Record<string, boolean> = {
    "(": true,
    "[": true,
    "{": true,
};

const closeBracket: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
};

export function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let char of s) {
        if (char in openBracket) {
            stack.push(char);
            continue;
        }
        if (char in closeBracket) {
            let matchingOpenBracket = closeBracket[char];
            let popped = stack.pop();
            if (popped !== matchingOpenBracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
