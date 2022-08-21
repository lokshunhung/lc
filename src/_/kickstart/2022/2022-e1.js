const test = `
3
1
3
6
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
    let n = parseInt(readLine(), 10);

    n -= 1;
    let score = 1;

    while (n > 0) {
        n -= 3;
        if (n >= 2) {
            ++score;
            n -= 2;
        }
    }

    return score;
}

main();
