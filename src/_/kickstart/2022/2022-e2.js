const test = `
3
3
2000 1500 1900
5
1000 600 1000 2300 1800
2
2500 1200
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
    const s = readLine().split(" ").map(_ => parseInt(_, 10));

    const sorted = s.slice().map((_, i) => ({ val: _, i })).sort((a, b) => a.val - b.val);

    const ans = new Array(n);
    for (let i = 0; i < n; ++i) {
        const student = sorted[i];
        for (let j = n - 1; j >=0; --j) {
            const mentor = sorted[j];
            if (canBeMentor(mentor, student)) {
                ans[student.i] = mentor.val;
                break;
            }
        }
        if (ans[student.i] === undefined) ans[student.i] = -1;
    }

    return ans.join(" ");
}

function canBeMentor(mentor, mentee) {
    if (mentor.i === mentee.i) return false;
    return mentor.val <= 2 * mentee.val;
}

main();
