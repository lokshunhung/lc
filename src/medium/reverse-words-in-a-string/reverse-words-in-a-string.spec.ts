import { reverseWords } from "./reverse-words-in-a-string";

test.each`
    s                                 | expectedOutput
    ${"the sky is blue"}              | ${"blue is sky the"}
    ${"  hello world  "}              | ${"world hello"}
    ${"a good   example"}             | ${"example good a"}
    ${"  Bob    Loves  Alice   "}     | ${"Alice Loves Bob"}
    ${"Alice does not even like bob"} | ${"bob like even not does Alice"}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = reverseWords(s);
    expect(result).toBe(expectedOutput);
});
