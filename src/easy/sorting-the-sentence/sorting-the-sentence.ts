export function sortSentence(s: string): string {
    return s
        .split(" ")
        .map((_) => _.match(/^(.*)(\d+)$/)!)
        .sort(([, , a], [, , b]) => +a - +b)
        .map(([, w]) => w)
        .join(" ");
}

// const DIGITS = {
//     "0": 0,
//     "1": 1,
//     "2": 2,
//     "3": 3,
//     "4": 4,
//     "5": 5,
//     "6": 6,
//     "7": 7,
//     "8": 8,
//     "9": 9,
// };
// export function sortSentence(s: string): string {
//     let words: Array<{ w: string; p: number }> = [];
//     let i = 0;
//     for (let c of s) {
//         if (c === " ") {
//             ++i;
//             continue;
//         }
//         if (words.length === i) {
//             words[i] = { w: "", p: -1 };
//         }
//         words[i].w += c;
//     }
//     for (let word of words) {
//         let w = word.w;
//         let i = w.length - 1;
//         while (w[i] in DIGITS) {
//             --i;
//         }
//         word.p = Number(w.slice(i + 1));
//         word.w = w.slice(0, i + 1);
//     }
//     return words
//         .sort((a, b) => a.p - b.p)
//         .map((word) => word.w)
//         .join(" ");
// }
