const test = `
3
4
abba
4
cccc
6
cdccdc
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
    const n = parseInt(readLine(), 10);
    const p = readLine();

    for (let i = 1; i < p.length; ++i) {
        const q = p.slice(0, i);
        if (isPalindrome(p + q)) return q;
    }

    return p;
}

function isPalindrome(s) {
    for (let i = 0; i < s.length / 2; ++i) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}

main();
