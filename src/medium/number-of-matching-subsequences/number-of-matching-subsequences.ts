function destruct(s: string): [string, string] {
    if (s === "") {
        return ["", ""];
    }
    let head = s[0];
    let tail = s.slice(1);
    return [head, tail];
}

export function numMatchingSubseq(s: string, words: string[]): number {
    let w: Record<string, string[]> = {};

    for (let word of words) {
        let [head, tail] = destruct(word);
        if (!(head in w)) {
            w[head] = [];
        }
        w[head].push(tail);
    }

    for (let i = 0; i < s.length; ++i) {
        let tails: string[] = [];
        let char = s[i];
        for (let t of w[char] || []) {
            let [head, tail] = destruct(t);
            if (!(head in w)) {
                w[head] = [];
            }
            (head === char ? tails : w[head]).push(tail);
        }
        w[char] = tails;
    }

    return w[""] ? w[""].length : 0;
}
