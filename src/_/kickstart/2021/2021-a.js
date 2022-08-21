const test = `
2
5 1
ABCAA
4 2
ABAA
`.trim()

const fs = require("fs");

const input = !process.env.WALLABY_ENV
    ? fs.readFileSync(0, "utf8").trim().split("\n")
    : test.split("\n");

function readLine() {
    readLine.currentLine = readLine.currentLine || 0;
    return input[readLine.currentLine++];
}

function main() {
    const t = readLine();
    for (let i = 0; i < t; ++i) {
        const answer = solve();
        console.log(`Case #${i + 1}: ${answer}`);
    }
}

function solve() {
    const [n, k] = readLine()
        .trim()
        .split(" ")
        .map(_ => parseInt(_, 10));
    const s = readLine();

    const goodness = calculateGoodness(s);

    return Math.abs(goodness - k);
}

function calculateGoodness(s) {
    let score = 0;
    for (let i = 0; i < s.length / 2; ++i) {
        const c1 = s[i], c2 = s[s.length - 1 - i];
        if (c1 !== c2) ++score;
    }
    return score;
}

main();
