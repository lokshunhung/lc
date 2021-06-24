import { sortSentence } from "./sorting-the-sentence";

test.each`
    s                           | expectedOutput
    ${"is2 sentence4 This1 a3"} | ${"This is a sentence"}
    ${"Myself2 Me1 I4 and3"}    | ${"Me Myself and I"}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = sortSentence(s);
    expect(result).toBe(expectedOutput);
});
