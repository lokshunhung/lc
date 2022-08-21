const test = `
2
3 0 1 1 2
+ 1
- 2
+ 3
/ 4
3 0 1 2 3
- 2
- 2
- 2
- 2
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
    const [n, p, m, ar, ac] = readLine().trim().split(" ").map(_ => parseInt(_, 10));
    const fN = parseTollFn(readLine());
    const fE = parseTollFn(readLine());
    const fW = parseTollFn(readLine());
    const fS = parseTollFn(readLine());

    return "";
}

function parseTollFn(s) {
    let [op, val] = s.split(" ");
    val = parseInt(val, 10);
    switch (op) {
        case "+":
            return _ => _ + val;
        case "-":
            return _ => _ - val;
        case "*":
            return _ => _ * val;
        case "*":
            return _ => Math.floor(_ / val);
    }
}

main();
