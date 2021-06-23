const VOWELS = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
};

function reverseVowels(s: string): string {
    let vowels: Array<[string, number]> = [];
    for (let i = 0; i < s.length; ++i) {
        let c = s[i];
        if (c in VOWELS) {
            vowels.push([c, i]);
        }
    }
    if (vowels.length === 0) {
        return s;
    }
    for (let i = 0; i < vowels.length / 2; ++i) {
        let tmp: number = vowels[i][1];
        vowels[i][1] = vowels[vowels.length - 1 - i][1];
        vowels[vowels.length - 1 - i][1] = tmp;
    }
    let result = s.split("");
    for (let [v, i] of vowels) {
        result[i] = v;
    }
    return result.join("");
}

test.each`
    s             | expectedOutput
    ${"hello"}    | ${"holle"}
    ${"leetcode"} | ${"leotcede"}
    ${"aA"}       | ${"Aa"}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = reverseVowels(s);
    expect(result).toBe(expectedOutput);
});
