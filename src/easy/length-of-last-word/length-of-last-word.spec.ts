import { lengthOfLastWord } from "./length-of-last-word";

test.each`
    s                | expectedOutput
    ${"Hello World"} | ${5}
    ${" "}           | ${0}
`("_($s) -> $expectedOutput", ({ s, expectedOutput }: any) => {
    let result = lengthOfLastWord(s);
    expect(result).toBe(expectedOutput);
});
